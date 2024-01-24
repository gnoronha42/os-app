import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import OsCard from '../components/OsCars/OsCard'; 

const HomeScreen = () => {

  const osData = [
    { id: '1', status: 'EM ANDAMENTO', nome: 'Manutenção A', empresa: 'Empresa A' },
    { id: '2', status: 'CONCLUIDO', nome: 'Reparo B', empresa: 'Empresa B' },
    { id: '3', status: 'EM ATRASO', nome: 'Instalação C', empresa: 'Empresa C' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={osData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <OsCard
            status={item.status}
            nome={item.nome}
            empresa={item.empresa}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
  },
});

export default HomeScreen;
