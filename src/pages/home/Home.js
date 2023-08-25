import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header/Header';
import Balance from '../../components/Balance/Balance';
import Movement from '../../components/Movement/Movement';
import Actions from '../../components/Actions/Actions';


const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '274,87',
    date: '17/08/2023',
    type: 0 // despesas
  },
  {
    id: 2,
    label: 'Pix Guilherme',
    value: '100,00',
    date: '10/08/2023',
    type: 1 // receita/entrada
  },
  {
    id: 3,
    label: 'Salário',
    value: '1.345,10',
    date: '1/09/2023',
    type: 1 // receita/entrada
  },
]

export default function Home () {
  return (
    <View style={styles.container}>
      <Header name='Dev Shiug' />

      <Balance
        saldo="15.000,00"
        gastos='-574,00'
      />
      <Actions/>
      <Text style={styles.title} >Ultimas movimentações </Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movement data={item}/> }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});
