import { Link, router } from "expo-router";
import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import FormInput from "../components/forms/FormInput";
import Ionicons from "@expo/vector-icons/Ionicons";
import FormButton from "../components/forms/FormButton";

const HomePage = () => {
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
            className="w-56 h-56"
            source={require("../assets/roast-me-logo.png")}
          />
        </View>
        <View className="w-9/12">
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
            <FormButton path={"/tabs/Profile"}>Login</FormButton>
          </View>
          <View className="flex-row items-center mt-4">
            <Link href={"/forgotpassword"} className="flex-1 text-center text-[#ffb788]">
              Forgot Password
            </Link>
            <Text className="flex-1 text-[#ffb788] text-center">|</Text>
            <Link href={"/signup"} className="flex-1 text-center text-[#ffb788]">
              Sign Up
            </Link>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default HomePage;