import { View, TextInput } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../../app/constants/colors';


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
    <View className={`flex-row items-center border-b pb-1 border-primary-default m-2`}>
          <Ionicons
            style={{ marginLeft: 4 }}
            name={IoniconName}
            size={16}
            color={colors.primary.default}
          />
          <TextInput
            className={`flex-1 mx-2 text-prborder-primary-default`}
            selectionColor={color}
            placeholder={placeHolder}
            placeholderTextColor={colors.secondary.light}
            textContentType={textContentType}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            autoCorrect={false}
          ></TextInput>
        </View>
  )
}

export default FormInput