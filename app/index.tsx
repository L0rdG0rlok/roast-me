import { Link } from "expo-router";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import FormInput from "../components/forms/FormInput";
import FormButton from "../components/forms/FormButton";

const HomePage = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior="padding"
        className="flex-1 items-center justify-center bg-bg-color-default"
      >
        <View>
          <Text
            className={`text-[50px] text-primary-default text-center`}
            style={{ fontFamily: "Burn" }}
          >
            Ro<Text className="text-[#ff596c]">a</Text>st Me
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
            <Link href={"/forgotpassword"} className="flex-1 text-center text-primary-default">
              Forgot Password
            </Link>
            <Text className="flex-1 text-primary-default text-center">|</Text>
            <Link href={"/signup"} className="flex-1 text-center text-primary-default">
              Sign Up
            </Link>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default HomePage;
