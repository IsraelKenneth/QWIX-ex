import { View, Text, TouchableOpacity, Image } from 'react-native';
import { StyleSheet } from 'react-native'
import React from 'react';
import { MapPinIcon, StarIcon } from "react-native-heroicons/outline";
import { urlFor } from '../../sanity';
import { useNavigation } from '@react-navigation/native';

const RestaurantCards = ({
    id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat
}) => {

    const navigation = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Restaurant', { id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat })

            }}


            style={styles.container}>
            <Image source={{ uri: urlFor(imgUrl).url() }} style={styles.imageView} />
            <View style={styles.card}>
                <Text style={styles.largerText}>{title}</Text>
                <View style={styles.smallerText}>
                    <StarIcon color="green" opacity={0.5} size={22} />
                    <Text style={styles.ratingText_md}><Text style={styles.greenText}>{rating}</Text> · {genre}</Text>
                </View>
                <View style={styles.address_container}>
                    <MapPinIcon color="gray" opacity={0.4} size={22} />
                    <Text style={styles.address_container_text}>Nearby · {address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default RestaurantCards;

const baseFontSize = 16;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginRight: 0.75 * baseFontSize,
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    },

    imageView: {
        height: 9 * baseFontSize,
        width: 16 * baseFontSize,
        borderRadius: 0.25 * baseFontSize,
    },

    card: {
        paddingLeft: 0.75 * baseFontSize,
        paddingBottom: 1 * baseFontSize,
    },

    largerText: {
        paddingTop: 0.5 * baseFontSize,
        fontSize: 1.125 * baseFontSize,
        lineHeight: 1.75 * baseFontSize,
        fontWeight: 'bold',
    },

    smallerText: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 0.25 * baseFontSize,
    },

    ratingText_md: {
        fontSize: 0.88 * baseFontSize,
        lineHeight: 1 * baseFontSize,
        color: '#888888',
    },

    greenText: {
        color: 'green',
    },

    address_container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 0.25 * baseFontSize,
    },

    address_container_text: {
        fontSize: 0.75 * baseFontSize,
        lineHeight: 1 * baseFontSize,
        maxWidth: 200,
    },
});
