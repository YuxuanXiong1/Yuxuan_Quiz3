import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useValue } from './ValueContext';

const InputComponent = ({ title, value, setValue, color }) => (
  <View style={styles.rowStyle}>
    <Text style={styles.textStyle}>{title}</Text>
    <TextInput
      value={value}
      onChangeText={setValue}
      style={[styles.inputStyle, {backgroundColor: color, width: '45%'}]}
    />
  </View>
);

const Profile = () => {
  const { currentValue, setCurrentValue } = useValue();
  const [name, setName] = useState(currentValue.name);
  const [age, setAge] = useState(currentValue.age);
  const [weight, setWeight] = useState(currentValue.weight);
  const [height, setHeight] = useState(currentValue.height);

  const updateProfile = () => setCurrentValue({ name, age, weight, height });

  return (
    <View style={[styles.container, { flex: 1 }]}>
      <Text style={styles.textStyle}>
        {`currentValue = {"name": "${name}", "age": ${age}, "weight": ${weight}, "height": ${height}}`}
      </Text>
      <View style={styles.form}>
        <InputComponent title="Name" value={name} setValue={setName} color="lightgreen" />
        <InputComponent title="Age" value={age} setValue={setAge} color="lightblue" />
        <InputComponent title="Weight" value={weight} setValue={setWeight} color="pink" />
        <InputComponent title="Height" value={height} setValue={setHeight} color="aqua" />
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Button title="SAVE PROFILE" onPress={updateProfile} />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: { padding: 10 },
  textStyle: { fontSize: 20 },
  form: { padding: 40 },
  rowStyle: { padding: 10, flexDirection: "row", justifyContent: 'space-between' },
  inputStyle: { fontSize: 20 },
});

export default Profile;
