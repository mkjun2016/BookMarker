import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { height, width } from '../../../defaultSize';

import LinearGradient from 'react-native-linear-gradient';

const SetInterest = ({ navigation }: any) => {
  const [chosenBtn, setChosen] = useState<any>([]);

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
        <Image source={require('../../../assets/status1.png')} width={width * 161} height={width * 6} />
      </View>
      <LinearGradient colors={["#999999", "#69696900"]} style={{
        flex: 1,
        borderTopRightRadius: width * 30,
        borderTopLeftRadius: width * 30,
        paddingHorizontal: width * 26,
      }}>
        <View style={{
          marginTop: height * 37,
          gap: height * 6,
          marginBottom: height * 31,
        }}>
          <Text style={{
            fontSize: width * 25,
            fontStyle: "normal",
            fontWeight: "700",
            textAlign: "center",
            color: "#FFFFFF",
          }}>
            관심있는 장르는?
          </Text>
          <Text style={{
            fontSize: width * 13,
            fontStyle: "normal",
            fontWeight: "600",
            textAlign: "center",
            color: "#FFFFFF",
          }}>
            *중복선택 혹은 미선택 가능
          </Text>
        </View>
        <View style={{
          gap: width * 23,
          marginBottom: height * 48,
        }}>
          <View style={{
            flexDirection: "row",
            gap: width * 23,
          }}>
            <TouchableOpacity>
              <Image source={require('../../../assets/btn1_1.png')} width={width * 150} height={width * 150} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../../assets/btn1_2.png')} width={width * 150} height={width * 150} />
            </TouchableOpacity>
          </View>
          <View style={{
            flexDirection: "row",
            gap: width * 23,
          }}>
            <TouchableOpacity>
              <Image source={require('../../../assets/btn1_3.png')} width={width * 150} height={width * 150} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../../assets/btn1_4.png')} width={width * 150} height={width * 150} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{
          alignItems: "center",
        }}>
          <TouchableOpacity onPress={() => navigation.navigate("SetInterest2", {
            chosenBtn: []
          })}>
            <Image source={require('../../../assets/btn_next.png')} width={width * 226} height={width * 41} />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  )
}

export default SetInterest;