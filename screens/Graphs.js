
import { StyleSheet, View } from "react-native";
import { WebView } from 'react-native-webview';

const Graficos = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://deepnote.com/@unipoli-5365/Correlaciones-50cc3e59-a36e-4d41-aa9a-7bcc23cc5cec' }}
        style={{ flex: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  
});

export default Graficos;
