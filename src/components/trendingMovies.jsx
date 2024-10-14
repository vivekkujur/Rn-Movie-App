import { View, Text, TouchableWithoutFeedback, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
import Carousel from 'react-native-reanimated-carousel';
import { ArrowDownLeftIcon, ArrowLeftCircleIcon, ArrowRightCircleIcon } from 'react-native-heroicons/outline'
import { useSharedValue } from "react-native-reanimated";
import { useNavigation } from '@react-navigation/native';
import { image500 } from '../api/moviedb';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const TrendingMovies = ({ data }) => {

  const navigation = useNavigation()
  const progress = useSharedValue < Number > (0);

  const [selectedPage, setSelectedpage] = useState(0)

  const handleClick = ({ item }) => {

    navigation.navigate('Movie', item);

  }

  return (
    <View className='mb-8'>
      <Text className='text-white text-2xl mx-4 mb-5'> Trending </Text>

      <Carousel
        loop={false}
        snapEnabled={true}
        width={width}
        height={400}
        autoPlay={false}
        data={data}
        mode={'parallax-horizontal'}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => {
          // console.log(selectedPage)

          setSelectedpage(index)

        }}
        renderItem={({ item }) => (
          <MovieCard item={item} handleClick={handleClick} />
        )}
      />



      {/* <View

        className='mx-4 flex-row justify-center mt-6 '>
        {
          data.map(( item, index ) => {
            console.log("index",selectedPage,index)

            return ((selectedPage === index) ?
              (<View key={index}
                className='mx-2 bg-[#fff] flex-row rounded-xl '
                style={{ height: 10, width: 10 }}
              />) : (<View key={index}
                className='mx-2 bg-[#808080] flex-row rounded-xl '
                style={{ height: 10, width: 10 }}
              />))




          }
          )}
      </View> */}




    </View>
  )
}

export default TrendingMovies

const MovieCard = ({ item, handleClick }) => {


  return (
    <TouchableWithoutFeedback

      onPress={() => handleClick(item)}>
      <View
        className='flex-row'
        style={{
          justifyContent: "center",
          alignItems: "center", width: '100%', height: '100%'
        }}
      >


        {/* <ArrowLeftCircleIcon  size={30} strokeWidth={2} color="white" /> */}


        <Image
          className='rounded-3xl mx-4'
          source={{ uri: image500(item.poster_path) }}
          style={{ width: '70%', height: '100%' }}
          resizeMode='cover'

        />
        {/* <ArrowRightCircleIcon  size={30} strokeWidth={2} color="white" /> */}


      </View>
    </TouchableWithoutFeedback>

  )
}