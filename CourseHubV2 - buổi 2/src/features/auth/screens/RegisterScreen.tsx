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

type Props = AuthStackScreenProps<"Register">;

export function RegisterScreen({ navigation }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { register, isLoading } = useAuthStore();

  const handleRegister = async () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert("Lỗi", "Vui lòng nhập đầy đủ thông tin");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Lỗi", "Mật khẩu xác nhận không khớp");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Lỗi", "Mật khẩu phải có ít nhất 6 ký tự");
      return;
    }

    try {
      await register(name, email, password);
    } catch (error: any) {
      Alert.alert("Đăng ký thất bại", error.message || "Có lỗi xảy ra");
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
            <View className="items-center mb-8">
              <Text className="text-6xl mb-4">🎓</Text>
              <Text className="text-3xl font-bold text-light-text dark:text-dark-text mb-2">
                Đăng ký
              </Text>
              <Text className="text-base text-light-textSecondary dark:text-dark-textSecondary text-center">
                Tạo tài khoản để bắt đầu học tập
              </Text>
            </View>

            {/* Form */}
            <View className="gap-4 mb-6">
              {/* Name */}
              <View>
                <Text className="text-sm font-medium text-light-text dark:text-dark-text mb-2">
                  Họ và tên
                </Text>
                <TextInput
                  className="bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text p-4 rounded-lg border border-light-border dark:border-dark-border"
                  placeholder="Nguyễn Văn A"
                  placeholderTextColor="#9CA3AF"
                  value={name}
                  onChangeText={setName}
                  editable={!isLoading}
                />
              </View>

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

              {/* Confirm Password */}
              <View>
                <Text className="text-sm font-medium text-light-text dark:text-dark-text mb-2">
                  Xác nhận mật khẩu
                </Text>
                <TextInput
                  className="bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text p-4 rounded-lg border border-light-border dark:border-dark-border"
                  placeholder="••••••••"
                  placeholderTextColor="#9CA3AF"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry
                  editable={!isLoading}
                />
              </View>
            </View>

            {/* Register Button */}
            <ThemedButton
              title={isLoading ? "Đang đăng ký..." : "Đăng ký"}
              variant="primary"
              size="large"
              fullWidth
              onPress={handleRegister}
              disabled={isLoading}
            />

            {/* Login Link */}
            <View className="flex-row items-center justify-center mt-6">
              <Text className="text-light-textSecondary dark:text-dark-textSecondary">
                Đã có tài khoản?{" "}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text className="text-primary-light dark:text-primary-dark font-semibold">
                  Đăng nhập
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
