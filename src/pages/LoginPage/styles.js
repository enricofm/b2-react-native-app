import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#14181c',
    },
    viewInputs: {
        width: '70%',
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#9ab',
        color: '#567',
        padding: 10,
        marginTop: 15,
        borderBottomStartRadius: 4,
        borderBottomEndRadius: 4,
        fontSize: 17,
    },
    logo: {
        height: 170,
        width: 170,
        tintColor: '#567',
    },
    buttonsView: {
        width: '70%',
        flexDirection: 'column',
    },
    linksView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35,
        borderRadius: 10,
        backgroundColor: '#ff8000',
        paddingVertical: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    link: {
        marginTop: 20,
        color: '#9ab',
        textDecorationLine: 'underline',
    }
  })

export default styles;