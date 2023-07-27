import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import { WebView } from 'react-native-webview';

const BancoAzteca = ({ navigation, route }) => {
  
  return (
   
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://ebanking2.bancoazteca.com.mx/ebanking/public/calculadora/divisas' }}
        style={{ flex: 1 }}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BancoAzteca;
