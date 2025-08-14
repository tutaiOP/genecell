// app/products/[id].tsx
import { View, Text, Image, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import ProductList from "@/components/ProductList";
import ProductRelated from "@/components/ProductRelated";
const ProductDetail = () => {
  const { id } = useLocalSearchParams(); // Lấy giá trị :id từ URL
  const [expanded, setExpanded] = useState(false);
  // State cho hình ảnh
  const [images, setImages] = useState([
    require("@/assets/images/shampoo.jpg"),
    require("@/assets/images/image-detail.png"), // main image

    require("@/assets/images/image-2.png"),
    require("@/assets/images/image-3.png"),
  ]);

  // Hàm xử lý khi click vào hình phụ
  const handleImageSwap = (index: number) => {
    // Tạo bản sao của mảng images
    const newImages = [...images];
    // Hoán đổi vị trí hình chính (0) với hình được click (index + 1)
    [newImages[0], newImages[index + 1]] = [newImages[index + 1], newImages[0]];
    // Cập nhật state
    setImages(newImages);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f0fdf4" }}>
      <View className="mt-2  flex-row justify-between items-center mx-4">
        <Pressable
          onPress={() => router.back()}
          className="w-12 h-12  rounded-full  bg-primary-10 items-center justify-center"
        >
          <FontAwesome5 name="arrow-left" size={18} color="white" />
        </Pressable>
        <View>
          <Image
            source={require("@/assets/images/logo-genecell.png")}
            style={{ width: 81, height: 60 }}
          />
        </View>
        <View className="w-12 h-12 rounded-full bg-primary-10 items-center justify-center">
          <Image
            source={require("@/assets/images/icon-cart.png")}
            style={{ width: 18, height: 18, backgroundColor: "#489A36" }}
          />
        </View>
      </View>
      <View className="flex-1 mt-4">
        <ScrollView showsVerticalScrollIndicator={false} className="mx-4">
          <View className="">
            <Image
              className="rounded-[20px]"
              source={images[0]}
              style={{ width: "100%", height: 315 }}
              resizeMode="cover" // Thêm dòng này để hình không bị mờ
            />
          </View>
          <View className="flex-row justify-between mt-2">
            {[1, 2, 3].map((item, index) => (
              <Pressable
                key={index}
                className="w-[32%]"
                onPress={() => handleImageSwap(index)}
              >
                <Image
                  className="rounded-xl w-full h-24"
                  source={images[index + 1]}
                  resizeMode="cover" // Thêm dòng này để hình không bị mờ
                />
              </Pressable>
            ))}
          </View>
          <View className="mt-6 flex-row gap-2">
            <View className="flex-row gap-[6px] bg-primary p-[6px] rounded-full">
              <AntDesign name="Safety" size={14} color="white" />
              <Text className="text-white text-[10px] font-semibold">
                Cam kết chính hãng
              </Text>
            </View>
            <View className="flex-row gap-[6px] bg-secondary p-[6px] rounded-full">
              <AntDesign name="star" size={14} color="#489A36" />
              <Text className="text-primary text-[10px] font-semibold">
                Độc quyền tại GENECELL
              </Text>
            </View>
          </View>
          <View className="my-2">
            <Text className="text-2xl font-semibold">
              VitalSkin Revive 10mL/ 0.33fl
            </Text>
          </View>
          <View className="flex-row gap-2 items-center">
            <View>
              <Text className="text-xs text-text-secondary font-medium">
                No.0000001
              </Text>
            </View>
            <View className="flex-row gap-1 items-center">
              <FontAwesome name="star" size={15} color="#FBC91A" />
              <Text className="text-sm font-medium text-black">5.0</Text>
            </View>
            <View>
              <Text className="text-sm font-medium text-black">
                Lượt mua: 1000
              </Text>
            </View>
          </View>
          <View className="my-4 flex-row gap-1 items-center">
            <Pressable className="py-3 px-[10px] rounded-xl border border-primary">
              <Image
                source={require("@/assets/images/icon-gh-g.png")}
                style={{ width: 18, height: 18 }}
              />
            </Pressable>
            <Pressable className="flex-1 py-3 bg-primary rounded-xl">
              <Text className="text-white text-center font-semibold text-base">
                Đặt mua
              </Text>
            </Pressable>
          </View>
          <View
            className=" mb-2"
            style={{
              maxHeight: expanded ? undefined : 800, // Giới hạn chiều cao khi thu gọn
              overflow: "hidden",
            }}
          >
            <Text className="text-text text-xl font-bold">
              Thông tin sản phẩm:
            </Text>
            <Text className="text-text-secondary text-base font-normal my-4">
              VITALSKIN REVIVE được cô đặc từ các loại vitamin tinh khiết, các
              chất diện giải, chất còn bàn của vùng gian bào, các tinh chất
              chiết xuất từ thảo dược, có tác dụng kích thích sự tái sinh tế bào
              và sửa chữa những hư hỏng từ cấu trúc vi mô của da, giúp nuôi
              dưỡng và trẻ hóa da. Giúp chữa lành vết thương, phục hồi da sau
              điều trị lazer, phi, lăn kim… giảm thiểu phản ứng viêm da.
            </Text>
            <Text className="text-text text-base font-medium">
              Cung cấp dưỡng chất làm mềm và dịu da: Aloe Barbadensis Leaf Juice
              Powder và Lactuca Indica L Extract có thể cung cấp dưỡng chất cần
              thiết cho da, đồng thời làm dịu và làm mát da, giúp làm giảm cảm
              giác khó chịu và kích ứng trên da.
            </Text>
            <Image
              className="my-4"
              source={require("@/assets/images/image-3.png")}
              style={{ width: "100%", height: 293 }}
            />
            <Text className="text-text text-lg font-semibold">Thành phần:</Text>
            <Text className="text-text text-sm font-medium my-4">
              Aqua, Panthenol, Trihydroxypropane, Hyaluronic acid, Carbomer,
              Phenoxyethanol, Methyl 4-hydroxybenzoate, Sodium hydroxide, Aloe
              Barbadensis Leaf Juice Powder, Lactuca indica L Extract
            </Text>
            <Text className="text-text text-lg font-semibold">Công dụng:</Text>
            <Text className="text-text-secondary text-base font-normal my-4">
              VITALSKIN REVIVE được cô đặc từ các loại vitamin tinh khiết, các
              chất diện giải, chất còn bàn của vùng gian bào, các tinh chất
              chiết xuất từ thảo dược, có tác dụng kích thích sự tái sinh tế bào
              và sửa chữa những hư hỏng từ cấu trúc vi mô của da, giúp nuôi
              dưỡng và trẻ hóa da. Giúp chữa lành vết thương, phục hồi da sau
              điều trị lazer, phi, lăn kim… giảm thiểu phản ứng viêm da. Cung
              cấp dưỡng chất làm mềm và dịu da: Aloe Barbadensis Leaf Juice
              Powder và Lactuca Indica L Extract có thể cung cấp dưỡng chất cần
              thiết cho da, đồng thời làm dịu và làm mát da, giúp làm giảm cảm
              giác khó chịu và kích ứng trên da.
            </Text>
            <Text className="text-text text-lg font-semibold">
              Nghiên cứu khoa học:
            </Text>
            <Text className="text-text text-base font-medium my-4">
              Với hơn 15 năm kinh nghiệm trong lĩnh vực chăm sóc da tiêu chuẩn y
              khoa. VITALSKIN REVIVE được nghiên cứu và chiết xuất từ các bác sĩ
              và chuyên gia da liễu của Việt Nam trên chính làn da người việt.
              Có khả năng giúp phục hồi sức đề kháng của hàng rào bảo vệ da và
              tăng độ đàn hồi cho da thêm căng mịn,tươi trẻ. {"\n"} Nghiên cứu
              đã chỉ ra rằng aloe vera có khả năng làm dịu da, làm giảm viêm
              nhiễm, và cung cấp dưỡng chất cho do (Source: Surjushe, A, Vasani,
              R, & Saple, D. G. (2008). Aloe)
            </Text>
            <Text className="text-text text-lg font-semibold">
              Hướng dẫn sử dụng:
            </Text>
            <Text className="text-text text-base font-medium my-4">
              1. Rửa mặt và làm sạch da trước khi sử dụng sản phẩm VITALSKIN.
              {"\n"} 2. Thoa đều sản phẩm lên da mặt masage nhẹ nhàng để thẩm
              thấu giúp da phục hồi và tái tạo sâu để dưỡng da mịn màng rạng
              ngời. Nên thoa nhiều hơn ở các vùng tổn thương cần phục hồi chữa
              lãnh Sử dụng 2 lần/ ngày sáng và tối để sản phẩm đạt hiệu quả cao
            </Text>
            <Text className="text-text text-lg font-semibold">Chú ý:</Text>
            <Text className="text-text text-base font-medium my-4">
              Sản phẩm này được chiết xuất từ các thành phần thảo dược thiên
              nhiên, không chứa chất độc hại, không chứa phẩm màu và hương thơm
              nhân tạo. Màu sắc và mùi có thể biến đổi, nhưng không ảnh hưởng
              đến chất lượng, nên bảo quản ở ngăn mát tủ lạnh sau khi mở nắp
              {"\n"}
              {"\n"}Thể tích thực: 10ml {"\n"}
              {"\n"}Số công bố: 58/23/CBMP-TG {"\n"}
              {"\n"}
              Hạn sử dụng: Xem trên vỏ hộp{"\n"}
              {"\n"}Công Ty TNHH SMC Organic Garden
              {"\n"}
              {"\n"}
              127 Đường An Dương Vương, Phường Trường Thị, Thành Phố Vinh, Tỉnh
              Nghệ An, Việt Nam Điện thoại: 0818 444 456{"\n"}
              {"\n"}Trang web: genecell.vn{"\n"}
              {"\n"}
              Email: genecellsmc@gmail.com
            </Text>
          </View>
          {/* Nút Xem thêm / Thu gọn */}
          <View className="flex">
            <Pressable
              onPress={() => setExpanded(!expanded)}
              className="py-[6px] px-[28px] rounded-xl border border-text-secondary self-start mx-auto mt-2"
            >
              <Text className="text-sm text-text">
                {expanded ? "Thu gọn" : "Xem thêm"}
              </Text>
            </Pressable>
          </View>

          <View className="mt-4">
            <Text className="text-text text-xl font-bold mb-4">
              Sản phẩm tương tự:
            </Text>
            <ProductRelated />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;
