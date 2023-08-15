
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

const MONEDAS = ({ navigation }) => {
  return (
    <View style={{ flex: 1, margin: 10 }}>
      <TouchableOpacity
          style={styles.chooseButton2} onPress={() => navigation.navigate("DatosApi")}>
          <Text style={styles.bbbb2}>MXN peso VS US dollar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.chooseButton2} onPress={() => navigation.navigate("DatosApi2")}>
          <Text style={styles.bbbb2}>MXN peso VS Australian dollar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.chooseButton2} onPress={() => navigation.navigate("DatosApi3")}>
          <Text style={styles.bbbb2}>MXN peso VS Canadian dollar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.chooseButton2} onPress={() => navigation.navigate("DatosApi4")}>
          <Text style={styles.bbbb2}>MXN peso VS UK pound sterling</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.chooseButton2} onPress={() => navigation.navigate("DatosApi5")}>
          <Text style={styles.bbbb2}>MXN peso VS Japanese yen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.chooseButton2} onPress={() => navigation.navigate("DatosApi6")}>
          <Text style={styles.bbbb2}>MXN peso VS Turkish lira</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.chooseButton2} onPress={() => navigation.navigate("charts")}>
          <Text style={styles.bbbb2}>Graphics</Text>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
    bbbb2: {
        fontSize: 18,
        color: "white"
      },
      chooseButton2: {
        marginTop: 15,
        justifyContent:"space-around",
        alignItems: "center",
        borderRadius: 10,
        borderColor: "#ffff",
        borderWidth: 1,
        padding: 25,
        backgroundColor: "#1472AA",
        
      },
});

export default MONEDAS;
