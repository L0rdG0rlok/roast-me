import { View, TextInput, Text, RootTagContext } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';


interface FormProps {
    IoniconName: React.ComponentProps<typeof Ionicons>['name']
    color?: string
    placeHolder: React.ComponentProps<typeof TextInput>['placeholder']
    textContentType: React.ComponentProps<typeof TextInput>['textContentType']
    keyboardType?: React.ComponentProps<typeof TextInput>['keyboardType']
    secureTextEntry?: React.ComponentProps<typeof TextInput>['secureTextEntry']
}

const FormInput = ({ IoniconName, color = "#ffb788", placeHolder, textContentType, keyboardType = 'default', secureTextEntry = false }: FormProps) => {
  return (
    <View className={`flex-row items-center border-b pb-1 border-[${color}] m-2`}>
          <Ionicons
            style={{ marginLeft: 4 }}
            name={IoniconName}
            size={16}
            color="#ffb788"
          />
          <TextInput
            className={`flex-1 mx-2 text-[${color}]`}
            selectionColor={color}
            placeholder={placeHolder}
            placeholderTextColor="#76A9D0"
            textContentType={textContentType}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            autoCorrect={false}
          ></TextInput>
        </View>
  )
}

export default FormInput