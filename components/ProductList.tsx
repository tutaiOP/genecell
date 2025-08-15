import { View, Text, Image, Pressable, FlatList } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { useSinglePress } from "@/hooks/useSinglePress";
import Toast from "react-native-toast-message";

const productData = [
  {
    id: "1",
    image: require("@/assets/images/shampoo.jpg"),
    title: "VITALSKIN REVIVE",
    price: "200.000đ",
    priceDiscount: "150.000đ",
    quantity: 5, // Thêm trường số lượng
  },
  {
    id: "2",
    image: require("@/assets/images/clear.jpg"),
    title: "Sản phẩm 2",
    price: "250.000đ",

    quantity: 0, // Sản phẩm hết hàng
  },
  {
    id: "3",
    image: require("@/assets/images/mask.jpg"),
    title: "Sản phẩm 3",
    price: "250.000đ",
    priceDiscount: "200.000đ",
    quantity: 10,
  },
];

type Product = {
  id: string;
  image: any;
  title: string;
  price: string;
  priceDiscount?: string;
  quantity: number;
};

type ProductItemProps = {
  item: Product;
};

const ProductItem = ({ item }: ProductItemProps) => {
  const router = useRouter();
  const singlePress = useSinglePress(1000);
  const [quantity, setQuantity] = useState(item.quantity); // State quản lý số lượng

  const onAddToCart = () => {
    if (quantity <= 0) return; // Không cho thêm vào giỏ nếu hết hàng

    Toast.show({
      type: "cart",
      text1: "Đã thêm vào giỏ hàng",
      props: {
        onPressViewCart: () => {
          singlePress(() => router.push("/(tabs)/shoppingcart"));
        },
      },
      position: "bottom",
      visibilityTime: 3000,
    });

    // Giảm số lượng khi thêm vào giỏ (có thể thay bằng API call)
    setQuantity((prev) => prev - 1);
  };

  return (
    <Pressable
      onPress={() => singlePress(() => router.push(`/products/${item.id}`))}
      className="mx-5 mb-5"
    >
      <View className="relative w-full">
        <Image
          source={item.image}
          style={{
            width: "100%",
            height: 330,
            resizeMode: "cover",
            borderRadius: 20,
          }}
        />

        {/* Nút thêm sản phẩm - Ẩn khi hết hàng */}
        {quantity > 0 && (
          <Pressable
            onPress={onAddToCart}
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-primary items-center justify-center"
          >
            <AntDesign name="plus" size={24} color="white" />
          </Pressable>
        )}

        {/* Overlay hết hàng */}
        {quantity <= 0 && (
          <View className="absolute top-0 right-0 left-0 bottom-0 bg-black/30 rounded-[20px] flex items-center justify-center">
            <View className="bg-gray-200/50 px-4 py-2 rounded-lg w-full">
              <Text className="text-4xl text-white text-center">Hết hàng</Text>
            </View>
          </View>
        )}
      </View>

      <Pressable
        onPress={() => singlePress(() => router.push(`/products/${item.id}`))}
        className="mt-5"
      >
        <Text className="text-[32px] font-bold text-center">{item.title}</Text>
      </Pressable>

      <View className="mt-[10px] flex-row items justify-center gap-1">
        <View>
          <Text className="text-lg font-bold text-center"> Giá:</Text>
        </View>
        <View className="flex-row justify-start items-center gap-1">
          <Text className="text-lg font-bold text-center">{item.price}</Text>
          <Text className="text-text-secondary line-through text-base font-semibold">
            {item.priceDiscount}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const ProductList = () => {
  return (
    <FlatList
      scrollEnabled={false}
      data={productData}
      renderItem={({ item }) => <ProductItem item={item} />}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  );
};

export default ProductList;
