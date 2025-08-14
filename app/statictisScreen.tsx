import {
  View,
  Text,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSinglePress } from "@/hooks/useSinglePress";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { router } from "expo-router";
import Feather from "@expo/vector-icons/Feather";

const StatictisScreen = () => {
  const singlePress = useSinglePress(1000);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Dữ liệu bảng tồn kho
  const inventoryData = [
    { id: 1, name: "VITALSKIN REVIVE", quantity: 100 },
    { id: 2, name: "CLEAR +", quantity: 50 },
    { id: 3, name: "UV SHIELD DEFFENSE", quantity: 10 },
    { id: 4, name: "MASK PRO", quantity: 20 },
    { id: 5, name: "CELLRENEWAL REVIE", quantity: 5 },
    { id: 6, name: "ACNEVANISH", quantity: 12 },
    { id: 7, name: "PURECLEAR SKINCARE", quantity: 23 },
    { id: 8, name: "CLEARFADE RESCUE", quantity: 9 },
    { id: 9, name: "CONDITIONER", quantity: 20 },
    { id: 10, name: "SHAMPOO", quantity: 30 },
    { id: 11, name: "VITALSKIN REVIVE", quantity: 100 },
    { id: 12, name: "CLEAR +", quantity: 50 },
    { id: 13, name: "UV SHIELD DEFFENSE", quantity: 10 },
    { id: 14, name: "MASK PRO", quantity: 20 },
    { id: 15, name: "CELLRENEWAL REVIE", quantity: 5 },
    { id: 16, name: "ACNEVANISH", quantity: 12 },
    { id: 17, name: "PURECLEAR SKINCARE", quantity: 23 },
    { id: 18, name: "CLEARFADE RESCUE", quantity: 9 },
    { id: 19, name: "CONDITIONER", quantity: 20 },
    { id: 20, name: "SHAMPOO", quantity: 30 },
  ];

  // Tính toán dữ liệu phân trang
  const totalPages = Math.ceil(inventoryData.length / itemsPerPage);
  const currentItems = inventoryData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#f0fdf4]">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View className="flex-1">
          {/* Header */}
          <View className="mt-2 flex-row justify-between items-center mx-4">
            <Pressable
              onPress={() => singlePress(() => router.back())}
              className="w-12 h-12 rounded-full bg-[#285b13] items-center justify-center"
            >
              <FontAwesome5 name="arrow-left" size={18} color="white" />
            </Pressable>

            <Text className="text-center text-text text-2xl font-semibold flex-1">
              Thống kê tồn kho
            </Text>

            <Pressable className="w-12 h-12 rounded-full bg-primary-10 items-center justify-center">
              <Image
                source={require("@/assets/images/icon-excel.png")}
                className="w-6 h-6"
                style={{ backgroundColor: "#489A36" }}
              />
            </Pressable>
          </View>

          {/* Search bar */}
          <View className="mx-4 mt-3 mb-4 py-1 pr-1 pl-5 bg-[#cae9ce] rounded-full flex-row justify-between">
            <TextInput
              placeholder="Nhập tên sản phẩm cần tìm"
              placeholderTextColor="#757575"
              className="flex-1"
            />
            <Pressable className="w-10 h-10 justify-center items-center bg-primary rounded-full">
              <Fontisto name="search" size={16} color="white" />
            </Pressable>
          </View>

          {/* Table */}
          <ScrollView className="mx-4 mb-2 ">
            {/* Table Header */}
            <View className="flex-row bg-white py-4  ">
              <Text className="w-1/6 text-center font-semibold text-primary">
                STT
              </Text>
              <Text className="w-3/5 pl-2 font-semibold text-primary">
                Tên sản phẩm
              </Text>
              <Text className="w-1/6 text-center font-semibold text-primary">
                SL
              </Text>
            </View>

            {/* Table Rows */}
            {currentItems.map((item) => (
              <View key={item.id} className="flex-row py-4 bg-white">
                <Text className="w-1/6 text-center text-gray-600">
                  {item.id.toString().padStart(2, "0")}
                </Text>
                <Text className="w-3/5 pl-2 text-gray-600">{item.name}</Text>
                <Text className="w-1/6 text-center text-gray-600">
                  {item.quantity}
                </Text>
              </View>
            ))}
            {/* Pagination */}
            <View className="flex-row justify-center items-center mx-4 mt-6">
              <Pressable
                onPress={goToPrevPage}
                disabled={currentPage === 1}
                className={`p-2 rounded-full ${
                  currentPage === 1 ? "bg-gray-300" : "bg-primary"
                }`}
              >
                <Feather
                  name="chevron-left"
                  size={20}
                  color={currentPage === 1 ? "gray" : "white"}
                />
              </Pressable>
              <Text className="text-text mx-4">
                Trang {currentPage} / {totalPages}
              </Text>

              <Pressable
                onPress={goToNextPage}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-full ${
                  currentPage === totalPages ? "bg-gray-300" : "bg-primary"
                }`}
              >
                <Feather
                  name="chevron-right"
                  size={20}
                  color={currentPage === totalPages ? "gray" : "white"}
                />
              </Pressable>
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default StatictisScreen;
