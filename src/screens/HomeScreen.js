import * as React from 'react';
import { View, Text } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Card>
        <Card.Content>
            <Title>Food Item</Title>
            <Paragraph>Delicious food description</Paragraph>
        </Card.Content>
        <Card.Actions>
            <Button onPress={() => navigation.navigate('Cart')}>Order Now</Button>
        </Card.Actions>
        </Card>
    </View>
    );
};

export default HomeScreen;
