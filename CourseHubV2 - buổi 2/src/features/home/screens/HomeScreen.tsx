import { useAuthStore } from "@/features/auth/hooks/useAuth";
import { MainTabScreenProps } from "@/navigation/types";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = MainTabScreenProps<"Home">;

const CATEGORIES = [
  { id: 1, name: "Mobile", icon: "📱", color: "bg-blue-500" },
  { id: 2, name: "Web", icon: "🌐", color: "bg-green-500" },
  { id: 3, name: "Backend", icon: "⚙️", color: "bg-purple-500" },
  { id: 4, name: "DevOps", icon: "🚀", color: "bg-orange-500" },
];

const FEATURED_COURSES = [
  { id: 1, title: "React Native Complete", icon: "📱", students: 1250 },
  { id: 2, title: "JavaScript Advanced", icon: "⚡", students: 2100 },
  { id: 3, title: "TypeScript Mastery", icon: "💙", students: 850 },
];

export function HomeScreen({ navigation }: Props) {
  const { user } = useAuthStore();

  return (
    <SafeAreaView className="flex-1 bg-light-background dark:bg-dark-background">
      <ScrollView className="flex-1">
        {/* Welcome Section */}
        <View className="p-6 bg-primary-light dark:bg-primary-dark">
          <Text className="text-white text-lg mb-1">Xin chào,</Text>
          <Text className="text-white text-2xl font-bold">
            {user?.name || "User"}! 👋
          </Text>
        </View>

        {/* Categories */}
        <View className="p-6">
          <Text className="text-xl font-bold text-light-text dark:text-dark-text mb-4">
            Danh mục
          </Text>
          <View className="flex-row flex-wrap gap-3">
            {CATEGORIES.map((category) => (
              <TouchableOpacity
                key={category.id}
                className={`${category.color} flex-1 min-w-[45%] p-4 rounded-xl items-center`}
              >
                <Text className="text-4xl mb-2">{category.icon}</Text>
                <Text className="text-white font-semibold">
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Featured Courses */}
        <View className="px-6 pb-6">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-xl font-bold text-light-text dark:text-dark-text">
              Khóa học nổi bật
            </Text>
            <TouchableOpacity>
              <Text className="text-primary-light dark:text-primary-dark font-semibold">
                Xem tất cả
              </Text>
            </TouchableOpacity>
          </View>

          {FEATURED_COURSES.map((course) => (
            <TouchableOpacity
              key={course.id}
              className="bg-light-card dark:bg-dark-card p-4 rounded-xl border border-light-border dark:border-dark-border mb-3"
            >
              <View className="flex-row items-center">
                <Text className="text-5xl mr-4">{course.icon}</Text>
                <View className="flex-1">
                  <Text className="text-lg font-bold text-light-text dark:text-dark-text mb-1">
                    {course.title}
                  </Text>
                  <Text className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
                    {course.students} học viên
                  </Text>
                </View>
                <Text className="text-2xl">›</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
