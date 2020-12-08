import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Screen from '../components/Screen';
import defaultStyles from '../config/defaultStyles';

function WishListScreen(props) {
    return (
        <Screen style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={defaultStyles.text}>Hello ash!</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={defaultStyles.text}>Hello adam!</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={defaultStyles.text}>Hello adam!</Text>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        fontSize: 10,
        padding: 25,
        margin: 10,
        backgroundColor: defaultStyles.colors.primary,
        justifyContent: 'center',
        borderRadius: 50,
        alignItems: 'center',
    },
});

export default WishListScreen;
