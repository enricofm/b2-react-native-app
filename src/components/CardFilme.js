import { Link } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const baseURL = "https://api.otaviolube.com"

const MAX_HEIGHT = Dimensions.get('window').height*0.7
const MAX_WIDTH = Dimensions.get('window').width*0.9

export default function CardFilme({ filme }){
    return(
        <View style={styles.card}>
            <View style={styles.viewImage}> 
                <Image style={styles.poster} source={{
                uri: baseURL + filme.poster.data.attributes.url
                }} />
            </View>
            <View style={styles.viewInfo}>
                <Text style={styles.title}>{filme.titulo}</Text>
                <Text style={styles.synopsis}>{filme.sinopse.length > 200 ? 
                filme.sinopse.substring(0, 200) + "..." : filme.sinopse}</Text>
                <Link to={{ screen: "MovieDetailsPage", params: {filme: filme}}} style={styles.link}>Saiba Mais...</Link>
                <View style={styles.viewButton}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>ALUGAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderColor: '#567',
        borderWidth: 1,
        flexDirection: 'column',
        margin: 15,
        padding: 15,
        borderRadius: 10,
        maxHeight: MAX_HEIGHT,
        maxWidth: MAX_WIDTH,
    },
    viewImage: {
        alignItems: 'center',
        height: '50%',
    },
    poster: {
        height: '100%',
        aspectRatio: 2/3,
        resizeMode: 'cover',
        borderRadius: 4,
    },
    viewInfo: {
        alignItems: 'center',
        height: '50%',
        justifyContent: 'space-between',
        paddingTop: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
        color: '#fff',
    },
    synopsis: {
        fontSize: 16,
        color: '#9ab',
        overflow: 'hidden',
        textAlign: 'justify',
    },
    viewButton: {
        width: '60%',
        paddingTop: 10,
    },
    button: {
        height: 45,
        width: '100%',
        borderRadius: 4,
        backgroundColor: '#00e054',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '500',
    },
    link: {
        color: '#9ab',
        textDecorationLine: 'underline',
    }
})