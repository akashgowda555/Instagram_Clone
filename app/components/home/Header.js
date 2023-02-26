import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Images from "app/images/images"

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity><Image
                source={Images.Instagram_logo}
                style={styles.logo}
            />
            </TouchableOpacity>
            <View style={styles.iconsContainer}>
                <TouchableOpacity><Image source={Images.add} style={styles.icons} /></TouchableOpacity>
                <TouchableOpacity><Image source={Images.activity} style={styles.icons} /></TouchableOpacity>
                <TouchableOpacity>
                    <View>
                        <Image source={Images.message} style={styles.icons} />
                        <View style={styles.popup}><Text style={{ color: "white" }}>11</Text></View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        marginTop: 3,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    logo: {
        width: 100,
        height: 70,
        resizeMode: "contain"
    }, iconsContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    icons: {
        width: 30,
        height: 30,
        resizeMode: "contain",
        marginRight: 2,
        marginLeft: 14,
    },
    popup: {
        backgroundColor: "red",
        position: "absolute",
        width: 20,
        height: 20,
        borderRadius: 25,
        alignItems: 'center',
        bottom: 17,
        left: 25,
        zIndex: 100
    }
})