import { View, Text, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const UserPost = () => {
  return (
    <View className="border-b border-bg-color-default mb-2">
      <View className="flex-row justify-between">
        <View className="flex-row items-end">
          <Image
            source={require("../../assets/profilepic.jpg")}
            className="w-10 h-10 rounded-full border-2 border-bg-color-default"
          />
          <View className=" ml-2">
            <Text className="font-bold text-bg-color-default">USERNAME</Text>
            <Text className="italic font-light text-xs text-bg-color-default">
              2 Hours ago
            </Text>
          </View>
        </View>
        <Ionicons
          name="close-circle"
          size={20}
          color={"#005885"}
          className="p-2"
        ></Ionicons>
      </View>
      <View>
        <Text className="pl-4 pt-2 pr-2 text-bg-color-default leading-1">
          Random post data by person here that I want to take up a few lines
          just to get the ball rolling here, thanks much k bye.
        </Text>
        <View className="flex-row justify-between my-2 px-4">
          <View className="flex-row items-center space-x-1">
            <Ionicons
              name="chatbox"
              size={14}
              className="mt-1 pl-4 Ionicons-bg-color-default"
            />
            <Text>Comment</Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <Ionicons
              name="flame"
              size={14}
              className="mt-1 pl-4 Ionicons-bg-color-default"
            />
            <Text>Like</Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <Ionicons
              name="repeat"
              size={14}
              className="mt-1 pl-4 Ionicons-bg-color-default"
            />
            <Text>Follow</Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <Ionicons
              name="share-social"
              size={14}
              className="mt-1 pl-4 Ionicons-bg-color-default"
            />
            <Text>Share</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserPost