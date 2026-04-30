import { View, Text } from "react-native";
import React from "react";
import SafeAreaContainer from "@/components/SafeAreaContainer";

const user = () => {
  return (
    <SafeAreaContainer>
      <View className="flex-1 bg-purple-400 items-center justify-center">
        <Text className="font-bold">user</Text>
      </View>
    </SafeAreaContainer>
  );
};

export default user;
