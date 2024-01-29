import { Link, router, useFocusEffect } from "expo-router";
import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from "react-native";
import FormInput from "../components/forms/FormInput";
import Ionicons from "@expo/vector-icons/Ionicons";
import FormButton from "../components/forms/FormButton";
import React, { useEffect, useLayoutEffect, useState } from "react";

const SignUpPage = () => {
  const { width, height} = useWindowDimensions()

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior="padding"
        className="flex-1 items-center justify-center bg-[#346B96]"
      >
        <View>
          <Text
            className="text-[50px] text-[#ffb788] text-center"
            style={{ fontFamily: "Burn" }}
          >
            Ro<Text className="text-[#DF2F16]">a</Text>st Me
          </Text>
          <Image
            className={width > height ? "hidden" : "w-56 h-56"}
            source={require("../assets/roast-me-logo.png")}
          />
        </View>
        <View className="w-7/12">
          <FormInput
            IoniconName="mail"
            textContentType="emailAddress"
            placeHolder="Email"
            keyboardType="email-address"
          ></FormInput>
          <FormInput
            IoniconName="key"
            textContentType="password"
            placeHolder="Password"
            secureTextEntry={true}
          ></FormInput>
          <View className="flex-row justify-around space-x-4 my-4">
            <FormButton path="/signup">Sign Up</FormButton>
          </View>
          <View className="flex-row items-center">
            <Link href={"/"} className="flex-1 text-center text-[#ffb788]">
              Login
            </Link>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default SignUpPage;
