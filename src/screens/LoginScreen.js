import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
    // Add your login logic here (e.g., authentication with Firebase)
    console.log('Logging in with:', email, password);
    };

    return (
    <View style={styles.container}>
    <Text style={styles.title}>Login</Text>
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
        <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
        </Button>
        <Button
        onPress={() => navigation.navigate('Signup')}
        style={styles.signupButton}
        >
        Don't have an account? Sign Up
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
    signupButton: {
    marginTop: 16,
    },
});

export default LoginScreen;
