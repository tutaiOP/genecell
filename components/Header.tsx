import {
  View,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Fontisto from "@expo/vector-icons/Fontisto";
import Feather from "@expo/vector-icons/Feather";
import { useSinglePress } from "@/hooks/useSinglePress";
import { router } from "expo-router";

const Header = () => {
  const singlePress = useSinglePress(1000);
  const [searchText, setSearchText] = useState("");
  const [showResults, setShowResults] = useState(false);

  // Dữ liệu mẫu - thay bằng dữ liệu thực tế từ API
  const sampleProducts = [
    { id: 1, name: "VITALSKIN REVIVE" },
    { id: 2, name: "CLEAR +" },
    { id: 3, name: "UV SHIELD DEFFENSE" },
    { id: 4, name: "MASK PRO" },
    { id: 5, name: "CELLRENEWAL REVIE" },
  ];

  // Lọc sản phẩm theo từ khóa tìm kiếm
  const filteredProducts = sampleProducts.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearch = (text: string): void => {
    setSearchText(text);
    setShowResults(text.length > 0); // Chỉ hiển thị kết quả khi có text
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View>
          <View className="mt-2 flex-row justify-between items-center mx-4">
            <View className="relative">
              <Pressable
                onPress={() => singlePress(() => router.push("/notifyScreen"))}
                className="w-12 h-12 rounded-full bg-primary-10 items-center justify-center"
              >
                <Feather name="bell" size={24} color="white" />
              </Pressable>
              <View className="absolute -top-2 -right-1 bg-red-500 rounded-full w-6 h-6 flex items-center justify-center">
                <Text className="text-xs text-white font-semibold">1</Text>
              </View>
            </View>
            <Pressable
              onPress={() => singlePress(() => router.push("/(tabs)"))}
            >
              <Image
                source={require("@/assets/images/logo-genecell.png")}
                style={{ width: 81, height: 60 }}
              />
            </Pressable>
            <Pressable
              onPress={() =>
                singlePress(() => router.push("/(tabs)/shoppingcart"))
              }
              className="w-12 h-12 rounded-full bg-primary-10 items-center justify-center relative"
            >
              <Image
                source={require("@/assets/images/icon-cart.png")}
                style={{ width: 24, height: 24, backgroundColor: "#489A36" }}
              />
              <View className="absolute -top-2 -right-1 bg-red-500 rounded-full w-6 h-6 flex items-center justify-center">
                <Text className="text-xs text-white font-semibold">12</Text>
              </View>
            </Pressable>
          </View>

          {/* Search bar và kết quả tìm kiếm */}
          <View className="mx-4 mt-3 mb-4">
            <View className="py-1 pr-1 pl-5 bg-[#cae9ce] rounded-full flex-row justify-between">
              <TextInput
                placeholder="Nhập tên sản phẩm cần tìm"
                placeholderTextColor={"#757575"}
                value={searchText}
                onChangeText={handleSearch}
                onFocus={() => setShowResults(searchText.length > 0)}
                className="flex-1"
              />
              <Pressable className="w-10 h-10 justify-center items-center bg-primary rounded-full">
                <Fontisto name="search" size={16} color="white" />
              </Pressable>
            </View>

            {/* Danh sách kết quả tìm kiếm */}
            {showResults && (
              <View
                style={{ zIndex: 50 }}
                className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60"
              >
                {filteredProducts.length > 0 ? (
                  <FlatList
                    scrollEnabled={false}
                    data={filteredProducts.slice(0, 5)} // Chỉ lấy 5 phần tử đầu tiên
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                      <Pressable
                        className="px-4 py-3 border-b border-gray-100 active:bg-gray-50"
                        onPress={() => {
                          setSearchText(item.name);
                          setShowResults(false);
                          // Thêm logic chuyển đến trang sản phẩm nếu cần
                        }}
                      >
                        <Text className="text-gray-800">{item.name}</Text>
                      </Pressable>
                    )}
                  />
                ) : (
                  <View className="px-4 py-3">
                    <Text className="text-gray-500">
                      Không tìm thấy sản phẩm
                    </Text>
                  </View>
                )}
              </View>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default Header;
