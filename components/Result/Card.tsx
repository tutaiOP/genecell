import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import Button from "../Button";

const Card = () => {
  return (
    <View>
      <View>
        <Image
          source={require("@/assets/images/card-empty.png")}
          style={{
            width: 400,
            height: 195,
          }}
        />
      </View>
      <View className="my-3">
        <Text className="text-text text-lg font-medium text-center">
          Chưa có sản phẩm nào trong giỏ hàng
        </Text>
        <Text className="text-text text-sm text-center font-normal">
          Cùng mua sắm tại Genecell nhé
        </Text>
      </View>
      <View className="flex-row justify-center">
        <Pressable className="px-4 py-[10px] bg-primary rounded-xl self-start ">
          <Text className="font-semibold text-base text-white  ">Mua hàng</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Card;
