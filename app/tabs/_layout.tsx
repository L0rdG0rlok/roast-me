import React from "react";
import { Tabs } from "expo-router";
import colors from "../constants/colors";
import { useSafeAreaInsets, SafeAreaView, SafeAreaInsetsContext } from "react-native-safe-area-context";

const TabsLayout = () => {

  const insets = useSafeAreaInsets()
  return (
    <Tabs>
      <Tabs.Screen
        name="Profile"
        options={{
          headerStyle: {
            backgroundColor: colors["bg-color"].dark, 
            borderRadius: 10,
            height: 100
          },
          headerShadowVisible: false,
          headerBackgroundContainerStyle: {backgroundColor: colors.primary.default,},
          tabBarActiveBackgroundColor: colors.primary.default,
          tabBarStyle: {height: 80},
          tabBarLabelStyle: {height: 30},
          tabBarItemStyle: {height: 80},
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
