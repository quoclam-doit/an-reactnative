import { ThemedButton } from "@/components/themed-button";
import { AuthStackScreenProps } from "@/navigation/types";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = AuthStackScreenProps<"Welcome">;

export function WelcomeScreen({ navigation }: Props) {
  return (
    <SafeAreaView className="flex-1 bg-blue-600">
      <View className="flex-1 items-center justify-center px-6">
        {/* Logo */}
        <View className="items-center mb-12">
          <Text className="text-8xl mb-4">🎓</Text>
          <Text className="text-4xl font-bold text-white mb-2">CourseHub</Text>
          <Text className="text-xl text-white text-center opacity-80">
            Nền tảng học trực tuyến hàng đầu
          </Text>
        </View>

        {/* Buttons */}
        <View className="w-full gap-4">
          <ThemedButton
            title="Đăng nhập"
            variant="primary"
            size="large"
            fullWidth
            onPress={() => navigation.navigate("Login")}
          />

          <ThemedButton
            title="Đăng ký"
            variant="secondary"
            size="large"
            fullWidth
            onPress={() => navigation.navigate("Register")}
          />
        </View>

        {/* Footer */}
        <View className="absolute bottom-8 items-center">
          <Text className="text-white text-sm opacity-60">
            Bằng cách tiếp tục, bạn đồng ý với
          </Text>
          <Text className="text-white text-sm opacity-60">
            Điều khoản dịch vụ & Chính sách bảo mật
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
