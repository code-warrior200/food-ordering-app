import React, { useState } from 'react';
import { View, StyleSheet, Image, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
    // Add your login logic here (e.g., authentication with Firebase)
        console.log('Logging in with:', email, password);
    };

  return (
    <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inner}
        >
        <Text style={styles.title}>Welcome Back!</Text>
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
        <Button
            mode="contained"
            onPress={handleLogin}
            style={styles.button}
            labelStyle={styles.buttonText}
            >
            Login
        </Button>
        <Button
            onPress={() => navigation.navigate('Signup')}
            style={styles.signupButton}
            labelStyle={styles.buttonText}
            >
                Don't have an account? Sign Up
            </Button>
        </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5', // Light background color
    },
    inner: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 12,
        marginBottom: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        marginBottom: 24,
        textAlign: 'center',
        color: '#333', // Dark text color
    },
    input: {
        marginBottom: 16,
        borderRadius: 8, // Rounded corners
    },
    button: {
        marginTop: 16,
        borderRadius: 8, // Rounded corners
        backgroundColor: '#FF725E',
    },
    buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',

    },
    signupButton: {
    marginTop: 16,
    backgroundColor: '#FF725E', // Transparent background for the button
    },
});

export default LoginScreen;
