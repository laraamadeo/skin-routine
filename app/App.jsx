import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text className="text-red-600 font-bold" >Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
