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
const { width, height } = Dimensions.get('window');

const MovieScreen = () => {
  const { params: item } = useRoute()
  const navigation = useNavigation()
  const [isFavourite, setIsfavourite] = useState(false)
  const [castList, setcast] = useState([1, 2, 3, 4, 5])
  const [similarMovie, setSililarMovie] = useState([1, 2, 3, 4, 5])

  const movieName = " Ant man and wasp name dhjs"
  useEffect(() => {

    // call apis 
  }, [item])

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
            source={require("../assets/images/poster3.jpg")}
            style={{ width, height: height * .55 }}
          />

          <LinearGradient colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
            style={{ width, height: height * .4 }} start={{ x: 0.7, y: 0 }} end={{ x: 0.6, y: 1 }} className="absolute bottom-0">

          </LinearGradient>
        </View>
      </View>

      <View style={{ marginTop: -(height * .09) }} className='space-y-3'>
        {/* title */}
        <Text className=" text-3xl text-white text-center font-bold tracking-wider">{movieName}</Text>

        {/* status release runtime */}
        <Text className="text-neutral-400 font-semibold text-base text-center"> Released * 2020 * 170 min</Text>

        {/* ?genres */}
        <View className="flex-row justify-center mx-4 space-x-2" >
          <Text className=" text-neutral-400 font-semibold text-base text-center">Action *</Text>
          <Text className=" text-neutral-400 font-semibold text-base text-center">Thriller *</Text>
          <Text className=" text-neutral-400 font-semibold text-base text-center">Comedy </Text>

        </View>

        {/* description */}

        <Text className="text-neutral-400 mx-4 tracking-wide">
          Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, pull off a plan that will save the world.
        </Text>

      </View>


      {/* cast */}

      <Cast cast={castList} navigation={navigation} />

      {/* ?similer movies */}

      <MovieList title={"Similar Movies"}  data={similarMovie} hideSeeAll ={true}/>

    </ScrollView>

  )
}

export default MovieScreen