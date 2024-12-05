import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const TextEditor = ({ text, setText }) => {
  return (
    <View style={styles.editor}>
      <TextInput
        style={styles.input}
        placeholder="Add text to your card"
        value={text}
        onChangeText={setText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  editor: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
});

export default TextEditor;
