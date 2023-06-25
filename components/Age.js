import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useValue } from './ValueContext';

const Age = () => {
  const age = useValue().currentValue.age;
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Age calculator</Text>
      <Text style={styles.content}>Age in years: {age}</Text>
      <Text style={styles.content}>Age in weeks: {age * 52}</Text>
      <Text style={styles.content}>Age in days: {age * 365}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  content: {
    fontSize: 18,
  },
});

export default Age;
