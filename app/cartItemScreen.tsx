import { View, Text, ScrollView, Pressable, Modal, Image } from "react-native";
import React, { useState } from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Header from "@/components/Header";
import CardList from "@/components/CardList";
import { useSinglePress } from "@/hooks/useSinglePress";
import { router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

const CartItemScreen = () => {
  const singPress = useSinglePress(1000);
  const [showPopup, setShowPopup] = useState(false);
  const confirmDelete = () => {
    // Xóa sản phẩm ở đây

    setShowPopup(false);
  };
  return (
    <>
      <SafeAreaView
        edges={["top", "left", "right"]}
        style={{ flex: 1, backgroundColor: "#f0fdf4", paddingBottom: 10 }}
      >
        <View style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Header />
            {/* <Card /> */}

            <CardList />
          </ScrollView>
        </View>
        {/* Footer thanh toán */}
        <View
          style={{ paddingBottom: 20, paddingTop: 5 }}
          className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-300 px-4  "
        >
          <View className="flex-row items-center justify-end  mb-2">
            <Text className="text-text-secondary text-xs font-medium">
              Tổng cộng:
            </Text>
            <View className="flex-row">
              <Text className="text-text text-2xl font-bold"> 500.000 </Text>
              <Text className="text-text text-base font-bold">đ</Text>
            </View>
          </View>

          <View className="flex-row gap-2">
            <Pressable
              onPress={() => singPress(() => router.push("/(tabs)"))}
              className="flex-1 p-4 rounded-lg border border-primary"
            >
              <Text className="text-primary font-semibold text-base text-center">
                Quay lại
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setShowPopup(!showPopup)}
              className="flex-1 p-4 rounded-lg bg-primary"
            >
              <Text className="text-white font-semibold text-base text-center">
                Đặt mua
              </Text>
            </Pressable>
          </View>
        </View>
        {/* Popup xác nhận */}
        <Modal
          transparent
          visible={showPopup}
          animationType="fade"
          onRequestClose={() => setShowPopup(false)}
        >
          <View className="flex-1 bg-black/50 justify-center items-center">
            <View className="bg-white rounded-lg p-4 w-[350px] items-center">
              {/* Nút đóng */}
              <Pressable
                className="absolute top-3 right-3"
                onPress={() => setShowPopup(false)}
              >
                <AntDesign name="close" size={25} color="black" />
              </Pressable>

              {/* Icon cảnh báo */}
              <Image
                source={require("@/assets/images/image-modal.png")}
                className="w-[153px] h-[150px] my-[10px]"
              />

              {/* Nội dung */}
              <Text className="text-center text-base font-semibold mb-5">
                Bạn chắc chắn muốn đặt 1 sản phẩm này không?
              </Text>

              {/* Nút hành động */}
              <View className="flex-row w-full gap-[10px]">
                <Pressable
                  onPress={() => setShowPopup(false)}
                  className="flex-1 bg-red-500 p-[10px] rounded-lg"
                >
                  <Text className="text-white text-center">Huỷ bỏ</Text>
                </Pressable>
                <Pressable
                  onPress={confirmDelete}
                  className="flex-1 bg-green-500 p-[10px] rounded-lg"
                >
                  <Text className="text-white text-center">Xác nhận</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </>
  );
};

export default CartItemScreen;
