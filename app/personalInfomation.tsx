import { View, Text, ScrollView, Image, Pressable } from "react-native";
import React from "react";
import HeaderBack from "@/components/HeaderBack";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useSinglePress } from "@/hooks/useSinglePress";

const PersonalInfomation = () => {
  const singlePress = useSinglePress(1000);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f0fdf4" }}>
      <HeaderBack label="Thông tin cá nhân" onPress={() => router.back()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="m-4">
          <View className="flex justify-center items-center mb-6">
            <Image
              className="rounded-full"
              source={require("@/assets/images/avatar-ai.jpg")}
              style={{ width: 100, height: 100 }}
            />
          </View>
        </View>
        <View>
          <View className="mx-4 pb-3 border-b border-gray-200">
            <View className="flex-row justify-between">
              <Text className="text-text-secondary text-base ">Họ và tên</Text>
              <Text className="text-text text-base">Huỳnh Quốc Dũng</Text>
            </View>
          </View>
          <View className="mx-4 pb-3 mt-2  border-b border-gray-200">
            <View className="flex-row justify-between">
              <Text className="text-text-secondary text-base ">
                Số điện thoại
              </Text>
              <Text className="text-text text-base">0123 456 789</Text>
            </View>
          </View>
          <View className="mx-4 pb-3 mt-2 border-b border-gray-200">
            <View className="flex-row justify-between">
              <Text className="text-text-secondary text-base ">Giới tính</Text>
              <Text className="text-text text-base">Nam</Text>
            </View>
          </View>
        </View>
        <View className="flex items-center justify-center mt-6">
          <Pressable
            onPress={() => singlePress(() => router.push("/editScreen"))}
            className=" bg-primary py-4 px-4 rounded-xl"
          >
            <Text className="text-white text-center text-base font-bold">
              Chỉnh sửa thông tin
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalInfomation;
