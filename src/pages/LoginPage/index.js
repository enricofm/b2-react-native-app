import { SafeAreaView, TextInput, View, TouchableOpacity, Text, Image } from 'react-native';
import { Link } from '@react-navigation/native';
import styles from './styles';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';

export default function LoginPage() {
    
    const { signIn } = useContext(AuthContext)
    
    return(
        <SafeAreaView style={styles.background}>
            <Image style={styles.logo} source={require('../../assets/imgs/movie-logo.png')}></Image>
            <View style={styles.viewInputs}>
                <TextInput placeholder="Usuário" style={styles.input}/>
                <TextInput placeholder="Senha" secureTextEntry="true" style={styles.input}/>
            </View>
            <View style={styles.buttonsView}>
                <TouchableOpacity style={styles.button} onPress={() => signIn()}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <View style={styles.linksView}>
                    <Link style={styles.link} to={{ screen: "RegisterPage" }} >Registre-se</Link>
                    <Link style={styles.link} to={{ screen: "ForgotPassPage" }} >Esqueceu a senha?</Link>
                </View>
            </View>
        </SafeAreaView>
    )
}