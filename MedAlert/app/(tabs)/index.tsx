import { Text, View } from "react-native";
import SafeAreaContainer from "../../components/SafeAreaContainer";

export default function App() {
  return (

      <SafeAreaContainer>
        <View className="flex-1 items-center justify-center bg-blue-500">
        <Text className="font-bold">
          Welcome to Nativewind! 
        </Text>
      </View> 
      </SafeAreaContainer>
   
  );
}   