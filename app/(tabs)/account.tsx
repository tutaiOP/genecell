import { View, Text, ScrollView, Image, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderAccount from "@/components/HeaderAccount";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { useSinglePress } from "@/hooks/useSinglePress";

const account = () => {
  const singlePress = useSinglePress(1000); // 1000ms chặn click nhanh

  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={{ flex: 1, backgroundColor: "#f0fdf4" }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderAccount />
        <View className="mx-4 my-[8px] bg-white ">
          <Pressable
            onPress={() =>
              singlePress(() => router.push("/(tabs)/shoppingcart"))
            }
            className="p-4 flex-row gap-2 items-center "
          >
            <Image
              source={require("@/assets/images/icon-gh.png")}
              style={{ width: 20, height: 20 }}
            />
            <Text className="text-black font-medium text-sm">
              Giỏ hàng của tôi
            </Text>
          </Pressable>
          <Pressable
            onPress={() => singlePress(() => router.push("/statictisScreen"))}
            className="p-4 flex-row gap-2 items-center "
          >
            <Image
              source={require("@/assets/images/icon-tonkho.png")}
              style={{ width: 20, height: 20 }}
            />
            <Text className="text-black font-medium text-sm">
              Thống kê tồn kho
            </Text>
          </Pressable>
          <Pressable
            onPress={() => singlePress(() => router.push("/notifyScreen"))}
            className="p-4 flex-row gap-2 items-center"
          >
            <Image
              source={require("@/assets/images/icon-notify.png")}
              style={{ width: 24, height: 24 }}
            />
            <Text className="text-black font-medium text-sm">
              Thông báo của tôi
            </Text>
          </Pressable>
          <Pressable
            onPress={() => singlePress(() => router.push("/brandScreen"))}
            className="p-4 flex-row gap-2 items-center"
          >
            <Image
              source={require("@/assets/images/icon-laban.png")}
              style={{ width: 24, height: 24 }}
            />
            <Text className="text-black font-medium text-sm">
              Hệ thống chi nhánh
            </Text>
          </Pressable>
          <Pressable
            onPress={() => singlePress(() => router.push("/deliveryScreen"))}
            className="p-4 flex-row gap-2 items-center"
          >
            <SimpleLineIcons name="location-pin" size={20} color="black" />
            <Text className="text-black font-medium text-sm">
              Địa chỉ nhận hàng
            </Text>
          </Pressable>
          <Pressable
            onPress={() => singlePress(() => router.push("/helpScreen"))}
            className="p-4 flex-row gap-2 items-center"
          >
            <Image
              source={require("@/assets/images/icon-question.png")}
              style={{ width: 24, height: 24 }}
            />
            <Text className="text-black font-medium text-sm">
              Trợ giúp & hỗ trợ
            </Text>
          </Pressable>
          <View className="p-4 flex-row gap-2 items-center">
            <MaterialIcons name="logout" size={24} color="#E53935" />
            <Text className="text-[#E53935] font-medium text-sm">
              Đăng xuất
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default account;
