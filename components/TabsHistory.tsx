import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";

type Status = "Tất cả" | "Chờ xác nhận" | "Đang giao" | "Hoàn thành" | "Đã hủy";

interface Product {
  id: string;
  name: string;
  status: Status;
  quantity: number;
  price: number;
  oldPrice: number;
  image: any;
}

const tabs: Status[] = [
  "Tất cả",
  "Chờ xác nhận",
  "Đang giao",
  "Hoàn thành",
  "Đã hủy",
];

const products: Product[] = [
  {
    id: "1",
    name: "Dầu xả tinh dầu bưởi 300ml Genecell",
    status: "Hoàn thành",
    quantity: 1,
    price: 500000,
    oldPrice: 850000,
    image: require("@/assets/images/image-conditioner.png"),
  },
  {
    id: "2",
    name: "Serum AACNEVANISH 10ml Genecell",
    status: "Chờ xác nhận",
    quantity: 2,
    price: 300000,
    oldPrice: 650000,
    image: require("@/assets/images/image-conditioner.png"),
  },
  {
    id: "3",
    name: "Serum AACNEVANISH 10ml Genecell",
    status: "Chờ xác nhận",
    quantity: 2,
    price: 600000,
    oldPrice: 900000,
    image: require("@/assets/images/image-acenevenish.png"),
  },
  {
    id: "4",
    name: "Serum AACNEVANISH 10ml Genecell",
    status: "Đang giao",
    quantity: 4,
    price: 300000,
    oldPrice: 650000,
    image: require("@/assets/images/image-acenevenish.png"),
  },
  {
    id: "5",
    name: "Serum AACNEVANISH 10ml Genecell",
    status: "Đã hủy",
    quantity: 3,
    price: 300000,
    oldPrice: 650000,
    image: require("@/assets/images/image-acenevenish.png"),
  },
];

const TabsHistory = () => {
  const [activeTab, setActiveTab] = useState<Status>("Tất cả");

  const filteredProducts =
    activeTab === "Tất cả"
      ? [...products].sort((a, b) => {
          const order: Status[] = [
            "Hoàn thành",
            "Chờ xác nhận",
            "Đang giao",
            "Đã hủy",
          ];
          return order.indexOf(a.status) - order.indexOf(b.status);
        })
      : products.filter((p) => p.status === activeTab);

  return (
    <View className="mx-4">
      {/* Tabs */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex-row">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <Pressable
                key={tab}
                onPress={() => setActiveTab(tab)}
                className={`px-3 py-[6px] ${isActive ? "border-b border-primary" : ""}`}
              >
                <Text
                  className={`text-sm font-normal ${
                    isActive ? "text-text" : "text-text-secondary"
                  }`}
                >
                  {tab}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>

      {/* Product List */}
      <FlatList
        scrollEnabled={false}
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }: { item: Product }) => (
          <View className="flex-row items-start gap-2 mt-4">
            <View className="border border-text-secondary rounded-md">
              <Image
                source={item.image}
                style={{ width: 52, height: 52, padding: 6 }}
              />
            </View>
            <View className="flex-1">
              <Text className="text-text font-medium text-lg">{item.name}</Text>
              <View className="flex-row justify-between items-center">
                <Text
                  className={`text-base font-normal ${
                    item.status === "Hoàn thành"
                      ? "text-primary"
                      : item.status === "Chờ xác nhận" ||
                          item.status === "Đang giao"
                        ? "text-warning"
                        : item.status === "Đã hủy"
                          ? "text-[#E53935]"
                          : "text-text-secondary"
                  }`}
                >
                  {item.status}
                </Text>
                <Text className="text-text-secondary text-base font-normal">
                  x{item.quantity}
                </Text>
              </View>
              <View className="flex-row justify-end gap-1">
                <Text className="text-text text-base font-semibold">
                  {item.price.toLocaleString()}{" "}
                  <Text className="underline">đ</Text>
                </Text>
                <Text className="text-text-secondary line-through text-base font-semibold">
                  {item.oldPrice.toLocaleString()} đ
                </Text>
              </View>
              <View className="flex-row justify-end gap-1 my-4">
                <Text className="text-text text-base">
                  Tổng số tiền ({item.quantity} sản phẩm):{" "}
                  {item.price * item.quantity}{" "}
                  <Text className="underline">đ</Text>
                </Text>
              </View>
              <View className="flex-row justify-end gap-4">
                <Pressable className="px-4 py-[10px] border border-primary rounded-xl">
                  <Text className="text-primary font-semibold">Đánh giá</Text>
                </Pressable>
                <Pressable className="px-4 py-[10px] bg-primary rounded-xl">
                  <Text className="text-white font-semibold">Mua lại</Text>
                </Pressable>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default TabsHistory;
