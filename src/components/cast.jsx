import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const Cast = ({ cast,navigation }) => {
    let personName = 'John cena'
    let charName = 'Mr Invisible'

    return (
        <View className="my-6">

            <Text className="text-white text-lg mx-4 mb-5"> Top Cast </Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className={"mx-2"}
            >
                {
                    cast.map((person, index) => {
                        return (
                            <TouchableOpacity
                                key={index} className='mr-4 items-center' onPress={()=> navigation.navigate('Person',person)}>

                                <View className="overflow-hidden rounded-full h-20-w-20 items-center border border-neutral-500">
                                    <Image
                                        className="rounded-2xl h-24 w-20"
                                        source={require('../../assets/images/poster1.png')}
                                    />
                                </View>

                                <Text className="text-white text-xs mt-1" >{charName.length > 10 ? charName.slice(0, 10) + '...' : charName}</Text>
                                <Text className="text-neutral-400 text-xs mt-1" >{personName.length > 10 ? personName.slice(0, 10) + '...' : personName}</Text>

                            </TouchableOpacity>
                        )
                    })
                }


            </ScrollView>
        </View>
    )
}

export default Cast