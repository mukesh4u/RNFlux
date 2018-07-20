import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ value, label, onChangeText, placeholder, secureTextEntry, autoCapitalize }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>

      <TextInput
        label={label}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize={autoCapitalize}
        underlineColorAndroid='transparent'
        placeholderTextColor='rgb(200,200,200)'
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: 'rgb(47,62,78)',
    backgroundColor: '#ffffff',
    alignSelf: 'stretch',
    marginLeft: 5,
    marginRight: 5,
    fontSize: 14,
    flex: 1,

  },
  containerStyle: {
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#e6e9ee",
    height: 38,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  labelStyle:{
    placeholderTextColor:'rgb(47,62,78)'
  }
};

export { Input };
