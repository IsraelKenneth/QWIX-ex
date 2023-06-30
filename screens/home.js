import { View, Text, SafeAreaView, Image, StyleSheet, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react';
import { ChevronDownIcon, UserIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { Categories, FeaturedRow } from '../components';
import { getFeaturedResturants } from '../api';

const Home = () => {
    const [featuredCategories, setFeaturedCategories] = useState([])

    useEffect(() => {
        getFeaturedResturants().then((data) => {
            setFeaturedCategories(data);
        })
            .catch((error) => {
                // Handle the error here, e.g., log the error or show an error message
                console.error('Error fetching featured categories:', error);
            });
    }, []);


    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    })
    return (
        <SafeAreaView style={styles.bigContainer}>
            <View style={styles.container}>
                <Image source={{ uri: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' }} style={styles.ImageCon} />
                <View style={styles.cont}>
                    <Text style={styles.textSmall}>Deliver Now</Text>
                    <Text style={styles.textLarge}>Current Location
                        <ChevronDownIcon size={20} style={styles.icon} />
                    </Text>
                </View>
                <UserIcon />
            </View>

            <View style={styles.container3}>
                <View style={styles.inputContainer}>
                    <MagnifyingGlassIcon style={styles.inputIcon} size={20} />
                    <TextInput
                        style={styles.input}
                        placeholder="Restaurant and Cuisines"
                        placeholderTextColor="white"
                        keyboardType="default"
                    />
                </View>
                <AdjustmentsVerticalIcon />
            </View>


            <ScrollView style={styles.scrollBg} contentContainerStyle={{ paddingBottom: 100 }}>

                <Categories />


                {featuredCategories?.map((category) => {
                    console.log("Key:", category._id)
                    return (
                        <FeaturedRow
                            key={category._id}
                            id={category._id}
                            title={category.name}
                            description={category.short_description} />

                    )
                })}

            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    bigContainer: {
        backgroundColor: 'white',
    },

    scrollBg: {
        backgroundColor: '#f4f4f4'
    },
    container: {
        flexDirection: 'row',
        paddingBottom: 3,
        alignItems: 'center',
        marginRight: 15,
        marginLeft: 15,
        justifyContent: 'space-between',
    },

    ImageCon: {
        height: 28,
        width: 28,
        backgroundColor: '#D1D5DB',
        padding: 4,
        paddingRight: 3,
        marginRight: 5,
        borderRadius: 14,
    },

    cont: {
        flex: 1,
    },
    textSmall: {
        fontWeight: 'bold',
        color: '#888',
        fontSize: 12,
    },
    textLarge: {
        fontWeight: 'bold',
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        color: '#00ccbb',
    },

    container3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 3,
        marginBottom: 8,
        marginTop: 8,
        marginRight: 15,
        marginLeft: 15,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#d0ecf5',
        padding: 3,
        marginRight: 5,
        borderRadius: 4,
    },
    inputIcon: {
        color: 'black',
        marginRight: 2,
    },
    input: {
        color: 'black',
    },
});