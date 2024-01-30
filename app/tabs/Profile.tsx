import { Link } from "expo-router";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

const ProfilePage = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior="padding"
        className="flex-1 items-center justify-center bg-primary-default"
      >
        <Text>WOOO</Text>
        <Link href={"/"}>Back to the login screen</Link>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default ProfilePage;
