import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {TextInput} from 'react-native';
// import ImageBoxUpload from '../components/ImageBoxUpload';
import {OpenLibrary} from '../components/imagePicker';
import Header from '../components/header';
import {PRIMARYCOLOR} from '../assets/colors';
import {useNavigation} from '@react-navigation/native';
import ImageBoxUpload from '../components/imageBoxUpload';
import BackHeader from '../components/backHeader';
import LoginButton from '../components/button';
import store from '../Redux/store';
import PostMethod from '../assets/Networkcalls/POST';

const PostIssue = () => {
  const navigation = useNavigation();
  const [authorName, setAuthorName] = useState('');
  const [authorPicUrl, setAuthorPicUrl] = useState('');
  const [image1, setimage1] = useState(null);
  const [image2, setimage2] = useState(null);
  const [image3, setimage3] = useState(null);
  const [imageLoader1, setImageLoader1] = useState(false);
  const [imageLoader2, setImageLoader2] = useState(false);
  const [imageLoader3, setImageLoader3] = useState(false);
  const [submitLoader, setSubmitLoader] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [userId, setUserId] = useState('');

  const info = {
    authorId: userId,
    title,
    description,
    authorName,
    // authorPicUrl,
    // issueimage1: image1,
    // issueimage2: image2,
    // issueimage3: image3,
  };
  const {_id}=store.getState().user
  console.log(store.getState())
  const onSubmit = async () => {
    
    // navigation.replace('MyIssuesBuyer')
    if (title.length > 1 || price.length > 1 ||description.length>1) {
      const response = await PostMethod(
        {
          WorkerProfession:"plumbing",
          quotedAmount:price,
          customerId:_id,
          text:description,
          name:title,
          // longitude:24.916621,
          // latitude:67.121604
          longitude:24.883789,
          latitude:67.083987
        },
        'task/addTask',
        
      );
 
      if (response.data) { 
        navigation.navigate('Home');
      } else {
        alert('Email and Password is not Valid');
      }
    }
    else{
      alert("Please Enter Correct Credentials")
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: PRIMARYCOLOR}}>
      <BackHeader title="Post your Issue" />

      <ScrollView
        style={{
          width: '100%',
          alignSelf: 'center',
          backgroundColor: '#fff',
          padding: '5%',
          marginTop: hp(8),
          borderTopLeftRadius: hp(4),
          borderTopRightRadius: hp(4),
        }}>
        <View style={{height: hp('2%')}}></View>
        <Text style={styles.normalHeading}>Name</Text>
        <View style={{height: hp('1%')}}></View>
        <TextInput
          placeholder="Enter Name"
          style={[styles.descriptionBox, {height: hp('6%')}]}
          value={title}
          placeholderTextColor={'LIGHTBLUE'}
          onChangeText={text => setTitle(text)}
        />
        <View style={{height: hp('2%')}}></View>
        <Text style={styles.normalHeading}>Price</Text>
        <View style={{height: hp('1%')}}></View>
        <TextInput
          placeholder="Enter Price"
          style={[styles.descriptionBox, {height: hp('6%')}]}
          value={price}
          placeholderTextColor={'LIGHTBLUE'}
          onChangeText={text => setPrice(text)}
        />

        <View style={{height: hp('2%')}}></View>
        <Text style={styles.normalHeading}>Desciption</Text>
        <View style={{height: hp('1%')}}></View>

        <TextInput
          placeholder="Enter Desciption"
          style={styles.descriptionBox}
          value={description}
          placeholderTextColor={'LIGHTBLUE'}
          onChangeText={text => setDescription(text)}
        />
        <View style={{height: hp('2%')}}></View>
        <Text style={styles.normalHeading}>Add Images</Text>

        <View style={{height: hp('2%')}}></View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
          }}>
          {/* <ImageBoxUpload
            onPress={() => {
              OpenLibrary().then(res => {
                setimage1(res.uri);
                // setimage1(result);
              });
            }}
            image={image1}
            isLoading={imageLoader1}
          />
          <View style={{width: '2%'}} />
          <ImageBoxUpload
            onPress={() => {
              OpenLibrary().then(res => {
                setimage2(res.uri);
              });
            }}
            image={image2}
            isLoading={imageLoader2}
          />
          <View style={{width: '2%'}} />
          <ImageBoxUpload
            onPress={() => {
              OpenLibrary().then(res => {
                setimage3(res.uri);
              });
            }}
            image={image3}
            isLoading={imageLoader3}
          /> */}
        </View>
        <View style={{height: hp('2%')}}></View>
            <LoginButton title="Submit" onPress={()=>onSubmit()} />
        <View style={{height: hp('4%')}}></View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '25%',
    height: hp('12%'),
    backgroundColor: 'grey',
    borderRadius: 10,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 22,

    fontFamily: 'Montserrat-Bold',
    color: PRIMARYCOLOR,
  },
  normalHeading: {
    fontSize: 18,

    fontFamily: 'Montserrat-SemiBold',
    color: PRIMARYCOLOR,
  },
  descriptionBox: {
    width: '100%',
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    borderWidth: 1,
    alignSelf: 'flex-start',
    textAlignVertical: 'top',
    color: PRIMARYCOLOR,
    borderColor: 'grey',
    paddingLeft: '2%',
    height: hp('15%'),
  },
});

export default PostIssue;
