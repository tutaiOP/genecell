import { View, Text, ScrollView, Pressable, Modal, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "@/components/Result/Card";
import Header from "@/components/Header";
import CardList from "@/components/CardList";
import AntDesign from "@expo/vector-icons/AntDesign";

const shoppingcart = () => {
  return (
    <>
      <SafeAreaView
        edges={["top", "left", "right"]}
        style={{ flex: 1, backgroundColor: "#f0fdf4", paddingBottom: 10 }}
      >
        <View style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Header />
            <Card />

            {/* <CardList /> */}
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default shoppingcart;
