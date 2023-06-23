import { SafeAreaView, TextInput, View, TouchableOpacity, Text, Image } from 'react-native';
import { Link } from '@react-navigation/native';
import styles from './styles';

export default function ForgotPassPage() {
    return(
    <SafeAreaView style={styles.background}>
        <Image style={styles.logo} source={require('../../assets/imgs/movie-logo.png')}></Image>
        <View style={styles.viewInputs}>
            <TextInput placeholder="Usuário" style={styles.input}/>
            <TextInput placeholder="E-mail" style={styles.input}/>
        </View>
        <View style={styles.buttonsView}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginPage')}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
            <View style={styles.linksView}>
                <Link style={styles.link} to={{ screen: "LoginPage" }} >Voltar ao Login</Link>
            </View>
        </View>
    </SafeAreaView>
    )
}
