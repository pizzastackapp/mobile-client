import { roundButtonStyles } from '@app/common/components/round-button/round-button.styles';
import React, { FC, PropsWithChildren } from 'react';
import { TouchableOpacity, View, ViewStyle } from 'react-native';

enum RoundButtonSize {
  SMALL = 'SMALL',
  LARGE = 'LARGE',
}

interface RoundButtonProps {
  buttonStyle?: ViewStyle;
  size?: keyof typeof RoundButtonSize;
}

export const RoundButton: FC<PropsWithChildren<RoundButtonProps>> = ({
  children,
  buttonStyle,
  size = RoundButtonSize.SMALL,
}) => {
  const buttonViewStyles: ViewStyle[] = [roundButtonStyles.button];
  if (size === RoundButtonSize.LARGE) {
    buttonViewStyles.push(roundButtonStyles.largeButton);
  }

  return (
    <TouchableOpacity style={buttonStyle}>
      <View style={buttonViewStyles}>{children}</View>
    </TouchableOpacity>
  );
};
