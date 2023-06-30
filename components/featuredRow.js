import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCards from './cards/restaurantCard'
import { getFeaturedResturantById } from '../api'

const FeaturedRow = ({ id, title, description }) => {
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        getFeaturedResturantById(id).then((data) => {
            // console.log('Data:', data);
            setRestaurants(data?.restaurants);
            console.log('Data:', restaurants); // Log the data
        })
            .catch((error) => {
                // Handle the error here, e.g., log the error or show an error message
                console.error('Error fetching featured categories:', error);
            });
    }, [id]);

    return (
        <View>
            <View className="mt-4 flex-row items-start justify-between px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon size={20} color="#00ccbb" />
            </View>
            <Text className="x-s text-gray-500 px-4">{description}</Text>
            <ScrollView horizontal contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }} showsHorizontalScrollIndicator={false}>
                {
                    restaurants?.map((restaurant) => {
                        console.log("title:", restaurant.name)
                        return (
                            <RestaurantCards
                                key={restaurant._id}
                                id={restaurant._id}
                                imgUrl={restaurant.image}
                                title={restaurant.restaurant}
                                rating={restaurant.rating}
                                address={restaurant.address}
                                dishes={restaurant.dishes}
                                short_description={restaurant.short_description}
                                genre={restaurant.type?.name}
                                long={restaurant.long}
                                lat={restaurant.lat}

                            />
                        )
                    })
                }
                {/* {
                    restaurants?.map((restaurant) => {
                        console.log("Key:", restaurant._id)

                    })
                } */}

            </ScrollView>
        </View>
    )
}

export default FeaturedRow