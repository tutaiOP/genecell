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

const EditScreen = () => {
  const [name, setName] = useState("Huỳnh Quốc Dũng");
  const [phone] = useState("0123456789");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Nam");
  const [avatar, setAvatar] = useState(
    require("@/assets/images/avatar-ai.jpg")
  );
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
      setSelectedImage(result.assets[0].uri);
    } else {
      console.log("You did not select any image.");
    }
  };
  return (
    <SafeAreaView className="flex-1 bg-[#f0fdf4]">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View>
          <HeaderBack
            label="Chỉnh sửa thông tin"
            onPress={() => router.back()}
          />

          <View className="my-4 mx-4">
            {/* Avatar */}
            <View className="flex justify-center items-center">
              <Pressable onPress={pickImageAsync} className="items-center">
                <Image
                  source={selectedImage ? { uri: selectedImage } : avatar}
                  className="rounded-full"
                  style={{ width: 80, height: 80 }}
                />
                <Text className="mt-3 text-blue-500 text-base">
                  Thay đổi ảnh đại diện
                </Text>
              </Pressable>
            </View>

            {/* Họ và tên */}
            <View className="mt-4">
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

            {/* Giới tính */}
            <View className="mt-3">
              <Text className="text-base mb-1">Giới tính</Text>
              <View className="flex-row items-center mt-1">
                <Pressable
                  onPress={() => setGender("Nam")}
                  className="flex-row items-center mr-6"
                >
                  <View
                    className={`w-4 h-4 rounded-full border mr-2 ${
                      gender === "Nam" ? "border-green-600" : "border-gray-400"
                    } justify-center items-center`}
                  >
                    {gender === "Nam" && (
                      <View className="w-2 h-2 rounded-full bg-green-600" />
                    )}
                  </View>
                  <Text className="text-base">Nam</Text>
                </Pressable>

                <Pressable
                  onPress={() => setGender("Nữ")}
                  className="flex-row items-center"
                >
                  <View
                    className={`w-4 h-4 rounded-full border mr-2 ${
                      gender === "Nữ" ? "border-green-600" : "border-gray-400"
                    } justify-center items-center`}
                  >
                    {gender === "Nữ" && (
                      <View className="w-2 h-2 rounded-full bg-green-600" />
                    )}
                  </View>
                  <Text className="text-base">Nữ</Text>
                </Pressable>
              </View>
            </View>

            {/* Email */}
            <View className="mt-3">
              <Text className="text-base mb-1">Email</Text>
              <TextInput
                className="bg-white rounded-lg px-3 py-3 border border-gray-300"
                placeholder="Nhập địa chỉ email"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            {/* Button */}
            <View className="flex items-center justify-center mt-6">
              <Pressable className="bg-primary py-3 px-4 rounded-xl ">
                <Text className="text-center text-white font-semibold">
                  Cập nhật thông tin
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      {/* Header */}
    </SafeAreaView>
  );
};

export default EditScreen;
