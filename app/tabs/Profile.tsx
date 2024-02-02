import { Link } from "expo-router";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";


const ProfileFeedPage = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior="padding"
        className="flex-1 p-2 bg-primary-light"
      >
        <Text>Profile</Text>
        <Link className="items-end" href={"/"}>
          Back to the login screen
        </Link>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default ProfileFeedPage;
