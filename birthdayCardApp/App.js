import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
} from 'react-native';

export default function App() {
  const [isExplorePage, setIsExplorePage] = useState(true); // For controlling page state
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // Controls whether the form is submitted

  // Function to calculate the age
  const calculateAge = (date) => {
    const birthDate = new Date(date);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleSubmit = () => {
    if (name.trim() !== '' && birthdate.trim() !== '') {
      const calculatedAge = calculateAge(birthdate);
      setAge(calculatedAge);
      setIsSubmitted(true); // Set form as submitted, showing the card
    } else {
      Alert.alert('Please fill in both the name and birthdate.');
    }
  };

  const handleBack = () => {
    setIsSubmitted(false); // Reset form state for new input
    setName('');
    setBirthdate('');
    setAge('');
  };

  return (
    <ImageBackground
      source={require('./assets/background.jpg')} // Replace with your background image path
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        {isExplorePage ? (
          // Landing Page
          <View style={styles.landingPage}>
            <Text style={styles.header}>Welcome to the Birthday Card Factory 🎂</Text>
            <TouchableOpacity
              style={styles.exploreButton}
              onPress={() => setIsExplorePage(false)} // Show explore page options
            >
              <Text style={styles.exploreButtonText}>Explore</Text>
            </TouchableOpacity>
          </View>
        ) : (
          // Explore Page (Options for creating card or viewing cards)
          <View style={styles.explorePage}>
            <TouchableOpacity
              style={styles.cardButton}
              onPress={() => setIsExplorePage(false)} // Show the form to create a card
            >
              <Text style={styles.buttonText}>Create Birthday Card</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardButton}
              onPress={() => Alert.alert('View Created Cards functionality is not implemented yet')}
            >
              <Text style={styles.buttonText}>View Created Cards</Text>
            </TouchableOpacity>
          </View>
        )}

        {!isExplorePage && !isSubmitted && (
          // Form for creating a card (appears only when user clicks "Create Birthday Card")
          <View style={styles.formContainer}>
            <Text style={styles.header}>🎉 Create Your Birthday Card 🎂</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Name"
              placeholderTextColor="#888"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Birthdate (YYYY-MM-DD)"
              placeholderTextColor="#888"
              value={birthdate}
              onChangeText={setBirthdate}
              keyboardType="default"
            />
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        )}

        {isSubmitted && (
          // Card after form submission
          <View style={styles.cardContainer}>
            <Image
              source={require('./assets/birthday-cake.jpg')} // Replace with your birthday cake image path
              style={styles.cakeImage}
            />
            <Text style={styles.cardText}>Happy Birthday, {name}!</Text>
            <Text style={styles.cardText}>Age: {age} years old</Text>
            <TouchableOpacity
              style={styles.backButton}
              onPress={handleBack} // Reset and go back to the form
            >
              <Text style={styles.backButtonText}>Create Another Card</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for better visibility
    justifyContent: 'center',
    alignItems: 'center',
  },
  landingPage: {
    width: '80%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  exploreButton: {
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  exploreButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  explorePage: {
    width: '80%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardButton: {
    height: 50,
    backgroundColor: 'green',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  formContainer: {
    width: '90%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    alignItems: 'center',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '100%',
    paddingLeft: 10,
    backgroundColor: 'lightgray',
    borderRadius: 20,
    color: 'black',
  },
  submitButton: {
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardContainer: {
    width: '90%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    alignItems: 'center',
  },
  cakeImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 10,
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  backButton: {
    height: 40,
    backgroundColor: 'green',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
