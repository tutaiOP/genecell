import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBack from "@/components/HeaderBack";
import { router } from "expo-router";
import Notify from "@/components/Result/Notify";

const NotifyScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f0fdf4" }}>
      <HeaderBack label="Thông báo của tôi" onPress={() => router.back()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Notify />
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotifyScreen;
