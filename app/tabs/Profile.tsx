import { Link } from "expo-router";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import UserPost from "../../components/feed/UserPost";


const ProfilePage = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior="padding"
        className="flex-1 p-2 bg-primary-light"
      >
        <UserPost></UserPost>
        <UserPost></UserPost>
        <UserPost></UserPost>
        <Link className="items-end" href={"/"}>
          Back to the login screen
        </Link>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default ProfilePage;
