import { ThemedButton } from "@/components/themed-button";
import { useAuthStore } from "@/features/auth/hooks/useAuth";
import { ProfileStackScreenProps } from "@/navigation/types";
import React from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = ProfileStackScreenProps<"ProfileMain">;

export function ProfileScreen({ navigation }: Props) {
  const { user, logout } = useAuthStore();

  const handleLogout = async () => {
    Alert.alert("Đăng xuất", "Bạn có chắc muốn đăng xuất?", [
      { text: "Hủy", style: "cancel" },
      {
        text: "Đăng xuất",
        style: "destructive",
        onPress: async () => {
          await logout();
        },
      },
    ]);
  };

  const menuItems = [
    { icon: "📚", title: "Khóa học của tôi", onPress: () => {} },
    { icon: "❤️", title: "Yêu thích", onPress: () => {} },
    { icon: "🎓", title: "Chứng chỉ", onPress: () => {} },
    { icon: "❓", title: "Trợ giúp", onPress: () => {} },
  ];

  return (
    <SafeAreaView className="flex-1 bg-light-background dark:bg-dark-background">
      <ScrollView className="flex-1">
        {/* Profile Header */}
        <View className="items-center p-6 bg-light-card dark:bg-dark-card border-b border-light-border dark:border-dark-border">
          {/* Avatar */}
          <View className="w-24 h-24 rounded-full bg-primary-light dark:bg-primary-dark items-center justify-center mb-4">
            <Text className="text-white text-4xl font-bold">
              {user?.name?.charAt(0)}
            </Text>
          </View>

          <Text className="text-2xl font-bold text-light-text dark:text-dark-text mb-1">
            {user?.name}
          </Text>
          <Text className="text-base text-light-textSecondary dark:text-dark-textSecondary mb-4">
            {user?.email}
          </Text>

          <TouchableOpacity
            className="bg-light-surface dark:bg-dark-surface px-6 py-2 rounded-full"
            onPress={() => navigation.navigate("EditProfile")}
          >
            <Text className="text-primary-light dark:text-primary-dark font-semibold">
              Chỉnh sửa hồ sơ
            </Text>
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <View className="flex-row p-6">
          <View className="flex-1 items-center">
            <Text className="text-2xl font-bold text-light-text dark:text-dark-text">
              12
            </Text>
            <Text className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
              Khóa học
            </Text>
          </View>
          <View className="flex-1 items-center border-l border-r border-light-border dark:border-dark-border">
            <Text className="text-2xl font-bold text-light-text dark:text-dark-text">
              45
            </Text>
            <Text className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
              Giờ học
            </Text>
          </View>
          <View className="flex-1 items-center">
            <Text className="text-2xl font-bold text-light-text dark:text-dark-text">
              8
            </Text>
            <Text className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
              Chứng chỉ
            </Text>
          </View>
        </View>

        {/* Menu Items */}
        <View className="px-6">
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="flex-row items-center bg-light-card dark:bg-dark-card p-4 rounded-lg border border-light-border dark:border-dark-border mb-2"
              onPress={item.onPress}
            >
              <Text className="text-2xl mr-3">{item.icon}</Text>
              <Text className="flex-1 text-base font-semibold text-light-text dark:text-dark-text">
                {item.title}
              </Text>
              <Text className="text-light-textSecondary dark:text-dark-textSecondary">
                ›
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <View className="p-6">
          <ThemedButton
            title="Đăng xuất"
            variant="error"
            fullWidth
            onPress={handleLogout}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
