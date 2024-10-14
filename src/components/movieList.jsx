import { Text, TouchableOpacity, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { styles } from '../../theme'
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { image185 } from '../api/moviedb'


const { width, height } = Dimensions.get('window');

const MovieList = ({ title, data, hideSeeAll }) => {

  const navigation = useNavigation();



  return (
    <View className="mb-8 space-y-4">
      <View className="mx-4 flex-row justify-between item-center">
        <Text className="text-white text-xl">{title}</Text>
        {
          !hideSeeAll && (
            <TouchableOpacity>
              <Text style={styles.text} className='text-lg'> See All</Text>
            </TouchableOpacity>
          )
        }


      </View>

      {/* movie row */}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >

        {
          data.map((item, index) => {
            return (
              <TouchableWithoutFeedback key={index} onPress={() => navigation.push('Movie', item)}>

                <View className="space-y-1 mr-5">
                  <Image
                    source={{uri :image185(item.poster_path) }}
                    className='rounded-3xl'
                    style={{ height: height * .22, width: width * .33 }}

                  />
                  {item.title && <Text className=' text-white ml-2'>
                    {item.title.length > 14 ? item.title.slice(0, 14) + '...' : item.title}
                  </Text>}
                  
                </View>

              </TouchableWithoutFeedback>
            )
          })
        }

      </ScrollView>


    </View>
  )
}
// ./src/**/*.{js,jsx,ts,tsx}
export default MovieList
