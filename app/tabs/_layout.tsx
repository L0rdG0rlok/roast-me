import React from "react";
import { Tabs } from "expo-router";
import colors from "../constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";

const TabsLayout = () => {
  return (
    <Tabs initialRouteName="ProfileFeed" screenOptions={{
      headerStyle: {
        backgroundColor: colors["bg-color"].dark, 
        borderRadius: 10,
        height: 100
      },
      headerShadowVisible: false,
      headerBackgroundContainerStyle: {backgroundColor: colors.primary.default,},
      tabBarActiveTintColor: colors.primary.default,
      tabBarActiveBackgroundColor: colors["bg-color"].dark,
      tabBarInactiveTintColor: colors["bg-color"].light,
      tabBarStyle: {height: 80, backgroundColor: colors["bg-color"].dark, },
      tabBarLabelStyle: {height: 30, },
      tabBarItemStyle: {height: 80},

    }}>
      <Tabs.Screen
        name="ProfileFeed"
        options={{
          tabBarIcon: ProfileTabIcon,
        }} />
  <Tabs.Screen name="Profile"/>
  <Tabs.Screen name="Users"/>
    </Tabs>
  );
};

export default TabsLayout;

interface TabBarIconProps {
  focused: boolean,
  color: string,
  size: number
}

const ProfileTabIcon: React.FC<TabBarIconProps> = ({ focused }) => {
  return (
    <Ionicons name="person" size={24} color={focused ? colors.primary.default: colors["bg-color"].light} />
  )
}