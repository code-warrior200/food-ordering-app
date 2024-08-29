import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
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
    <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
    />
    <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        mode="outlined"
        secureTextEntry
        style={styles.input}
    />
    <TextInput
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        mode="outlined"
        secureTextEntry
        style={styles.input}
    />
    <Button mode="contained" onPress={handleSignup} style={styles.button}>
        Sign Up
    </Button>
    <Button
        onPress={() => navigation.navigate('Login')}
        style={styles.loginButton}
    >
        Already have an account? Log In
    </Button>
    </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    },
    title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    },
    input: {
    marginBottom: 16,
    },
    button: {
    marginTop: 16,
    },
    loginButton: {
    marginTop: 16,
    },
});

export default SignupScreen;
