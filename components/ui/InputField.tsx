import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (text: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChange}
      testID="input"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
  },
});

export default InputField;
