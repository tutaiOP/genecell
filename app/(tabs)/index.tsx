import Feather from "@expo/vector-icons/Feather";
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Fontisto from "@expo/vector-icons/Fontisto";
import { ScrollView } from "react-native-gesture-handler";
import AntDesign from "@expo/vector-icons/AntDesign";
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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f0fdf4" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
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
            {tabs.map((tab) => (
              <TouchableOpacity
                key={tab.id}
                onPress={() => setActiveTab(tab.label)}
                className={`px-3 py-[6px] border rounded-lg mr-2 ${
                  activeTab === tab.label
                    ? "border-border "
                    : "border-[#757575]"
                }`}
              >
                <Text className="text-sm text-[#757575]">{tab.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <ProductList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
