import { View, Text, Image, StyleSheet, TextInput, TouchableHighlight, Easing } from "react-native"

const Navegacion = ({}) => {
    
    return(
        <View style={styles.nav}>
            <View style={styles.navContainer}>
                <TextInput style={styles.navBuscar} name="Buscar" placeholder="buscar"></TextInput>
                <TouchableHighlight style={styles.car} onPress={() => openNav()}><Image source={require('../../assets/car.png')}></Image></TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    nav:{
        width: '100%',
        backgroundColor:'whitesmoke',
        height: 100
    },
    navContainer:{
        flex: 1,
        flexDirection:'row',
        justifyContent:'center',
        margin:3,
        width: '100%',
        borderBottomWidt: 1,
        borderBottomColor: 'whitesmoke'
    },
    navBuscar:{
        position:'relative',
        top:40,
        height:50,
        width:'82%',
        paddingVertical:6,
        paddingHorizontal:6,
        borderRadius:7,
        backgroundColor:'white'
    },
    car:{
        position: 'relative',
        top: 50,
        marginLeft:6
    }
})

export default Navegacion  