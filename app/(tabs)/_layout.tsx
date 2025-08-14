import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#329A35",
        tabBarStyle: {
          height: 90,
          paddingTop: 10,
        },
        tabBarItemStyle: {
          paddingVertical: 0,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "500",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Trang chủ",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("@/assets/images/icon-home.png")}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? "#329A35" : "#gray", // Màu khi không active
              }}
            />
          ),

          headerShown: false,
          tabBarLabel: "home",
        }}
      />
      <Tabs.Screen
        name="shoppingcart"
        options={{
          title: "Shopping Cart",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("@/assets/images/icon-gh.png")}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? "#329A35" : "#gray", // Màu khi không active
              }}
            />
          ),
          headerShown: false,
          tabBarLabel: "Giỏ hàng",
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("@/assets/images/icon-history.png")}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? "#329A35" : "#gray", // Màu khi không active
              }}
            />
          ),
          headerShown: false,
          tabBarLabel: "Lịch sử",
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Tài khoản",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("@/assets/images/icon-account.png")}
              style={{
                width: 18,
                height: 17,
                tintColor: focused ? "#329A35" : "#gray", // Màu khi không active
              }}
            />
          ),
          headerShown: false,
          tabBarLabel: "Tài khoản",
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
