import React, { useEffect, useState } from 'react';
import { Alert, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

import { height, width } from '../../defaultSize';
import { containsKey, getData, removeData, storeData } from '../../AsyncService';

const today = new Date();
const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Saturday'];
const week2 = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
const month = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const formatteddDate = `${week[today.getDay()]}, ${month[today.getMonth()]} ${today.getDate()} ${today.getFullYear()}`;
const formatteddDate2 = `${today.getFullYear()}.${today.getMonth() + 1 > 9 ? today.getMonth() + 1 : '0' + today.getMonth() + 1}.${today.getDate() > 9 ? today.getDate() : '0' + today.getDate()}. ${week2[today.getDay()]}`;

const BookRecord = ({ navigation, route }: any) => {
  const { title, image, author, publisher } = route.params;

  const [selectedButton, setSelected] = useState({
    index: '',
    status: false,
  });

  const [text, setText] = useState('나의 한줄평 적기');
  const [list, setList] = useState<any>([]);

  const bookRecordList = async () => {
    if (await containsKey('bookRecordList')) {
      setList(await getData('bookRecordList'));
      await removeData('bookRecordList');
    }
    const newArr: any = list.concat([{
      feeling: selectedButton.index,
      writtenText: text,
      title: title,
      image: image,
      author: author,
      publisher: publisher,
      date: formatteddDate2,
    }]);
    await storeData('bookRecordList', newArr);
  }

  const BookItem = () => (
    <View style={styles.item}>
      <View>
        <Image style={{ width: 100, height: 100, borderRadius: 8 }} source={{ uri: image ? image : "https://img.freepik.com/premium-vector/system-software-update-upgrade-concept-loading-process-screen-vector-illustration_175838-2182.jpg?w=2000" }} />
      </View>
      <View style={{
        width: "70%",
      }}>
        <Text style={styles.name}
          numberOfLines={1}
          ellipsizeMode='tail'>{title}</Text>
        <Text style={styles.element}>{author}</Text>
        <Text style={styles.company}>{publisher}</Text>
      </View>
    </View>
  );

  return (
    <View style={{
      paddingHorizontal: width * 23,
    }}>
      <View style={{
        marginTop: height * 34,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: height * 30,
        justifyContent: "center",
      }}>
        <TouchableOpacity style={{
          position: "absolute",
          left: 0,
        }} onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/arrowBack.png')} width={width * 15} height={width * 14.2} />
        </TouchableOpacity>
        <Text style={{
          fontSize: width * 18,
          fontStyle: "normal",
          fontWeight: "700",
          textAlign: "center",
        }}>
          Record
        </Text>
        <TouchableOpacity style={{
          position: "absolute",
          right: 0,
        }}
          onPress={selectedButton.status ? async () => {
            bookRecordList();
            navigation.navigate('BookList', {
              data: await getData('bookRecordList'),
            });
          } : () => Alert.alert("기분을 입력해주세요!")}>
          <Image source={selectedButton.status ? require('../../assets/OkAfter.png') : require('../../assets/OkBefore.png')} width={width * 26} height={width * 26} />
        </TouchableOpacity>
      </View>
      <BookItem />
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
          <TouchableOpacity onPress={() => setSelected({
            index: 'button1',
            status: true,
          })}>
            <Image source={selectedButton.index === 'button1' ? require('../../assets/happy.png') : require('../../assets/happyNon.png')} width={width * 30} height={width * 30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelected({
            index: 'button2',
            status: true,
          })}>
            <Image source={selectedButton.index === 'button2' ? require('../../assets/neutral.png') : require('../../assets/neutralNon.png')} width={width * 30} height={width * 30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelected({
            index: 'button3',
            status: true,
          })}>
            <Image source={selectedButton.index === 'button3' ? require('../../assets/sad.png') : require('../../assets/sadNon.png')} width={width * 30} height={width * 30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelected({
            index: 'button4',
            status: true,
          })}>
            <Image source={selectedButton.index === 'button4' ? require('../../assets/angry.png') : require('../../assets/angryNon.png')} width={width * 30} height={width * 30} />
          </TouchableOpacity>
        </View>
      </View>
      <TextInput style={{
        width: width * 329,
        backgroundColor: "#F7F9FA",
        justifyContent: "center",
        padding: width * 25,
        paddingTop: width * 25,
        borderRadius: width * 15,
      }}
        value={text}
        onChangeText={setText}
        inputMode='text'
        multiline={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: height * 22
  },
  item: {
    backgroundColor: '#fff',
    paddingBottom: width * 20,
    flexDirection: 'row',
    borderBottomColor: "#D9D9D9",
    borderBottomWidth: 1,
    gap: width * 15,
    marginBottom: height * 30,
  },
  name: {
    fontSize: width * 14,
    fontWeight: "bold",
  },
  element: {
    fontSize: width * 10,
    paddingBottom: width * 5,
    paddingTop: width * 5,
  },
  company: {
    fontSize: width * 12,
    fontWeight: "bold"
  },
});

export default BookRecord;