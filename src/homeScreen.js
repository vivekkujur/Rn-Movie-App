
import React, { Component, useEffect, useState } from 'react'
import { Platform, SafeAreaView, ScrollView, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { styles } from '../theme';
import TrendingMovies from './components/trendingMovies';
import MovieList from './components/movieList';
import { fetchTreningMovies, fetchUpcomingMovies, fetcTopRatedMovies } from './api/moviedb';

const ios = Platform.OS === 'ios'

export default function HomeScreen() {

    const [trending, setTrending] = useState([1, 2, 3])
    const [upcoming, setUpcoming] = useState([1, 2, 3])
    const [topRated, setTopRated] = useState([1, 2, 3])

    useEffect(()=>{
        getTrendingMovie();
        getTopRatedMovie();
        getUpcomingMOvies();
    },[])

    const getTrendingMovie = async ()=>{

        const data = await fetchTreningMovies()
        if(data && data.results) setTrending(data.results)
    }

    const getUpcomingMOvies = async ()=>{
        const data = await fetchUpcomingMovies()
        if(data && data.results) setUpcoming(data.results)
    }

    const getTopRatedMovie = async ()=>{

        const data = await fetcTopRatedMovies()
        if(data && data.results) setTopRated(data.results)
    }



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

                { trending.length > 0 && <TrendingMovies data={trending} /> }

                { upcoming.length > 0 && <MovieList title ='Upcoming' data = {upcoming} /> }

                { topRated.length> 0 && <MovieList title ='Top rated ' data = {topRated} /> }


            </ScrollView>

        </View>
    );

}
