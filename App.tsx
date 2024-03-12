import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput,Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.field}>Nome:</Text>
      <TextInput style={styles.caixaTexto}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(83, 83, 207)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  field: {
    color: '#fff',
    fontSize: 25,
  },
  caixaTexto: {
    backgroundColor: 'rgb(54,54,54)',
    width: 100,
    borderRadius: 20,
  }
});
