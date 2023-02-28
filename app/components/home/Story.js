import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { users } from "../../data/users";

export default function Story() {
    return (
        <View style={{ marginBottom: 13 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {users.map((user, index) => (
                  <TouchableOpacity key={index}><View  style={styles.container}>
                        <Image
                            style={styles.story}
                            source={{ url: user.image }}
                        /><Text style={styles.text}>{
                            user.user.length > 8 ? user.user.slice(0, 7).toLocaleLowerCase() + "..." : user.user.toLocaleLowerCase()
                        }</Text>
                    </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    story: {
        width: 65,
        height: 65,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "#ff8501",
        marginLeft: 16
    },
    text: {
        color: "white",
        marginTop: 3,
    }
})