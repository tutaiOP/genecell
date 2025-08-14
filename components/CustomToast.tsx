// components/CustomToast.tsx
import { View, Text, Pressable, Image } from "react-native";
import React from "react";

const CustomToast = {
  cart: ({ text1, props }: any) => (
    <View
      className="bg-[#3E463F] py-2 px-4 flex-row justify-between items-center w-[90%] rounded-lg self-center"
      style={{ marginBottom: 55 }}
    >
      <View className="flex-row gap-2 items-center">
        <Image
          source={require("@/assets/images/icon-gh-g.png")}
          style={{ width: 18, height: 18 }}
        />
        <Text className="text-white">{text1}</Text>
      </View>
      <Pressable
        onPress={props?.onPressViewCart}
        className="py-[14px] px-4 bg-white rounded-xl"
      >
        <Text>Xem giỏ</Text>
      </Pressable>
    </View>
  ),
};

export default CustomToast;
