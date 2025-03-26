import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { height, width } from '../../../defaultSize';

import LinearGradient from 'react-native-linear-gradient';
import { testTurbo } from './aiSuggest';

const SetInterest4 = ({ navigation, route }: any) => {
  const { chosenBtn } = route.params;
  const { chosenBtn_2 } = route.params;
  const { chosenBtn_3 } = route.params;

  const [answer, setAnswer] = useState<any>({
    answer: '',
  });
  const [finalResult, setFinal] = useState<any>('')

  const convert1 = () => {
    let result = "";
    if (chosenBtn.chosenBtn1) {
      result += ",장르소설"
    }
    if (chosenBtn.chosenBtn2) {
      result += ",에세이"
    }
    if (chosenBtn.chosenBtn3) {
      result += ",논픽션"
    }
    if (chosenBtn.chosenBtn4) {
      result += ",자기계발"
    }

    return result;
  }

  const convert2 = () => {
    let result = "";
    if (chosenBtn_2.chosenBtn1) {
      result += ",성공비법"
    }
    if (chosenBtn_2.chosenBtn2) {
      result += ",제테크"
    }
    if (chosenBtn_2.chosenBtn3) {
      result += ",심리학"
    }
    if (chosenBtn_2.chosenBtn4) {
      result += ",인간관계"
    }

    return result;
  }

  const convert3 = () => {
    let result = "";
    if (chosenBtn_3.chosenBtn1) {
      result += ",AI와테크"
    }
    if (chosenBtn_3.chosenBtn2) {
      result += ",경제경영"
    }
    if (chosenBtn_3.chosenBtn3) {
      result += ",따듯한영화"
    }
    if (chosenBtn_3.chosenBtn4) {
      result += ",호러영화"
    }

    return result;
  }

  const callAi = async () => {
    const result = convert1() + convert2() + convert3();
    console.log(result);
    if (answer.answer != '') {
      console.log(answer.answer.choices[0].message.content);
      setFinal(answer.answer.choices[0].message.content);
    } else {
      setAnswer({
        answer: await testTurbo(`${result} 와 관련된 책 10권을 json 으로 title, author, genre를 포함해서 딱 array 로만 정리해서 추천해줘. 다른 속성은 안돼. 예시를 들자면, 
    [{"title": "홍련", "author": "정유정", "genre": "장르소설"}] 처럼 정리해줘.`),
      });
    }
  }

  return (
    <View style={{
      flex: 1,
    }}>
      <View style={{
        marginTop: height * 34,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: height * 21,
        justifyContent: "center",
        marginHorizontal: width * 23,
      }}>
        <TouchableOpacity style={{
          position: "absolute",
          left: 0,
        }} onPress={() => navigation.goBack()}>
          <Image source={require('../../../assets/arrowBack.png')} width={width * 15} height={width * 14.2} />
        </TouchableOpacity>
        <Text style={{
          fontSize: width * 18,
          fontStyle: "normal",
          fontWeight: "700",
          textAlign: "center",
        }}>
          내 관심사 설정
        </Text>
      </View>
      <View style={{
        justifyContent: "center",
        marginBottom: height * 11,
        alignItems: "center",
      }}>
        <Image source={require('../../../assets/status4.png')} width={width * 161} height={width * 6} />
      </View>
      <LinearGradient colors={["#999999", "#69696900"]} style={{
        flex: 1,
        borderTopRightRadius: width * 30,
        borderTopLeftRadius: width * 30,
        paddingHorizontal: width * 26,
      }}>
        <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}>
          <TouchableOpacity onPress={() => {
            if (finalResult != '') {
              navigation.navigate("SuggestList", {
                finalResult: finalResult,
              })
            } else {
              callAi();
            }
          }}>
            <Text style={{
              fontSize: width * 25,
              fontStyle: "normal",
              fontWeight: "700",
              textAlign: "center",
              color: "#FFFFFF",
            }}>
              AI 기반으로
            </Text>
            <Text style={{
              fontSize: width * 25,
              fontStyle: "normal",
              fontWeight: "700",
              textAlign: "center",
              color: "#FFFFFF",
            }}>
              나의 관심 책 추천 받는중...
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  )
}

export default SetInterest4;