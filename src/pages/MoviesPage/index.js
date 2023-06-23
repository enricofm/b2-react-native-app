import { useEffect, useState } from 'react';
import { ActivityIndicator , ScrollView, TouchableOpacity, SafeAreaView, View } from 'react-native';
import { Link } from '@react-navigation/native';
import styles from './styles';
import CardFilme from '../../components/CardFilme';

export default function MoviesPage(){
    let [filmes, setFilmes] = useState([])

    const baseURL = "https://api.otaviolube.com/api/filmes?populate=*"

    useEffect(function(){
        fetch(baseURL)
            .then(data => data.json())
            .then(objeto => { 
                setFilmes(objeto.data) 
            })
    }, [])
    
    return(
        <SafeAreaView style={styles.background}>
            {filmes.length > 0 ? <ScrollView horizontal>
            {
            filmes.map(filme =>
            <CardFilme filme={filme.attributes} key={filme.id}/>)
            }
            </ScrollView> : <ActivityIndicator size={'large'} color="#567"/>}
        </SafeAreaView>
    )
}
  