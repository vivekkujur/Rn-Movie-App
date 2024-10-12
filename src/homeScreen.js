
import React, { Component, useState } from 'react'
import { Platform, SafeAreaView, ScrollView, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { styles } from '../theme';
import TrendingMovies from './components/trendingMovies';
import MovieList from './components/movieList';

const ios = Platform.OS === 'ios'

export default function HomeScreen() {

    const [trending, setTrending] = useState([1, 2, 3])
    const [upcoming, setUpcoming] = useState([1, 2, 3])
    const [topRated, setTopRated] = useState([1, 2, 3])

    return (
        <View className='flex-1  bg-neutral-800'  >

            {/* search bar logo  */}
            <SafeAreaView className={ios ? '-mb-2' : 'mb-3 mt-4'}>
                <View className="flex-row justify-between items-center mx-4">
                    <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
                    <Text
                        className='text-white text-3xl font-bold'
                    ><Text style={{ color: '#eab308' }}>M</Text>ovies
                    </Text>
                    <TouchableOpacity>
                        <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
                    </TouchableOpacity>
                </View>

            </SafeAreaView>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 10 }}
            >


                <TrendingMovies data={trending} />

                <MovieList title ='Upcoming' data = {upcoming} />

                <MovieList title ='Top rated ' data = {topRated} />


            </ScrollView>

        </View>
    );

}
