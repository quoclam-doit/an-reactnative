import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "./global.css";
import { useTheme } from "./src/hooks/use-theme";
import { RootNavigator } from "./src/navigation/RootNavigator";

export default function App() {
  const { isDark } = useTheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style={isDark ? "light" : "dark"} />
      <RootNavigator />
    </GestureHandlerRootView>
  );
}
