import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useValue } from './ValueContext';

const BMI = () => {
  const weight = useValue().currentValue.weight;
  const height = useValue().currentValue.height;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>BMI calculator</Text>
      <Text style={styles.text}>Height: {height}</Text>
      <Text style={styles.text}>Weight: {weight}</Text>
      <Text style={styles.text}>BMI: { (weight /height ** 2) * 703}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    fontSize: 18,
  },
});

export default BMI;
