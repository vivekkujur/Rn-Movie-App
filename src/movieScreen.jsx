import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import LinearGradient from 'react-native-linear-gradient'

import { styles, theme } from '../theme'
import Cast from './components/cast'
import MovieList from './components/movieList'
import { fetchCreditsDetails, fetchMovieDetails, fetchSimilerMOvies, image500 } from './api/moviedb'
const { width, height } = Dimensions.get('window');

const MovieScreen = () => {

  const { params: item } = useRoute()
  const navigation = useNavigation()
  const [isFavourite, setIsfavourite] = useState(false)
  const [castList, setcast] = useState([1, 2, 3, 4, 5])
  const [similarMovie, setSililarMovie] = useState([1, 2, 3, 4, 5])
  const [details, setDetails] = useState({})

  const movieName = " Ant man and wasp name dhjs"
  useEffect(() => {

    // call apis 

    if (item.id) {
      getMovieDetails(item.id)
      getMovieCredits(item.id)
      getSimilerMOvies(item.id)
    }

  }, [item])


  // {"adult": false, "cast_id": 1, "character": "Elisabeth Sparkle", "credit_id": "61f85cfa70309f010ddcfc0e", 
  //   "gender": 1, "id": 3416, "known_for_department": "Acting", "name": "Demi Moore", "order": 0, 
  //   "original_name": "Demi Moore", "popularity": 59.048, "profile_path": "/brENIHiNrGUpoBMPqIEQwFNdIsc.jpg"},


  const getMovieDetails = async (id) => {

    const data = await fetchMovieDetails(id)
    setDetails(data)
  }

  const getMovieCredits = async (id) => {

    const data = await fetchCreditsDetails(id)
    console.log('movide data js', data)

    setcast(data.cast)
  }
  const getSimilerMOvies = async (id) => {

    const data = await fetchSimilerMOvies(id)
    setSililarMovie(data.results)
  }

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-900 " >
      {/* back button movie poster  */}
      <View className="w-full">
        <SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center px-2 mt-3">
          <TouchableOpacity className="rounded-xl p-1" style={styles.background} onPress={() => navigation.goBack()}>
            <ChevronLeftIcon size={28} strokeWidth={2.5} color='white' />

          </TouchableOpacity>
          <TouchableOpacity className="rounded-xl p-1" onPress={() => {
            setIsfavourite(!isFavourite)
          }}>
            <HeartIcon size={35} strokeWidth={2.5} color={isFavourite ? theme.background : 'white'} />

          </TouchableOpacity>

        </SafeAreaView>
        <View>
          <Image
            source={{ uri: image500(details.backdrop_path) }}
            style={{ width, height: height * .55 }}
          />

          <LinearGradient colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
            style={{ width, height: height * .4 }} start={{ x: 0.7, y: 0 }} end={{ x: 0.6, y: 1 }} className="absolute bottom-0">

          </LinearGradient>
        </View>
      </View>

      <View style={{ marginTop: -(height * .09) }} className='space-y-3'>
        {/* title */}
        <Text className=" text-3xl text-white text-center font-bold tracking-wider">{details.title}</Text>

        {/* status release runtime */}
        <Text className="text-neutral-400 font-semibold text-base text-center"> Released * {details.release_date} * {details.runtime} min</Text>

        {/* ?genres */}
        <View className="flex-row justify-center mx-4 space-x-2" >
          <Text className=" text-neutral-400 font-semibold text-base text-center">Action *</Text>
          <Text className=" text-neutral-400 font-semibold text-base text-center">Thriller *</Text>
          <Text className=" text-neutral-400 font-semibold text-base text-center">Comedy </Text>

        </View>

        {/* description */}

        <Text className="text-neutral-400 mx-4 tracking-wide">
          {details.overview}        </Text>

      </View>
      


      {/* cast */}

      <Cast cast={castList} navigation={navigation} />

      {/* ?similer movies */}

      <MovieList title={"Similar Movies"} data={similarMovie} hideSeeAll={true} />

    </ScrollView>

  )
}

export default MovieScreen