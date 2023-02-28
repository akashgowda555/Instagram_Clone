import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';
import Images from "app/images/images";


export default function Post({post}) {
  return (
    <View style={{marginBottom:30}}>
    <PostHeader post={post}/>
    <PostImage post={post}/>
    <View style={{marginHorizontal: 10, marginTop:10}}>
    <PostFooter/>
    <Likes post={post}/>
    <Caption post={post} />
    <CommentSection post={post} />
    <Comments post={post} />
    </View>
    </View>
  )
}

const PostHeader = ({post}) => (
  <View style={styles.container}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
   <Image 
   source={{uri: post.profile_picture}}
   style={styles.postHeaderImg}/>
   <Text style={{color: "white", marginLeft: 5, fontWeight: 700}}>{post.user}</Text>
   </View>
   <Image source={Images.more}
   style={styles.moreImg}/>
  </View>
)

const PostImage = ({post}) => (
  <View style={{ width:"100%", height: 450}}>
  <Image 
    source={{uri: post.imageUrl}}
    style={{height:"100%", resizeMode:"cover"}}
  />
    </View>
)

const PostFooter = () =>(
 
  <View style={{flexDirection: 'row'}}>
    <View style={styles.leftFooterIcons}>
     <Icon style={styles.footerIcons} source={Images.like} />
     <Icon style={styles.footerIcons} source={Images.comment} />
     <Icon style={styles.footerIcons} source={Images.directMessage} />
    </View>
    <View style={{flex:1, alignItems: 'flex-end'}}>
      <Icon style={styles.footerIcons} source={Images.bookmark}/>
    </View>
  </View>
)

const Icon = ({style, source}) =>(
  <TouchableOpacity>
  <Image style={style} source={source}/>
  </TouchableOpacity>
)

const Likes = ({post}) => (
  <View style={{flexDirection:'row',marginTop: 4}}>
  <Text style={{color:"white", fontWeight: '600'}}>{post.likes.toLocaleString("en")} likes</Text>
  </View>
)

const Caption = ({post}) => (
  <View style={{marginTop:5}}>
  <Text style={{color:'white'}}>
    <Text style={{fontWeight: 600}}>{post.user}</Text>
    <Text>{" "}{post.caption}</Text>
  </Text>
  </View>
)

const CommentSection = ({post}) => (
<View style={{marginTop: 5}}>
  {post.comments.length && (
    <Text style={{color:"gray"}}>
    View {post.comments.length > 1 ? "all" : ""}{" "}
    {post.comments.length}{" "}
    {post.comments.length > 1 ? "comments" : "comment"}</Text>
  )}
</View>) 

const Comments = ({post}) => (
  <>
  {
    post.comments.map((comment,index) => (
      <View style={{flexDirection:'row', marginTop: 5}} key={index}>
        <Text style={{color: "white", fontWeight: 600}}>
          {comment.user}
        </Text>
        <Text style={{color: "white"}}>
         {' '}{comment.comment}
        </Text>
      </View>
    ))
  }</>
)
const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    margin: 5
  },
  postHeaderImg: {
    width: 35,
    height: 35,
    borderRadius: 50,
    // borderWidth: 1.6,
    // borderColor: "#ff8501",
    marginLeft: 3
  },
  moreImg: {
    width:16.5,
    height:10
  },
  footerIcons: {
    height: 30,
    width: 30
  },
  leftFooterIcons:{
    flexDirection:'row',
    width:"32%",
    justifyContent:'space-between'
  }
})