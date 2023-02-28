import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import Story from '../components/home/Story'
import Post from '../components/home/Post'
import { POSTS } from '../data/posts'

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container} >
            <Header />
            <Story />
            <ScrollView showsVerticalScrollIndicator={false} >
            {POSTS.map((post,index) => (
                <Post post={post} key={index}/>
            ))}
            </ScrollView>
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
