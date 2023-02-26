import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import Story from '../components/home/Story'

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container} >
            <Header />
            <Story />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1
    }
})

export default HomeScreen
