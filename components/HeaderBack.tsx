import { View, Text, Pressable } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

type Props = { label: string; onPress?: () => void };

const HeaderBack = ({ label, onPress }: Props) => {
  return (
    <View className="flex-row items-center mx-4 ">
      <Pressable
        onPress={onPress}
        className="w-12 h-12  rounded-full  bg-[#285b13] items-center justify-center"
      >
        <FontAwesome5 name="arrow-left" size={18} color="white" />
      </Pressable>
      <View className="flex-1">
        <Text className="text-center text-text text-2xl font-semibold">
          {label}
        </Text>
      </View>
    </View>
  );
};

export default HeaderBack;
