import { Text, TouchableOpacity, Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { urlFor } from '../../sanity';

const CategoriesCard = ({ imgUrl, title }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.card}>
                <Image source={{ uri: urlFor(imgUrl).url() }} style={styles.image} />
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default CategoriesCard;

const baseFontSize = 16;

const styles = StyleSheet.create({
    container: {
        marginRight: 8, // Adjust the margin as desired
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        elevation: 2,
        overflow: 'hidden',
    },
    image: {
        height: 120, // Adjust the height as desired
        width: '100%',
        aspectRatio: 1, // Maintain aspect ratio for equal-sized images
    },
    title: {
        fontSize: 0.8 * baseFontSize,
        color: '#888888',
        padding: 8, // Adjust the padding as desired
    },
});
