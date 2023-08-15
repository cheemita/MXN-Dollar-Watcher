import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button } from "react-native";
import { BarChart, LineChart } from "react-native-chart-kit";
import { parse, getYear } from "date-fns";

const DataDisplayScreen = () => {
  const [jsonData, setJsonData] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    getdatosss();
  }, []);

  useEffect(() => {
    filterData();
  }, [startDate, endDate]);

  const getdatosss = () => {
    fetch("https://raw.githubusercontent.com/cheemita/cheemita.github.io/main/csv.json")
      .then((res) => res.json())
      .then((res) => {
        setJsonData(res.dataset);
        setFilteredData(res.dataset);
      });
  };

  const filterData = () => {
    const filteredData = jsonData.filter((item) => {
      try {
        const itemDate = parse(item.PeriodUnit, "dd/MM/yyyy", new Date());
        const itemYear = getYear(itemDate);
        const startYear = startDate ? parseInt(startDate) : 0;
        const endYear = endDate ? parseInt(endDate) : Infinity;

        return itemYear >= startYear && itemYear <= endYear;
      } catch (error) {
        console.error("Error:", error);
        return false;
      }
    });

    setFilteredData(filteredData);
  };

  const chartData = filteredData.map((item) => ({
    periodUnit: new Date(item.PeriodUnit),
    mexicanPeso: parseFloat(item["Mexican peso"]),
  }));

  const chartLabels = chartData.map((item) => item.periodUnit);
  const chartValues = chartData.map((item) => item.mexicanPeso);

  return (
    <View style={styles.container}>
      {/* Bar Chart */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Gráfico de Barras</Text>
        <BarChart
          data={{
            labels: chartLabels,
            datasets: [{ data: chartValues }],
          }}
          width={500}
          height={350}
          yAxisLabel="$"
          chartConfig={{
            backgroundGradientFrom: "#f0f0f0",
            backgroundGradientTo: "#f0f0f0",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
        />
      </View>
      {/* Line Chart */}

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Gráfico de Línea (2003-2006)</Text>
        <LineChart
          data={{
            labels: chartLabels, // Usa las mismas labels que el Bar Chart
            datasets: [{ data: chartValues }], // Usa los mismos valores que el Bar Chart
          }}
          width={500}
          height={350}
          yAxisLabel="$"
          chartConfig={{
            backgroundGradientFrom: "#f0f0f0",
            backgroundGradientTo: "#f0f0f0",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
        />
      </View>

      {/* Resto de los gráficos de línea con las mismas modificaciones */}
      
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  dataRow: {
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: "#ccc",
  },
  chartContainer: {
    marginTop: 20,
    alignContent: "center",
    justifyContent: "center",
  }, chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default DataDisplayScreen;
