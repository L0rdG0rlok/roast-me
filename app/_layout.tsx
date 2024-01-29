import { View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
  useTheme,
} from "@react-navigation/native";
import { useFonts } from "expo-font";


const StackLayout = () => {
  const [fontsLoaded, fontError] = useFonts({
    "Burn": require("../assets/fonts/Burn.otf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ThemeProvider value={DarkTheme}>
      <Stack screenOptions={{ headerShadowVisible: false, headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="signup" options={{presentation: 'modal', orientation: 'portrait_up',}} />
      </Stack>
    </ThemeProvider>
  );
};

export default StackLayout;
