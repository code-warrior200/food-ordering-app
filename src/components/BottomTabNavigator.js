// BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
// Import your screen components
import HomeScreen from './HomeScreen';  // Adjust the path if needed
import ProfileScreen from './ProfileScreen';  // Placeholder for Profile Screen
import OrdersScreen from './OrdersScreen';  // Placeholder for Orders Screen

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
    <NavigationContainer>
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
                iconName = 'home';
            } else if (route.name === 'Profile') {
                iconName = 'person';
            } else if (route.name === 'Orders') {
                iconName = 'list';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#6200ee',
            tabBarInactiveTintColor: 'gray',
        })}
        >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Orders" component={OrdersScreen} />
        </Tab.Navigator>
    </NavigationContainer>
    );
};

export default BottomTabNavigator;

