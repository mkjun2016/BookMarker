import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native"

import { height, width } from '../../defaultSize';

type ItemProps = {
  iconName: any,
  title: string,
};

const SettingButton = ({ iconName, title }: ItemProps) => {
  return (
    <TouchableOpacity>
      <View>
        <View style={{
          flexDirection: "row",
        }}>
          <Image source={iconName} width={width * 15} height={width * 14.2} />
          <Text style={{
            fontSize: width * 15,
            fontStyle: "normal",
            fontWeight: "500",
            marginLeft: width * 10,
            alignSelf: "center",
          }}>
            {title}
          </Text>
          <Image source={require('../../assets/arrowRight.png')} width={width * 15} height={width * 14.2} style={{
            position: "absolute",
            right: width * 30,
            alignSelf: "center",
          }} />
        </View>
        <View style={{
          width: width * 310,
          height: height * 1,
          backgroundColor: "#D9D9D9",
          marginTop: height * 20,
          marginBottom: height * 20,
          alignSelf: "center"
        }} />
      </View>
    </TouchableOpacity>
  );
}

const Settings = ({ navigation }: any) => {
  return (
    <SafeAreaView style={{
      gap: height * 79,
    }}>
      <View style={{
        marginTop: height * 34,
        flexDirection: "row",
        gap: width * 112,
        alignItems: "center",
        paddingLeft: width * 23,
      }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/arrowBack.png')} width={width * 15} height={width * 14.2} />
        </TouchableOpacity>
        <Text style={{
          fontSize: width * 18,
          fontStyle: "normal",
          fontWeight: "700",
        }}>
          Settings
        </Text>
      </View>
      <View style={{
        padding: width * 24,
      }}>
        <SettingButton iconName={require('../../assets/Customer.png')} title={'Account'} />
        <SettingButton iconName={require('../../assets/Alarm.png')} title={'Notifications'} />
        <SettingButton iconName={require('../../assets/Password.png')} title={'Privacy & Security'} />
        <SettingButton iconName={require('../../assets/Headphones.png')} title={'Help & Support'} />
        <SettingButton iconName={require('../../assets/Info.png')} title={'About'} />
      </View>
    </SafeAreaView>
  )
}

export default Settings;