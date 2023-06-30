import { ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import CategoriesCard from './cards/categoryCard'
import { getCategories } from '../api'

const category = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then((data) => {
            // console.log('Data:', data);
            setCategories(data);
        })
            .catch((error) => {
                // Handle the error here, e.g., log the error or show an error message
                console.error('Error fetching categories:', error);
            });
    },);

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }} >
            {
                categories?.map((cat) => {
                    return (
                        <CategoriesCard
                            key={cat._id}
                            imgUrl={cat.image}
                            title={cat.name} />

                    )
                })
            }

        </ScrollView>
    )
}


export default category