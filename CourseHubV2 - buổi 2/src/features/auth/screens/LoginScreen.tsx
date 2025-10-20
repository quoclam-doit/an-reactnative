import { ThemedButton } from "@/components/themed-button";
import { AuthStackScreenProps } from "@/navigation/types";
import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthStore } from "../hooks/useAuth";

type Props = AuthStackScreenProps<"Login">;

export function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useAuthStore();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Lỗi", "Vui lòng nhập đầy đủ thông tin");
      return;
    }

    try {
      await login(email, password);
    } catch (error: any) {
      Alert.alert("Đăng nhập thất bại", error.message || "Có lỗi xảy ra");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-light-background dark:bg-dark-background">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView className="flex-1" keyboardShouldPersistTaps="handled">
          <View className="flex-1 px-6 pt-8">
            {/* Header */}
            <View className="items-center mb-12">
              <Text className="text-6xl mb-4">🎓</Text>
              <Text className="text-3xl font-bold text-light-text dark:text-dark-text mb-2">
                Đăng nhập
              </Text>
              <Text className="text-base text-light-textSecondary dark:text-dark-textSecondary text-center">
                Chào mừng bạn trở lại CourseHub
              </Text>
            </View>

            {/* Form */}
            <View className="gap-4 mb-6">
              {/* Email */}
              <View>
                <Text className="text-sm font-medium text-light-text dark:text-dark-text mb-2">
                  Email
                </Text>
                <TextInput
                  className="bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text p-4 rounded-lg border border-light-border dark:border-dark-border"
                  placeholder="example@email.com"
                  placeholderTextColor="#9CA3AF"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  editable={!isLoading}
                />
              </View>

              {/* Password */}
              <View>
                <Text className="text-sm font-medium text-light-text dark:text-dark-text mb-2">
                  Mật khẩu
                </Text>
                <TextInput
                  className="bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text p-4 rounded-lg border border-light-border dark:border-dark-border"
                  placeholder="••••••••"
                  placeholderTextColor="#9CA3AF"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                  editable={!isLoading}
                />
              </View>

              {/* Forgot Password */}
              <TouchableOpacity className="self-end">
                <Text className="text-primary-light dark:text-primary-dark font-semibold">
                  Quên mật khẩu?
                </Text>
              </TouchableOpacity>
            </View>

            {/* Login Button */}
            <ThemedButton
              title={isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
              variant="primary"
              size="large"
              fullWidth
              onPress={handleLogin}
              disabled={isLoading}
            />

            {/* Register Link */}
            <View className="flex-row items-center justify-center mt-6">
              <Text className="text-light-textSecondary dark:text-dark-textSecondary">
                Chưa có tài khoản?{" "}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text className="text-primary-light dark:text-primary-dark font-semibold">
                  Đăng ký ngay
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
