import React, { Component } from 'react';
import {Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import BasicButton from './button';


class SignIn extends Component {
    state = {
        login: '',
        password: '',
        isPasswordInvalid: true,
        isNameInvalid: true,
        canSubmit: false
    };

    /*
    * Dodaj walidację hasła: musi mieć conajmniej 8 znaków
    * canSubmit moe przyjąc true dopiero kiedy hasło jest poprawne oraz login nie jest pusty
    */



    checkValidButton = ()=> {
            if (this.state.password.length > 7 && this.state.login != ''){
                return false;
            }
            return true;
    };

    render() {


        return (
            <KeyboardAvoidingView style={styles.container}  behavior="padding" enabled={Platform.OS === 'ios'}>
                <Text style={styles.title}> Zaloguj się do aplikacji</Text>
                {!this.state.isNameInvalid
                && <Text style={styles.invalid}>Login jest nieprawidłowy</Text>}
                <TextInput
                    style={styles.inputContainer}
                    placeholder='Login'
                    value={this.state.login}
                    returnKeyType='next'
                    onChangeText={(value) => {this.setState({login: value})}}
                />
                <TextInput
                    style={[styles.inputContainer]}
                    secureTextEntry
                    placeholder='Password'
                    value={this.state.password}
                    returnKeyType='done'
                    onChangeText={(value) => {this.setState({password: value})}}
                />
                {/*{!this.state.isPasswordInvalid*/}
                {/*&& <Text style={styles.invalid}>Hasło jest za krótkie</Text>}*/}
                <BasicButton
                    title="Login"
                    style={styles.loginButton}
                    disabled={this.checkValidButton()}
                    onPress={()=>this.props.navigation.push('Waterlevel')}
                />
            </KeyboardAvoidingView>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 32,
        justifyContent: 'center'
    },
    loginButton: {
        marginTop: 16,
        backgroundColor: '#4E00B1'
    },
    inputContainer: {
        margin: 8,
        paddingHorizontal: 8,
        paddingVertical: 16,
        fontSize: 20
    },
    invalid: {
        color: 'red'
    },
    title: {
        fontSize: 32,
        fontWeight: '600',
        textAlign: 'center'
    }
});

export default SignIn;
