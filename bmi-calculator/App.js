// Import necessary libraries
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';

export default function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');

  const calculateBMI = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height) / 100; // Convert cm to meters

    if (!weightNum || !heightNum || heightNum === 0) {
      Alert.alert('Invalid Input', 'Please enter valid numbers for weight and height.');
      return;
    }

    const bmiValue = (weightNum / (heightNum * heightNum)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setBmiCategory('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setBmiCategory('Normal weight');
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setBmiCategory('Overweight');
    } else {
      setBmiCategory('Obesity');
    }
  };

  return (
    <ImageBackground
      source={{ uri: "https://images.app.goo.gl/8ggbqcszuqP6Nu657" }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>BMI Calculator</Text>
        <Text style={styles.subtitle}>Powered by JECRC University</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your weight (kg)"
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your height (cm)"
          keyboardType="numeric"
          value={height}
          onChangeText={setHeight}
        />

        <TouchableOpacity style={styles.button} onPress={calculateBMI}>
          <Text style={styles.buttonText}>Calculate BMI</Text>
        </TouchableOpacity>

        {bmi && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>Your BMI: {bmi}</Text>
            <Text style={styles.resultText}>Category: {bmiCategory}</Text>
          </View>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#ff7f50',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    color: '#fff',
    marginVertical: 5,
  },
});
