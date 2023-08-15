import React from "react";
import { Text, View, StyleSheet, FlatList, Image, TextInput, Button } from "react-native";
import { parse, getYear } from "date-fns";

export default class DatosApi2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            datosss: [],
            filteredDatosss: [], // Lista de datos filtrados
            startDate: "", // Año de inicio seleccionado
            endDate: "", // Año de término seleccionado
            url:
                "https://raw.githubusercontent.com/cheemita/cheemita.github.io/main/csv.json",
        };
    }

    componentDidMount() {
        this.getdatosss();
    }

    getdatosss = () => {
        this.setState({ loading: true });

        fetch(this.state.url)
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    datosss: res.dataset,
                    filteredDatosss: res.dataset, // Inicialmente, mostrar todos los datos
                    loading: false,
                });
            });
    };

    filterData = () => {
        const { startDate, endDate, datosss } = this.state;
    
        const filteredData = datosss.filter((item) => {
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
    
        this.setState({ filteredDatosss: filteredData });
      };
      
      
      
    render() {
        if (this.state.loading) {
            return (
                <View style={styles.container}>
                    <Text style={{ textAlign: "center" }}>Cargando...</Text>
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <Text style={styles.heading}> MXN peso VS Australian dollar</Text>

                {/* Inputs para los años */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Año de inicio (YYYY)"
                        onChangeText={(text) => this.setState({ startDate: text })}
                        value={this.state.startDate}
                        keyboardType="numeric" // Usar el teclado numérico
                        maxLength={4} // Limitar a 4 dígitos
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Año de término (YYYY)"
                        onChangeText={(text) => this.setState({ endDate: text })}
                        value={this.state.endDate}
                        keyboardType="numeric" // Usar el teclado numérico
                        maxLength={4} // Limitar a 4 dígitos
                    />
                    <Button title="Filtrar" onPress={this.filterData} />
                </View>

                <FlatList
                    data={this.state.filteredDatosss} // Mostrar los datos filtrados
                    renderItem={({ item }) => (
                        <View style={styles.dataRow}>
                            <Text style={styles.info}>Dates: {item.PeriodUnit}</Text>
                            <Text style={styles.info}>
                                <Image
                                    source={require("../img/mexico.jpg")}
                                    style={{ width: 30, height: 20 }}
                                />{" "}
                                Mexican Peso: {item["Mexican peso"]}
                            </Text>
                            <Text style={styles.info}>
                                <Image
                                    source={require("../img/aus.png")}
                                    style={{ width: 30, height: 20 }}
                                />{" "}
                                Australian dollar: {item["Australian dollar"]}
                            </Text>
                        </View>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    info: {},
    container: {
        flex: 1,
        padding: 20,
    },
    heading: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    dataRow: {
        marginBottom: 10,
        borderWidth: 1,
        padding: 10,
        borderColor: "#ccc",
        position: "relative",
        backgroundColor: "white",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 5,
        marginRight: 10,
    },
});
