import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link, Href, AllRoutes, usePathname, router} from "expo-router";

interface FormButtonProps {
    children: React.ReactNode
    path: Href<AllRoutes>
}

const FormButton = ({ children, path }: FormButtonProps) => {

  const currentScreen = usePathname()

  const onPressHandler = () =>{
    if (currentScreen === "/") {
      router.replace(path)
    } else { router.push((path)) }
  }

  return (
    <Link href={path} asChild onPress={onPressHandler}>
      <Pressable className="border p-2 rounded-lg border-primary-default flex-1 items-center justify-center">
        <Text className="text-primary-default ">{children}</Text>
      </Pressable>
    </Link>
  );
};

export default FormButton;
