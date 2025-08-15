import { Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import ProductList from "@/components/ProductList";
import { useState } from "react";
import Header from "@/components/Header";

const tabs = [
  { id: "all", label: "Tất cả" },
  { id: "featured", label: "Nổi bật" },
  { id: "asc", label: "Giá Tăng Dần" },
  { id: "desc", label: "Giá giảm dần" },
];

export default function Index() {
  const [activeTab, setActiveTab] = useState("Tất cả");

  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={{ flex: 1, backgroundColor: "#f0fdf4" }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 0 }}
      >
        <View style={{ zIndex: 100 }}>
          {/* Thêm vào View bao ngoài Header */}
          <Header />
        </View>

        <View>
          <View>
            <Image
              source={require("@/assets/images/slider.png")}
              style={{
                width: 430,
                height: 180,
              }}
            />
          </View>

          <View className="mt-3 mb-4 flex-row mx-4">
            <FlatList
              data={tabs}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => setActiveTab(item.label)}
                  className={`px-3 py-[6px] border rounded-lg mr-2 ${
                    activeTab === item.label
                      ? "border-border"
                      : "border-[#757575]"
                  }`}
                >
                  <Text
                    className={`text-sm ${
                      activeTab === item.label
                        ? "text-border"
                        : "text-[#757575]"
                    }`}
                  >
                    {item.label}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
          <ProductList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
