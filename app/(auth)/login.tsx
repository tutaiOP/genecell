import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import VNFlag from "../../assets/images/VN.svg";
import Button from "@/components/Button";

const LoginScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [value, setValue] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-[#E8F9F0]">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        {/* Nội dung */}
        <View className="flex-1 items-center justify-center px-4">
          {/* Box trắng */}
          <View className="bg-white rounded-xl p-6 w-full ">
            {/* Logo */}
            <View className="items-center mb-4">
              <Image
                source={require("../../assets/images/logo-genecell.png")}
                style={{ width: 216, height: 161, resizeMode: "contain" }}
              />
            </View>

            {/* Input số điện thoại */}
            <View
              className="flex-row justify-between items-center rounded-lg px-3 py-2 mb-[8px] bg-bg-input"
              style={{
                borderWidth: 1,
                borderColor: isFocused ? "#58ac5a" : "#d1d5db", // gray-300
              }}
            >
              {/* Icon cờ */}
              {/* <View className="flex-row gap-1 items-center justify-center pr-3">
                <VNFlag width={24} height={24} />
                <AntDesign name="caretdown" size={8} color="#d3d2ce" />
              </View> */}

              {/* Input */}
              <TextInput
                placeholder="Số điện thoại"
                className="flex-1 py-2"
                keyboardType="phone-pad"
                value={value}
                onChangeText={setValue}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />

              {/* Nút clear */}
              {value.length > 0 && (
                <Pressable
                  onPress={() => setValue("")}
                  className="w-5 h-5 justify-center items-center rounded-full"
                  style={{ backgroundColor: "#cad8c5" }}
                >
                  <AntDesign name="close" size={12} color="black" />
                </Pressable>
              )}
            </View>
            {/* Input mật khẩu */}
            <View
              className={`flex-row items-center rounded-lg px-3 py-2 mb-[8px] bg-bg-input`}
              style={{
                borderWidth: 1,
                borderColor: isFocusedPassword ? "#58ac5a" : "#d1d5db", // gray-300
              }}
            >
              <TextInput
                placeholder="Nhập mật khẩu"
                placeholderTextColor="#757575" // màu xám dễ đọc
                className="flex-1 py-2"
                secureTextEntry={!passwordVisible}
                onFocus={() => setIsFocusedPassword(true)}
                onBlur={() => setIsFocusedPassword(false)}
              />
              <TouchableOpacity
                onPress={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? (
                  <AntDesign name="eyeo" size={24} color="black" />
                ) : (
                  <Feather name="eye-off" size={24} color="black" />
                )}
              </TouchableOpacity>
            </View>

            {/* Quên mật khẩu */}
            <TouchableOpacity className="mb-4">
              <Text className="text-primary-dark font-medium text-sm underline">
                Quên mật khẩu ?
              </Text>
            </TouchableOpacity>

            {/* Nút đăng nhập */}
            <Button label="Đăng nhập" theme="green"></Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default LoginScreen;
