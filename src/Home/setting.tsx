import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, Text, View } from "react-native"

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import { height, width } from '../../defaultSize';

type ItemProps = {
  iconName: string,
  title: string,
};

const SettingButton = ({ iconName, title }: ItemProps) => {
  return (
    <View>
      <View style={{
        flexDirection: "row",
      }}>
        <MaterialCommunityIcons name={iconName} size={24} />
        <Text style={{
          fontSize: width * 15,
          fontStyle: "normal",
          fontWeight: "500",
          marginRight: width * 177,
          marginLeft: width * 10,
        }}>
          {title}
        </Text>
        <Image source={require('../../assets/arrowBack.png')} width={width * 15} height={width * 14.2} />
      </View>
      <View style={{
        width: width * 182,
        height: height * 1,
        backgroundColor: "#D9D9D9",
        marginTop: height * 9,
      }} />
    </View>
  );
}

const Settings = () => {
  return (
    <SafeAreaView style={{
      padding: width * 24,
    }}>
      <View style={{
        justifyContent: "center",
      }}>
        <Text style={{
          fontSize: width * 18,
          fontStyle: "normal",
          fontWeight: "700",
        }}>
          Settings
        </Text>
      </View>
      <View>
        <SettingButton iconName={'account'} title={'Account'} />
        <SettingButton iconName={'timer'} title={'Notifications'} />
        <SettingButton iconName={'lock'} title={'Privacy & Security'} />
        <SettingButton iconName={'headphones'} title={'Help & Support'} />
        <SettingButton iconName={'head-question'} title={'About'} />
      </View>
    </SafeAreaView>
  )
}

export default Settings;