import { ThemedButton } from "@/components/themed-button";
import { useAuthStore } from "@/features/auth/hooks/useAuth";
import { ProfileStackScreenProps } from "@/navigation/types";
import React, { useState } from "react";
import { Alert, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = ProfileStackScreenProps<"EditProfile">;

export function EditProfileScreen({ navigation }: Props) {
  const { user } = useAuthStore();
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");

  const handleSave = () => {
    Alert.alert("Thành công", "Cập nhật hồ sơ thành công!", [
      { text: "OK", onPress: () => navigation.goBack() },
    ]);
  };

  return (
    <SafeAreaView className="flex-1 bg-light-background dark:bg-dark-background">
      <View className="flex-1 p-6">
        {/* Avatar */}
        <View className="items-center mb-6">
          <View className="w-24 h-24 rounded-full bg-primary-light dark:bg-primary-dark items-center justify-center mb-3">
            <Text className="text-white text-4xl font-bold">
              {name.charAt(0)}
            </Text>
          </View>
          <Text className="text-primary-light dark:text-primary-dark font-semibold">
            Thay đổi ảnh đại diện
          </Text>
        </View>

        {/* Form */}
        <View className="gap-4">
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
            />
          </View>

          {/* Phone */}
          <View>
            <Text className="text-sm font-medium text-light-text dark:text-dark-text mb-2">
              Số điện thoại
            </Text>
            <TextInput
              className="bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text p-4 rounded-lg border border-light-border dark:border-dark-border"
              placeholder="0123456789"
              placeholderTextColor="#9CA3AF"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />
          </View>

          {/* Bio */}
          <View>
            <Text className="text-sm font-medium text-light-text dark:text-dark-text mb-2">
              Giới thiệu
            </Text>
            <TextInput
              className="bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text p-4 rounded-lg border border-light-border dark:border-dark-border"
              placeholder="Viết vài dòng về bản thân..."
              placeholderTextColor="#9CA3AF"
              value={bio}
              onChangeText={setBio}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>
        </View>

        {/* Save Button */}
        <View className="mt-6">
          <ThemedButton
            title="Lưu thay đổi"
            variant="primary"
            size="large"
            fullWidth
            onPress={handleSave}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
