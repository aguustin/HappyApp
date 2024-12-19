import { View, Text, Image, StyleSheet, TextInput, TouchableHighlight } from "react-native"

const Homepage = () => {

    const Formulario = () => {
        return(
            <>
                <View>
                    <Text>Nombre:</Text>
                    <TextInput name="nombre"></TextInput>
                </View>
            </>
        )
    }
    
    return(
        <>
            <View style={styles.listContainer}>
                <View style={styles.lists}>
                    <Image source={require('../../assets/products.png')}  alt=""></Image>
                    <View style={[styles.countContainer, styles.mgTopStyle]}>
                        <TouchableHighlight><Text style={styles.fontSizeStyle}>-</Text></TouchableHighlight>
                        <Text style={styles.fontSizeStyle}>0</Text>
                        <TouchableHighlight><Text style={styles.fontSizeStyle}>+</Text></TouchableHighlight>
                    </View>
                    <TouchableHighlight style={[styles.agregarButton , styles.mgTopStyle]}><Text style={[styles.fontSizeStyleSecondary, styles.fontColorSecondary]}>Agregar</Text></TouchableHighlight>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    listContainer:{
        height:'auto',
        width:'100%',
        marginTop:10,
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'space-between',
        padding:8,
        paddingHorizontal: 12
    },
    lists:{
        backgroundColor:'rgb(252, 252, 252)',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems:'center',
        padding:8,
        marginTop: 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    countContainer:{
        flex:1,
        flexDirection: 'row',
        justifyContent:'space-between',
        width:110
    },
    fontSizeStyle:{
        fontSize:24
    },
    fontSizeStyleSecondary:{
        fontSize:20
    },
    mgTopStyle:{
        marginTop: 15
    },
    agregarButton:{
        backgroundColor:'#FEAA4E',
        padding: 6,
        borderRadius: 6, 
    },
    fontColorSecondary:{
        color:'white'
    }
})

export default Homepage