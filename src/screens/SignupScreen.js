import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    // Add your signup logic here (e.g., authentication with Firebase)
    console.log('Signing up with:', email, password, confirmPassword);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        theme={{ colors: { primary: '#FF725E' } }} // Customize primary color
        />
        <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        mode="outlined"
        secureTextEntry
        style={styles.input}
        theme={{ colors: { primary: '#FF725E' } }} // Customize primary color
        />
        <TextInput
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        mode="outlined"
        secureTextEntry
        style={styles.input}
        theme={{ colors: { primary: '#FF725E' } }} // Customize primary color
        />
        <Button mode="contained" onPress={handleSignup} style={styles.button}>
        Sign Up
        </Button>
        <Button
        onPress={() => navigation.navigate('Login')}
        style={styles.loginButton}
        labelStyle={styles.loginButtonText}
        >
        Already have an account? Log In
        </Button>
    </ScrollView>
    );
    };

    const styles = StyleSheet.create({
    container: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5', // Light background color
    },
    title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333', // Dark text color for better readability
    },
    input: {
    marginBottom: 16,
    backgroundColor: '#fff', // White background for input fields
    },
    button: {
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 5, // Rounded corners for the button
    backgroundColor: '#FF725E', // Primary color
    },
    loginButton: {
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 5, // Rounded corners for the button
    borderColor: '#FF725E', // Border color for button
    borderWidth: 1,
    backgroundColor: '#fff', // White background for button
    },
    loginButtonText: {
    color: '#FF725E', // Primary color for text
    },
});

export default SignupScreen;
