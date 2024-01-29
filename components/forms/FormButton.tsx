import { View, Text, Pressable } from "react-native";
import React, { Children } from "react";
import { Link, Href, AllRoutes, useRouter, useNavigation, router } from "expo-router";

interface FormButtonProps {
    children: React.ReactNode
    path: Href<AllRoutes>
}

const FormButton = ({ children, path }: FormButtonProps) => {
  return (
    <Link href={path} asChild onPress={() => {router.replace("/tabs/Profile")}}>
      <Pressable className="border p-2 rounded-lg border-[#ffb788] flex-1 items-center justify-center">
        <Text className="text-[#ffb788] ">{children}</Text>
      </Pressable>
    </Link>
  );
};

export default FormButton;
