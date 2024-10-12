
import { View, Text } from "react-native";
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)

const SplashScreen = () => {

    return (

        <View className='mt-8 px-2'>
            <Text>
                new page tailwind css setup
            </Text>
            <Text className="text-2xl text-black dark:text-white">
        fsdgsdgsdf
      </Text>
            
        </View>

    );
}

export default SplashScreen