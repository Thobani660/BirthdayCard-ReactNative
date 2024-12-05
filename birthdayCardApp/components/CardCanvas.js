import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native';
import TextEditor from './TextEditor';
import ImagePickerComponent from './ImagePickerComponent';

const CardCanvas = ({ onBack }) => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  return (
    <View style={styles.canvas}>
      <Button title="Back" onPress={onBack} />
      <View style={styles.card}>
        <Image
          source={image ? { uri: image } : require('../assets/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.webp')}
          style={styles.image}
        />
        <Text style={styles.text}>{text}</Text>
      </View>
      <TextEditor text={text} setText={setText} />
      <ImagePickerComponent setImage={setImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  card: {
    width: '100%',
    height: 300,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  text: {
    fontSize: 24,
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    textAlign: 'center',
  },
});

export default CardCanvas;
