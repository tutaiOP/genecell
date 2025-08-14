import {
  View,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
} from "react-native";
import React from "react";
import Fontisto from "@expo/vector-icons/Fontisto";
import Feather from "@expo/vector-icons/Feather";
import { useSinglePress } from "@/hooks/useSinglePress";
import { router } from "expo-router";

const Header = () => {
  const singlePress = useSinglePress(1000);
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View>
          <View className="mt-2  flex-row justify-between items-center mx-4">
            <View className="relative ">
              <Pressable
                onPress={() => singlePress(() => router.push("/notifyScreen"))}
                className="w-12 h-12  rounded-full  bg-primary-10 items-center justify-center"
              >
                <Feather name="bell" size={24} color="white" />
              </Pressable>
              <View className="absolute -top-2 -right-1 bg-red-500 rounded-full w-6 h-6 flex items-center justify-center ">
                <Text className="text-xs text-white font-semibold">1</Text>
              </View>
            </View>
            <View>
              <Image
                source={require("@/assets/images/logo-genecell.png")}
                style={{ width: 81, height: 60 }}
              />
            </View>
            <Pressable className="w-12 h-12 rounded-full bg-primary-10 items-center justify-center relative">
              <Image
                source={require("@/assets/images/icon-cart.png")}
                style={{ width: 24, height: 24, backgroundColor: "#489A36" }}
              />
              <View className="absolute -top-2 -right-1 bg-red-500 rounded-full w-6 h-6 flex items-center justify-center ">
                <Text className="text-xs text-white font-semibold">12</Text>
              </View>
            </Pressable>
          </View>
          <View className="mx-4 mt-3 mb-4 py-1 pr-1 pl-5 bg-[#cae9ce] rounded-full flex-row justify-between">
            <TextInput
              placeholder="Nhập tên sản phẩm cần tìm"
              placeholderTextColor={"#757575"}
            />
            <View className="w-10 h-10 justify-center items-center bg-primary rounded-full">
              <Fontisto name="search" size={16} color="white" />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default Header;
