import React from 'react';
import { Text, TouchableOpacity, Platform } from 'react-native';


const Button = ({ onPress,  children, customStyle , disabled, customTextStyle}) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress}
      style={[{
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 5,
     }, customStyle,
     (disabled) ? styles.buttonDisabled: null]}
     disabled={disabled}
     >
      <Text style={[textStyle, customTextStyle]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    paddingTop:10,
    paddingBottom:10,
  },
  buttonDisabled: {
    backgroundColor: 'lightgrey',
  }
};

export { Button };
