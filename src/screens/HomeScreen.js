import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
const [foodItems, setFoodItems] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState('');

useEffect(() => {
const fetchFoodItems = async () => {
try {
const response = await axios.get('https://fakeapi.dev/api/food'); // Replace with actual API URL
setFoodItems(response.data);
setLoading(false);
} catch (error) {
setError('Failed to load food items');
setLoading(false);
}
};

fetchFoodItems();
}, []);

if (loading) {
return (
<View style={styles.container}>
<ActivityIndicator size="large" color="#6200ee" />
</View>
);
}

if (error) {
return (
<View style={styles.container}>
<Paragraph>{error}</Paragraph>
</View>
);
}

return (
<View style={styles.container}>
<FlatList
data={foodItems}
keyExtractor={(item) => item.id.toString()}
renderItem={({ item }) => (
    <Card style={styles.card}>
    <Card.Content>
        <Title>{item.name}</Title>
        <Paragraph>{item.description}</Paragraph>
        <Paragraph>Rating: {item.rating}</Paragraph>
    </Card.Content>
    <Card.Actions>
        <Button onPress={() => navigation.navigate('Cart')}>Order Now</Button>
    </Card.Actions>
    </Card>
)}
/>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
padding: 16,
backgroundColor: '#f5f5f5',
},
card: {
marginBottom: 16,
},
});

export default HomeScreen;
