import { Stack, useRouter, useSegments } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEffect } from "react";
import "../global.css";
import Toast from "react-native-toast-message";
import CustomToast from "@/components/CustomToast";

export default function RootLayout() {
  const router = useRouter();
  const segments = useSegments();
  const isAuth = true;

  useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";
    if (!isAuth && !inAuthGroup) {
      router.replace("/(auth)/login");
    } else if (isAuth && inAuthGroup) {
      router.replace("/(tabs)");
    }
  }, [isAuth, segments]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Stack>
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="products/[id]" options={{ headerShown: false }} />
          <Stack.Screen
            name="personalInfomation"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="notifyScreen" options={{ headerShown: false }} />
          <Stack.Screen
            name="deliveryScreen"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="brandScreen" options={{ headerShown: false }} />
          <Stack.Screen name="helpScreen" options={{ headerShown: false }} />
          <Stack.Screen
            name="cartItemScreen"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="editScreen" options={{ headerShown: false }} />
          <Stack.Screen
            name="editAddressScreen"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="statictisScreen"
            options={{ headerShown: false }}
          />
        </Stack>
        <Toast
          config={{
            cart: CustomToast.cart,
          }}
        />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
