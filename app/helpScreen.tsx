import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  Alert,
  Linking,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBack from "@/components/HeaderBack";
import { router } from "expo-router";

// Component CallButton riêng
const CallButton = ({ phoneNumber = "0762767356" }) => {
  const handleCall = async () => {
    try {
      if (!phoneNumber || !/^[0-9+]+$/.test(phoneNumber)) {
        Alert.alert("Lỗi", "Số điện thoại không hợp lệ");
        return;
      }

      const url = `tel:${phoneNumber}`;
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Thông báo", "Thiết bị không hỗ trợ gọi điện");
      }
    } catch (error) {
      Alert.alert("Lỗi", "Không thể thực hiện cuộc gọi");
      console.error(error);
    }
  };

  return (
    <Pressable onPress={handleCall} className="bg-primary py-3 px-4 rounded-xl">
      <Text className="text-white text-center text-base font-bold">
        Gọi ngay
      </Text>
    </Pressable>
  );
};

const HelpScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f0fdf4" }}>
      <HeaderBack label="Trợ giúp & Hỗ trợ" onPress={() => router.back()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="mt-6 relative">
          <Image
            source={require("@/assets/images/bg-help.png")}
            style={{ width: "100%", height: 235 }}
          />
          <View className="absolute top-4 left-3">
            <Text className="text-primary-dark text-xl font-bold">
              GENECELL luôn bên bạn
            </Text>
            <Text className="text-black text-xs mt-2 my-3">
              Sẵn sàng hỗ trợ
            </Text>
            <View className="flex items-start">
              <CallButton />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HelpScreen;
