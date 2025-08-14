import { View, Text, Image, Pressable } from "react-native";
import React from "react";

const Notify = () => {
  return (
    <View className="mx-4 mt-6">
      <View className="flex justify-center items-center">
        <Image
          source={require("@/assets/images/image-notify.png")}
          style={{ width: 290, height: 195 }}
        />
      </View>
      <View className="mt-6">
        <Text className="text-center font-semibold text-lg ">
          Bạn chưa có thông báo nào
        </Text>
        <Text className="text-center">
          Đăng ký thông tin để nhận thông báo mới nhất
        </Text>
      </View>
      <View className="flex items-center justify-center mt-6">
        <Pressable className=" bg-primary py-4 px-4 rounded-xl">
          <Text className="text-white text-center text-base font-bold">
            Khám phá ngay
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Notify;
