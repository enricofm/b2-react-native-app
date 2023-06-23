import { View, Text, SafeAreaView } from 'react-native';
import styles from './styles';

export default function MovieDetailsPage({ route }) {
    
    const {filme} = route.params

    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.infoView}>
                <Text style={styles.pageTitle}>Detalhes do filme</Text>
                <Text style={styles.movieTitle}>{filme.titulo}</Text>
                <Text style={styles.movieSinopsys}>{filme.sinopse}</Text>
            </View>
        </SafeAreaView>
    )
}