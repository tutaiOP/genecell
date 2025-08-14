import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBack from "@/components/HeaderBack";
import { router } from "expo-router";

const BrandScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f0fdf4" }}>
      <HeaderBack label="Hệ thống chi nhánh" onPress={() => router.back()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="m-4  bg-white rounded-xl ">
          <View className="py-3 px-3 border-b border-gray-200">
            <Text className="text-primary-dark text-xl font-bold">
              Vườn thảo dược
            </Text>
            <Text className="text-base font-normal text-text-secondary">
              Tiến Thành – Yên Thành – Nghệ An
            </Text>
            <Text className="text-base font-normal text-text-secondary">
              T2 - T6: 08:30 – 20:00 và T7 & CN: 09:30 – 21:30
            </Text>
            <Text className="text-base font-normal text-text-secondary">
              0865 444 456
            </Text>
          </View>
          <View className="py-3 px-3 border-b border-gray-200 ">
            <Text className="text-primary-dark text-xl font-bold">
              Văn Phòng Hà Nội
            </Text>
            <Text className="text-base font-normal text-text-secondary">
              Số 15 – Ngõ 62 Trần Bình – Cầu Giấy – Hà Nội
            </Text>
            <Text className="text-base font-normal text-text-secondary">
              T2 - T6: 08:30 – 20:00 và T7 & CN: 09:30 – 21:30
            </Text>
            <Text className="text-base font-normal text-text-secondary">
              0865 444 456
            </Text>
          </View>
          <View className="py-3 px-3 border-b border-gray-200 ">
            <Text className="text-primary-dark text-xl font-bold">
              Văn Phòng Nghệ An
            </Text>
            <Text className="text-base font-normal text-text-secondary">
              127 An Dương Vương – P. Trường Thi – TP Vinh – Nghệ An
            </Text>
            <Text className="text-base font-normal text-text-secondary">
              T2 - T6: 08:30 – 20:00 và T7 & CN: 09:30 – 21:30
            </Text>
            <Text className="text-base font-normal text-text-secondary">
              0865 444 456
            </Text>
          </View>
          <View className="py-3 px-3 border-b border-gray-200 ">
            <Text className="text-primary-dark text-xl font-bold">
              Văn Phòng TP Hồ Chí Minh
            </Text>
            <Text className="text-base font-normal text-text-secondary">
              Số 45 Đường TL41 – Q.12 – TP. Hồ Chí Minh
            </Text>
            <Text className="text-base font-normal text-text-secondary">
              T2 - T6: 08:30 – 20:00 và T7 & CN: 09:30 – 21:30
            </Text>
            <Text className="text-base font-normal text-text-secondary">
              0865 444 456
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BrandScreen;
