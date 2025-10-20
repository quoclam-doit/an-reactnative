import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { DrawerScreenProps as RNDrawerScreenProps } from "@react-navigation/drawer";
import type { CompositeScreenProps } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

// ==============================================
// AUTH STACK
// ==============================================
export type AuthStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
};

export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;

// ==============================================
// COURSES STACK
// ==============================================
export type CoursesStackParamList = {
  CourseList: undefined;
  CourseDetail: {
    courseId: number;
    courseName: string;
  };
  VideoPlayer: {
    courseId: number;
    videoId: number;
    videoTitle: string;
  };
};

export type CoursesStackScreenProps<T extends keyof CoursesStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<CoursesStackParamList, T>,
    CompositeScreenProps<
      BottomTabScreenProps<MainTabParamList>,
      RNDrawerScreenProps<DrawerParamList>
    >
  >;

// ==============================================
// PROFILE STACK
// ==============================================
export type ProfileStackParamList = {
  ProfileMain: undefined;
  EditProfile: undefined;
};

export type ProfileStackScreenProps<T extends keyof ProfileStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<ProfileStackParamList, T>,
    CompositeScreenProps<
      BottomTabScreenProps<MainTabParamList>,
      RNDrawerScreenProps<DrawerParamList>
    >
  >;

// ==============================================
// MAIN TAB NAVIGATOR
// ==============================================
export type MainTabParamList = {
  Home: undefined;
  CoursesTab: undefined;
  ProfileTab: undefined;
};

export type MainTabScreenProps<T extends keyof MainTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<MainTabParamList, T>,
    RNDrawerScreenProps<DrawerParamList>
  >;

// ==============================================
// DRAWER NAVIGATOR
// ==============================================
export type DrawerParamList = {
  MainTabs: undefined;
  Settings: undefined;
  Help: undefined;
};

export type DrawerScreenProps<T extends keyof DrawerParamList> =
  RNDrawerScreenProps<DrawerParamList, T>;

// ==============================================
// ROOT NAVIGATOR
// ==============================================
export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
};

// ==============================================
// DECLARE GLOBAL TYPE
// ==============================================
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
