import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import { useSinglePress } from "@/hooks/useSinglePress";
const HeaderAccount = () => {
  const singlePress = useSinglePress(1000); // 1000ms chặn click nhanh

  return (
    <>
      <View className="flex-row gap-2 items-center mx-4 mt-2 mb-4">
        <View>
          <Image
            className="rounded-full aspect-auto"
            source={require("@/assets/images/avatar-ai.jpg")}
            style={{ width: 80, height: 80 }}
          />
        </View>
        <View className="flex-1">
          <View className="flex-row gap-2 items-center">
            <Text className="text-text font-medium text-lg">
              Huỳnh Quốc Dũng
            </Text>
            <Text className="text-white text-xs rounded-full bg-primary px-[6px] py-[2px]">
              Thành viên
            </Text>
          </View>

          <View className="flex-row justify-between mt-1">
            <Text className="text-text-secondary text-base font-normal">
              0123 456 789
            </Text>
            <Pressable
              onPress={() =>
                singlePress(() => router.push("/personalInfomation"))
              }
            >
              <Text className="text-[#2196F3] font-medium text-xs">
                Xem hồ sơ
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
};

export default HeaderAccount;
