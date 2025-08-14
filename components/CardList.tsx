import { View, Text, Pressable, Image, FlatList, Modal } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";

interface Product {
  id: string;
  name: string;
  volume: string;
  price: number;
  oldPrice: number;
  image: any;
}

interface Counts {
  [id: string]: number;
}

interface CheckedItems {
  [id: string]: boolean;
}

const products = [
  {
    id: "1",
    name: "Dầu xả tinh dầu bưởi 300ml Genecell",
    volume: "300ml",
    price: 500000,
    oldPrice: 850000,
    image: require("@/assets/images/image-conditioner.png"),
  },
  {
    id: "2",
    name: "Serum AACNEVANISH 10ml Genecell",
    volume: "10ml",
    price: 650000,
    oldPrice: 1000000,
    image: require("@/assets/images/image-acenevenish.png"),
  },
];

const CardList = () => {
  const [checked, setChecked] = useState(false);
  const [counts, setCounts] = useState<{ [id: string]: number }>({});
  const [checkedItems, setCheckedItems] = useState<{ [id: string]: boolean }>(
    {}
  );

  const [showPopup, setShowPopup] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState<string | null>(null);

  const toggleCheckAll = () => {
    if (checked) {
      setCheckedItems({});
    } else {
      const allChecked: { [id: string]: boolean } = {};
      products.forEach((p) => {
        allChecked[p.id] = true;
      });
      setCheckedItems(allChecked);
    }
    setChecked(!checked);
  };

  const toggleCheck = (id: string) => {
    setCheckedItems((prev: CheckedItems) => ({ ...prev, [id]: !prev[id] }));
  };

  const changeCount = (id: string, delta: number) => {
    setCounts((prev: Counts) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 1) + delta),
    }));
  };

  const confirmDelete = () => {
    // Xóa sản phẩm ở đây
    console.log("Xóa sản phẩm:", deleteItemId);
    setShowPopup(false);
    setDeleteItemId(null);
  };

  const renderItem = ({ item }: { item: Product }) => (
    <View className="flex-row justify-between items-start mb-4 px-4">
      <View className="flex-row gap-2">
        {/* Checkbox */}
        <Pressable
          onPress={() => toggleCheck(item.id)}
          className="flex-row items-center"
        >
          <View
            className={`${checkedItems[item.id] ? "border-green-600 bg-green-600" : "border-gray-400 bg-transparent"} rounded-md border-2 justify-center items-center`}
            style={{ width: 24, height: 24 }}
          >
            {checkedItems[item.id] && (
              <Text className="text-white font-bold text-lg leading-[16px]">
                ✓
              </Text>
            )}
          </View>
        </Pressable>

        {/* Image */}
        <View className="border border-text-secondary rounded-md">
          <Image
            source={item.image}
            style={{ width: 52, height: 52, padding: 6 }}
          />
        </View>
      </View>

      {/* Content */}
      <View className="flex-1 ml-2">
        <Text className="text-text font-medium text-lg">{item.name}</Text>
        <Pressable className="my-2 flex-row self-start px-[10px] gap-[10px] py-[6px] bg-[#E0E0E0]">
          <Text className="text-sm">Dung tích: {item.volume}</Text>
          <Entypo name="chevron-down" size={18} color="black" />
        </Pressable>
        <View className="flex-row gap-1">
          <Text className="text-[#DC2626] text-base font-semibold">
            {item.price.toLocaleString()} <Text className="underline">đ</Text>
          </Text>
          <Text className="text-text-secondary line-through text-base font-semibold">
            {item.oldPrice.toLocaleString()} đ
          </Text>
        </View>

        {/* Quantity */}
        <View className="flex-row self-start mt-2 items-center border border-gray-300 rounded-lg overflow-hidden">
          <Pressable
            onPress={() => changeCount(item.id, -1)}
            className="w-10 h-10 justify-center items-center border-r border-gray-300"
          >
            <Text className="text-lg text-text-secondary font-bold">-</Text>
          </Pressable>

          <View className="w-10 h-10 justify-center items-center">
            <Text className="text-lg font-semibold">
              {counts[item.id] || 1}
            </Text>
          </View>

          <Pressable
            onPress={() => changeCount(item.id, 1)}
            className="w-10 h-10 justify-center items-center border-l border-gray-300"
          >
            <Text className="text-lg text-text-secondary font-bold">+</Text>
          </Pressable>
        </View>
      </View>

      {/* Trash */}
      <View>
        <Pressable
          onPress={() => {
            setDeleteItemId(item.id);
            setShowPopup(true);
          }}
        >
          <Feather name="trash-2" size={24} color="gray" />
        </Pressable>
      </View>
    </View>
  );

  return (
    <>
      <View className="bg-white mb-4 ">
        <View className="flex-row justify-between items-center px-4 py-2">
          <View className="flex-row gap-2 items-center ">
            <Pressable
              onPress={toggleCheckAll}
              className="flex-row items-center"
            >
              <View
                className={`${checked ? "border-green-600 bg-green-600" : "border-gray-400 bg-transparent"} rounded-md border-2`}
                style={{
                  width: 24,
                  height: 24,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                {checked && (
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: 16,
                      lineHeight: 16,
                      textAlign: "center",
                    }}
                  >
                    ✓
                  </Text>
                )}
              </View>
            </Pressable>
            <View>
              <Text>Chọn tất cả (1)</Text>
            </View>
          </View>
          <View>
            <Feather name="trash-2" size={24} color="gray" />
          </View>
        </View>
      </View>

      <FlatList
        scrollEnabled={false}
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      {/* Popup xác nhận */}
      <Modal
        transparent
        visible={showPopup}
        animationType="fade"
        onRequestClose={() => setShowPopup(false)}
      >
        <View className="flex-1 bg-black/50 justify-center items-center">
          <View className="bg-white rounded-lg p-4 w-[350px] items-center">
            {/* Nút đóng */}
            <Pressable
              className="absolute top-3 right-3"
              onPress={() => setShowPopup(false)}
            >
              <AntDesign name="close" size={25} color="black" />
            </Pressable>

            {/* Icon cảnh báo */}
            <Image
              source={require("@/assets/images/icon-delete.png")}
              className="w-[70px] h-[68px] my-[10px]"
            />

            {/* Nội dung */}
            <Text className="text-center text-base font-semibold mb-5">
              Bạn có muốn xoá sản phẩm này ra khỏi giỏ hàng
            </Text>

            {/* Nút hành động */}
            <View className="flex-row w-full gap-[10px]">
              <Pressable
                onPress={() => setShowPopup(false)}
                className="flex-1 bg-red-500 p-[10px] rounded-lg"
              >
                <Text className="text-white text-center">Huỷ bỏ</Text>
              </Pressable>
              <Pressable
                onPress={confirmDelete}
                className="flex-1 bg-green-500 p-[10px] rounded-lg"
              >
                <Text className="text-white text-center">Xác nhận</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default CardList;
