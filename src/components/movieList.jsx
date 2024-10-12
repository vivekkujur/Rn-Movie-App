import { Text, TouchableOpacity, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { styles } from '../../theme'
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'


const { width, height } = Dimensions.get('window');

const MovieList = ({ title, data, hideSeeAll }) => {

  let movieName = 'Ant man and wasp ';
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
                    source={require('../../assets/images/poster4.jpg')}
                    className='rounded-3xl'
                    style={{ height: height * .22, width: width * .33 }}

                  />
                  <Text className=' text-white ml-2'>
                    {movieName.length > 14 ? movieName.slice(0, 14) + '...' : movieName}
                  </Text>
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
