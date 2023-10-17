import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { height, width } from '../../../defaultSize';

import LinearGradient from 'react-native-linear-gradient';

const SetInterest4 = ({ navigation }: any) => {
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
        </View>
      </LinearGradient>
    </View>
  )
}

export default SetInterest4;