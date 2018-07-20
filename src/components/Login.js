import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Platform, StyleSheet, Text, View,
    Dimensions,Button,Alert,
   TouchableOpacity } from 'react-native';
import {CardSection, Input} from './common';
//import {Input} from './common/Input';
import { Actions } from 'react-native-router-flux';
import {Spinner} from './common';
import EStyleSheet from 'react-native-extended-stylesheet';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { emailChanged, passwordChanged, loginUser} from '../actions';
const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;

class Login extends Component{
  componentDidMount() {
    this.load();
  }

  load() {

  }
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text){
    this.props.passwordChanged(text);
  }

  onFaceBookLogin() {

  }

  onGoogleLogin() {

  }

   onEmailLogin() {
     
    // Alert.alert("Email");
    const { email, password } = this.props;
   // Alert.alert("Email :"+ email + " and password " + password );
    //if (email && password){
     this.props.loginUser({ email, password });
    //}
  }

  renderLoginButton() {
    
        if (this.props.loading) {
          return <Spinner size="large" />;
        }else {
            return(
            <Button
            onPress={this.onEmailLogin.bind(this)}
            title="Login"
            color="#3B5998"/>
          )
      }
  }

  renderGooglePlus() {
    return(
      <TouchableOpacity >
          <Button
          onPress={() => this.onGoogleLogin.bind(this)}
          title="Google"
          color="#d34836"/>
       </TouchableOpacity>
    )
  }

  renderFacebook() {
    return(
      <TouchableOpacity >
          <Button
          onPress={() => this.onFaceBookLogin.bind(this)}
          title="Facebook"
          color="#3B5998"/>
       </TouchableOpacity>
    )
  }


   renderSignUpView() {
    return(
    <TouchableOpacity onPress={() => Actions.signUp()} style={{alignItems: 'center',justifyContent: 'center'}}>
          <Text style={{fontSize:14, color: "#000000", marginLeft:6, marginTop:10}}>
            SignUp
          </Text>
     </TouchableOpacity>
    )
  }

  render() {
    return (
      	<KeyboardAwareScrollView contentContainerStyle={styles.ContainerStyle} keyboardShouldPersistTaps='handled'>
                    <View style={styles.inner_containerStyle}>
                    <View style={{flexDirection:'row'}}>
                      <View style={styles.buttonContainer}>
                        {this.renderFacebook()}
                      </View>
                      <View style={styles.buttonContainer}>
                        {this.renderGooglePlus()}
                      </View>
                    </View>  
                    <View style={{height:40}}/>
                    <CardSection>
                      <Input
                          placeholder=" Email"
                          onChangeText={this.onEmailChange.bind(this)}
                          value={this.props.email}
                          autoCapitalize="none"
                      />
                    </CardSection>
                    <CardSection>
                        <Input
                            placeholder=" Password"
                            onChangeText={this.onPasswordChange.bind(this)}
                            value={this.props.password}
                            secureTextEntry
                            autoCapitalize="none"
                        />
                    </CardSection>
                    <TouchableOpacity onPress={() => Actions.forgotPassword()} style={{alignItems: 'center',justifyContent: 'center'}}>
                      <Text style={{fontSize:14, color: "#c2c2c2", marginLeft:6, marginTop:10}}>Forgot your password? </Text>
                    </TouchableOpacity>
                    <View style={{marginTop:20, paddingLeft: 6,
                    paddingRight: 6,flexDirection:'column',justifyContent: 'space-between'}}>            
                    <View>  
                      {this.renderLoginButton() }       
                    </View>
                    <View style={{alignItems: 'center',justifyContent: 'center'}}>  
                      {this.renderSignUpView() }       
                    </View>  
                    <Text style={styles.errorTextStyle}>
                      {this.props.error}
                    </Text>    
                </View> 
            </View>
        </KeyboardAwareScrollView>
  );
  }
}

const styles = {
	ContainerStyle: {
    flex:1,
    backgroundColor: 'white',
  },
	inner_containerStyle : {
    flex:1,
    paddingLeft: 6,
    paddingRight: 6,
    justifyContent: 'center',
    
  }, 
  button_view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
	buttonContainer: {
    flex: 1,
    padding:10
  },
  errorTextStyle: {
    paddingTop:15,
    fontSize: 18,
    alignSelf: 'center',
    color: 'red'
  },
};


const mapStateToProps = (state) => {
  const { email, password, error, loading } = state.auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(Login);

//export default Login;
