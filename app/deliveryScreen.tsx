import { View, Text, ScrollView, Pressable, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBack from "@/components/HeaderBack";
import { router } from "expo-router";
import { useSinglePress } from "@/hooks/useSinglePress";

const DeliveryScreen = () => {
  const singlePress = useSinglePress(1000);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f0fdf4" }}>
      <HeaderBack label="Địa chỉ nhận hàng" onPress={() => router.back()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-row justify-between items-center mt-4 mx-4">
          <Pressable className="w-12 h-12 mr-2 rounded-full  bg-[#285b13] items-center justify-center">
            <Image
              source={require("@/assets/images/icon-homeaddress.png")}
              style={{ width: 18, height: 18 }}
            />
          </Pressable>
          <View className="flex-1 ">
            <View className="flex-row items-center gap-1 ">
              <Text className="text-text font-semibold text-base">
                Huỳnh Quốc Dũng
              </Text>
              <Text className="text-text">|</Text>
              <Text className="text-text text-base font-normal">
                0909123456
              </Text>
            </View>
            <Text className="text-text text-base font-normal">
              123 Lê thị riêng
            </Text>
          </View>
          <Pressable
            onPress={() => singlePress(() => router.push("/editAddressScreen"))}
          >
            <Text className="text-base text-primary font-semibold">Sửa</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DeliveryScreen;
