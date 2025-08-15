import { View, Text, Image, Pressable, FlatList } from "react-native";
import React from "react";
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
  },
  {
    id: "2",
    image: require("@/assets/images/clear.jpg"),
    title: "Sản phẩm 2",
    price: "250.000đ",
  },
  {
    id: "3",
    image: require("@/assets/images/mask.jpg"),
    title: "Sản phẩm 3",
    price: "250.000đ",
  },
];

type Product = {
  id: string;
  image: any;
  title: string;
  price: string;
};

const ProductItem = ({ item }: { item: Product }) => {
  const router = useRouter();
  const singlePress = useSinglePress(1000); // 1000ms chặn click nhanh
  const onAddToCart = () => {
    Toast.show({
      type: "cart", // custom type
      text1: "Đã thêm vào giỏ hàng",
      props: {
        onPressViewCart: () => {
          console.log("Đi đến giỏ hàng");
          singlePress(() => router.push("/(tabs)/shoppingcart"));
        },
      },
      position: "bottom",
      visibilityTime: 3000, // 3s tự ẩn
    });
  };
  return (
    <Pressable
      onPress={() => singlePress(() => router.push(`/products/${item.id}`))}
      className=" mb-5"
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
        <Pressable
          onPress={onAddToCart}
          className="absolute top-4 right-4 w-11 h-11 rounded-full bg-primary items-center justify-center"
        >
          <AntDesign name="plus" size={24} color="white" />
        </Pressable>
      </View>
      <Pressable
        onPress={() => singlePress(() => router.push(`/products/${item.id}`))}
        className="mt-5"
      >
        <Text className="text-[32px] font-bold text-center">{item.title}</Text>
      </Pressable>
      <View className="mt-[10px]">
        <Text className="text-lg font-normal text-center">
          Giá: {item.price}
        </Text>
      </View>
    </Pressable>
  );
};

const ProductRelated = () => {
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

export default ProductRelated;
