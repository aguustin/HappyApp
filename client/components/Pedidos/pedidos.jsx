import { View, Text, Image, StyleSheet, TouchableHighlight } from "react-native"

const Pedidos = () => {



    return(
        <>        
            <View style={styles.pedidosContainer}>
                <View style={styles.navegacionLado}>
                    <View style={styles. flexStyle}>
                        <Text>Pedidos</Text>
                        <TouchableHighlight><Text style={styles.textColor}>X</Text></TouchableHighlight>
                    </View>
                    <View style={[styles.productoCarro]}>
                        <View style={styles.flexStyle}>
                            <Image style={styles.productoImage} source={require('../../assets/products.png')}  alt=""></Image>
                            <Text style={styles.fontStylePrimary}>Galletas mana x 2 </Text>
                        </View>
                        <TouchableHighlight style={styles.agregarButton}><Text style={styles.fontStyleSecondary}>Sacar</Text></TouchableHighlight>
                    </View>
                    <View style={[ styles.productoCarro]}>
                        <View style={styles.flexStyle}>
                            <Image style={styles.productoImage} source={require('../../assets/products.png')}  alt=""></Image>
                            <Text style={styles.fontStylePrimary}>Galletas mana x 2</Text>
                        </View>
                        <TouchableHighlight style={styles.agregarButton}><Text style={styles.fontStyleSecondary}>Sacar</Text></TouchableHighlight>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    pedidosContainer:{
        position:'absolute',
        width:250,
        zIndex: 2,
        right:0,
        top:0,
        backgroundColor:'white',
    },
    productoCarro:{
        position:'relative',
        paddingLeft: 5,
        paddingRight:20,
        paddingVertical:10,
        borderBottomWidth:1,
        borderBottomColor:'whitesmoke'
    },
    productoImage:{
        margin:12
    },  
    fontStylePrimary:{
        fontSize:16,
        color:'black'
    },
    fontStyleSecondary:{
        fontSize:18,
        color:'white'
    },
    flexStyle:{
        paddingRight: 15,
        marginRight: 15,
        marginBottom:25,
        flexDirection: 'row',
        alignItems:'center'
    },
    agregarButton:{
        position:'absolute',
        backgroundColor:'#FEAA4E',
        width:50,
        bottom: 6,
        right:15,
        padding: 6,
        borderRadius: 6
    }
})

export default Pedidos