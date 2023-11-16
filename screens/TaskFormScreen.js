
import { StyleSheet, View } from "react-native";
import { WebView } from 'react-native-webview';

const TaskFormScreen = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://www.tradingview.com/widgetembed/?frameElementId=tradingview_228f8&symbol=FX%3AUSDMXN&interval=D&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&backgroundColor=%23ffffff&gridColor=rgba(42%2C' }}
        style={{ flex: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  
});

export default TaskFormScreen;
