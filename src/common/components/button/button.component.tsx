import { buttonStyles } from '@app/common/components/button/button.styles';
import React, { FC } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

interface ButtonProps {
  label: string;
}

export const Button: FC<ButtonProps> = ({ label }) => {
  return (
    <TouchableOpacity>
      <View style={buttonStyles.buttonView}>
        <Text style={buttonStyles.buttonText}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};
