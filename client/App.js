import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Homepage from './components/Homepage/homepage';
import Navegacion from './components/Navegacion/navegacion';
import Pedidos from './components/Pedidos/pedidos'

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
          <Navegacion/>
        <ScrollView style={styles.scrollView}>
          <Pedidos/>
          <Homepage/>
        </ScrollView>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
