import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBack from "@/components/HeaderBack";
import { router } from "expo-router";
import * as ImagePicker from "expo-image-picker";

const EditAddressScreen = () => {
  const [name, setName] = useState("Huỳnh Quốc Dũng");
  const [phone] = useState("0123456789");
  const [province, setProvince] = useState("Hồ Chí Minh");
  const [district, setDistrict] = useState("Bến Nghé");
  const [address, setAddress] = useState("123 Lê Thị Riêng");
  const [typeAddress, setTypeAddress] = useState("Nhà");
  return (
    <SafeAreaView className="flex-1 bg-[#f0fdf4]">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View>
          <HeaderBack label="Chỉnh sửa địa chỉ" onPress={() => router.back()} />

          <View className="mt-4 pb-4 mx-4 border-b border-gray-200 ">
            <View className="mt-6 mb-4">
              <Text className="text-text text-lg font-semibold">
                Thông tin người nhận
              </Text>
            </View>
            {/* Họ và tên */}
            <View className="">
              <Text className="text-base mb-1">Họ và tên</Text>
              <TextInput
                className="bg-white rounded-lg px-3 py-3 border border-gray-300"
                value={name}
                onChangeText={setName}
              />
            </View>

            {/* Số điện thoại */}
            <View className="mt-3">
              <Text className="text-base mb-1">Số điện thoại</Text>
              <TextInput
                className="bg-gray-100 rounded-lg px-3 py-3 border border-gray-300 text-gray-400"
                value={phone}
                editable={false}
              />
            </View>
          </View>
          <View className=" mx-4  ">
            <View className="mt-3 mb-4">
              <Text className="text-text text-lg font-semibold">
                Địa chỉ nhận hàng
              </Text>
            </View>
            {/* Tỉnh / Thành Phố */}
            <View className="mb-4">
              <Text className="text-base mb-1">Tỉnh/ Thành phố</Text>
              <TextInput
                className="bg-white rounded-lg px-3 py-3 border border-gray-300"
                value={province}
                onChangeText={setProvince}
              />
            </View>
            {/* Phường */}
            <View className="mb-4">
              <Text className="text-base mb-1">Phường</Text>
              <TextInput
                className="bg-white rounded-lg px-3 py-3 border border-gray-300"
                value={district}
                onChangeText={setDistrict}
              />
            </View>
            {/* Địa chỉ cụ thể */}
            <View className="">
              <Text className="text-base mb-1">Địa chỉ cụ thể</Text>
              <TextInput
                className="bg-white rounded-lg px-3 py-3 border border-gray-300"
                value={address}
                onChangeText={setAddress}
              />
            </View>
            {/* Giới tính */}
            <View className="mt-3 flex-row justify-between">
              <Text className="text-base mb-1">Loại địa chỉ</Text>
              <View className="flex-row items-center mt-1">
                <Pressable
                  onPress={() => setTypeAddress("Nhà")}
                  className="flex-row items-center mr-6"
                >
                  <View
                    className={`w-4 h-4 rounded-full border mr-2 ${
                      typeAddress === "Nhà"
                        ? "border-green-600"
                        : "border-gray-400"
                    } justify-center items-center`}
                  >
                    {typeAddress === "Nhà" && (
                      <View className="w-2 h-2 rounded-full bg-green-600" />
                    )}
                  </View>
                  <Text className="text-base">Nhà</Text>
                </Pressable>

                <Pressable
                  onPress={() => setTypeAddress("Văn Phòng")}
                  className="flex-row items-center"
                >
                  <View
                    className={`w-4 h-4 rounded-full border mr-2 ${
                      typeAddress === "Văn Phòng"
                        ? "border-green-600"
                        : "border-gray-400"
                    } justify-center items-center`}
                  >
                    {typeAddress === "Văn Phòng" && (
                      <View className="w-2 h-2 rounded-full bg-green-600" />
                    )}
                  </View>
                  <Text className="text-base">Văn Phòng</Text>
                </Pressable>
              </View>
            </View>
          </View>
          {/* Button */}
          <View className="flex items-center justify-center mt-6">
            <Pressable className="bg-primary py-3 px-4 rounded-xl ">
              <Text className="text-center text-white font-semibold">
                Cập nhật địa chỉ
              </Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
      {/* Header */}
    </SafeAreaView>
  );
};

export default EditAddressScreen;
