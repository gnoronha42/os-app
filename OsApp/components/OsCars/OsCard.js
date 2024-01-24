import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StatusLabel = ({ status }) => {
  let backgroundColor, labelText;

  switch (status) {
    case 'EM ANDAMENTO':
      backgroundColor = 'yellow';
      labelText = 'EM ANDAMENTO';
      break;
    case 'CONCLUIDO':
      backgroundColor = 'green';
      labelText = 'CONCLUIDO';
      break;
    case 'EM ATRASO':
      backgroundColor = 'red';
      labelText = 'EM ATRASO';
      break;
    default:
      backgroundColor = 'grey';
      labelText = 'INDEFINIDO';
  }

  return (
    <View style={[styles.statusLabel, { backgroundColor }]}>
      <Text style={styles.statusText}>{labelText}</Text>
    </View>
  );
};

const OsCard = ({ status, nome, empresa }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{nome}</Text>
        <Text style={styles.subtitle}>{empresa}</Text>
      </View>
      <StatusLabel status={status} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    padding: 20, // "engordar" os cards
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statusLabel: {
    paddingHorizontal: 6, 
    paddingVertical: 3,
    borderRadius: 10,
  },
  statusText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12, 
  },
  cardContent: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
  },
});

export default OsCard;
