import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { height, width } from '../../defaultSize';

const today = new Date();
const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Saturday'];
const month = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const formatteddDate = `${week[today.getDay()]}, ${month[today.getMonth()]} ${today.getDate()} ${today.getFullYear()}`;

const BookRecord = ({ navigation }: any) => {
  const [textExist, setExist] = useState(false);

  const [selectedButton, setSelected] = useState('');

  const [text, setText] = useState('나의 한줄평 적기');

  return (
    <View style={{
      paddingHorizontal: width * 23,
    }}>
      <View style={{
        marginTop: height * 34,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: height * 30,
      }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/arrowBack.png')} width={width * 15} height={width * 14.2} />
        </TouchableOpacity>
        <Text style={{
          fontSize: width * 18,
          fontStyle: "normal",
          fontWeight: "700",
          marginLeft: width * 118,
          marginRight: width * 107,
        }}>
          Record
        </Text>
        <TouchableOpacity>
          <Image source={textExist ? require('../../assets/OkAfter.png') : require('../../assets/OkBefore.png')} width={width * 26} height={width * 26} />
        </TouchableOpacity>
      </View>
      <View style={{
        height: height * 81,
        marginBottom: height * 18,
      }}>
      </View>
      <View style={{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: height * 18,
      }}>
        <Text style={{
          fontSize: width * 10,
          fontWeight: "500",
          fontFamily: "Inter",
          fontStyle: "normal",
        }}>
          {formatteddDate}
        </Text>
        <View style={{
          flexDirection: "row",
          gap: width * 10,
          position: "absolute",
          right: 0,
          alignItems: "center",
        }}>
          <Text style={{
            fontSize: width * 10,
            fontWeight: "500",
            fontFamily: "Inter",
            fontStyle: "normal",
            marginRight: width * 3,
          }}>
            기분
          </Text>
          <TouchableOpacity onPress={() => setSelected('button1')}>
            <Image source={selectedButton === 'button1' ? require('../../assets/happy.png') : require('../../assets/happyNon.png')} width={width * 30} height={width * 30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelected('button2')}>
            <Image source={selectedButton === 'button2' ? require('../../assets/neutral.png') : require('../../assets/neutralNon.png')} width={width * 30} height={width * 30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelected('button3')}>
            <Image source={selectedButton === 'button3' ? require('../../assets/sad.png') : require('../../assets/sadNon.png')} width={width * 30} height={width * 30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelected('button4')}>
            <Image source={selectedButton === 'button4' ? require('../../assets/angry.png') : require('../../assets/angryNon.png')} width={width * 30} height={width * 30} />
          </TouchableOpacity>
        </View>
      </View>
      <TextInput style={{
        width: width * 329,
        backgroundColor: "#F7F9FA",
        justifyContent: "center",
        padding: width * 25,
        borderRadius: width * 15,
      }}
        value={text}
        onChangeText={setText}
        onSubmitEditing={() => setExist(true)}
        inputMode='text' />
    </View>
  );
}

export default BookRecord;