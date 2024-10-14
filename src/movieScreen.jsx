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
import { fetchMovieDetails, image500 } from './api/moviedb'
const { width, height } = Dimensions.get('window');

const MovieScreen = () => {

  const { params: item } = useRoute()
  const navigation = useNavigation()
  const [isFavourite, setIsfavourite] = useState(false)
  const [castList, setcast] = useState([1, 2, 3, 4, 5])
  const [similarMovie, setSililarMovie] = useState([1, 2, 3, 4, 5])
  const [details,setDetails] =useState({})

  const movieName = " Ant man and wasp name dhjs"
  useEffect(() => {

    // call apis 

    getMovieDetails(item.item.id)


  }, [item])


  // { "adult": false, "backdrop_path": "/xlkclSE4aq7r3JsFIJRgs21zUew.jpg",
  //    "belongs_to_collection": { "backdrop_path": "/zREjCmCHIHdEF6ufPoDQjhl4Wdm.jpg", "id": 727761, "name": "Terrifier Collection", "poster_path": "/4xIzrMcEvCzJm5qAl92WMHLSIeM.jpg" },
  //     "budget": 2000000, "genres": [{ "id": 27, "name": "Horror" }, { "id": 53, "name": "Thriller" }],
  //      "homepage": "https://terrifier3.com/", "id": 1034541, "imdb_id": "tt27911000", "origin_country": ["US"], 
  //      "original_language": "en", "original_title": "Terrifier 3",
  //       "overview": "Five years after surviving Art the Clown's Halloween massacre, Sienna and Jonathan are still struggling to rebuild their shattered lives. As the holiday season approaches, they try to embrace the Christmas spirit and leave the horrors of the past behind. But just when they think they're safe, Art returns, determined to turn their holiday cheer into a new nightmare. The festive season quickly unravels as Art unleashes his twisted brand of terror, proving that no holiday is safe.",
  //        "popularity": 2157.641, "poster_path": "/7NDHoebflLwL1CcgLJ9wZbbDrmV.jpg",
  //         "production_companies": [{ "id": 238902, "logo_path": "/jLAg5fOlAw1Jl8Q7WoyKxh1H22y.png",
  //            "name": "Cineverse", "origin_country": "US" }, 
  //            { "id": 15157, "logo_path": "/yezzLb9RbKNtQUsyYySAqC9TQr7.png", "name": "Bloody Disgusting", "origin_country": "US" }, 
  //            { "id": 84591, "logo_path": null, "name": "Dark Age Cinema", "origin_country": "US" }, 
  //            { "id": 114220, "logo_path": "/b5n3DtfUySREkq4Xi962zMg69qq.png", "name": "Fuzz on the Lens Productions", "origin_country": "US" }, 
  //            { "id": 213025, "logo_path": "/bFz17QGqfF8wiQAH3T4kfzKC8dU.png", "name": "The Coven", "origin_country": "US" }],
  //             "production_countries": [{ "iso_3166_1": "US", "name": "United States of America" }],
  //              "release_date": "2024-10-09", "revenue": 18300000, "runtime": 125,
  //               "spoken_languages": [{ "english_name": "English", "iso_639_1": "en", "name": "English" }],
  //                "status": "Released", "tagline": "You better not shout, you better not cry.",
  //                 "title": "Terrifier 3", "video": false, "vote_average": 7.2, "vote_count": 47 }

  const getMovieDetails = async (id) => {

    const data = await fetchMovieDetails(id)
    console.log('movide data js', data)
    setDetails(data)
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
            source={{uri:image500(details.backdrop_path)}}
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
        <Text className="text-neutral-400 font-semibold text-base text-center"> Released * {details.release_date.split('-')[0]} * {details.runtime} min</Text>

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