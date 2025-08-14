import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import TabsHistory from "@/components/TabsHistory";

const history = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f0fdf4" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <TabsHistory />
      </ScrollView>
    </SafeAreaView>
  );
};

export default history;
