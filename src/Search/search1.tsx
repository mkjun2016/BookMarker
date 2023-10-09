import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { height, width } from '../../defaultSize';
import { containsKey, getAllKeys, getData, removeData, storeData } from '../../AsyncService';

const Search1 = ({ navigation }: any) => {
  const [text, setText] = useState('책 이름 검색');
  const [list, setList] = useState<any>([]);

  useEffect(() => {
    async function listCheck() {
      if (await containsKey('recentSearch')) {
        setList(await getData('recentSearch'));
      }
    }
    listCheck();
  }, []);

  return (
    <SafeAreaView style={{
      marginHorizontal: width * 23
    }}>
      <View style={{
        marginTop: height * 24,
        flexDirection: "row",
        gap: width * 10,
        alignItems: "center",
        justifyContent: "center"
      }}>
        <TouchableOpacity>
          <Image source={require('../../assets/arrowBack.png')} width={width * 15} height={width * 14.2} />
        </TouchableOpacity>
        <TextInput style={{
          width: width * 304,
          height: height * 40,
          borderRadius: 8,
          backgroundColor: "#E2E2E2",
          paddingLeft: width * 15
        }}
          value={text}
          onChangeText={setText}
          onPressIn={() => setText('')}
          onSubmitEditing={async () => {
            if (text != '') {
              const newArr: any = list.concat([text]);
              setList(newArr);
              if (await containsKey('recentSearch')) {
                await removeData('recentSearch')
              }
              await storeData('recentSearch', list)
            }
            navigation.navigate("Search2", { text: text });
            setText('책 이름 검색')
          }}
          inputMode='text' />
      </View>
      <View style={{
        marginTop: height * 22,
        gap: height * 11,
      }}>
        <Text style={{
          fontSize: width * 12,
          fontStyle: "normal",
          fontWeight: "700",
        }}>
          실시간 인기 책
        </Text>
        <View style={{
          backgroundColor: "red",
          height: height * 20,
        }}>
        </View>
      </View>
      <View style={{
        marginTop: height * 22,
      }}>
        <Text style={{
          fontSize: width * 12,
          fontStyle: "normal",
          fontWeight: "700",
        }}>
          최근 검색
        </Text>
        <View style={{
          width: width * 182,
          height: height * 1,
          backgroundColor: "#D9D9D9",
          marginTop: height * 9,
          marginBottom: height * 22,
        }} />
        <FlatList
          data={list}
          renderItem={({ item }) =>
            <View style={{
              paddingBottom: width * 19,
              flexDirection: "row",
            }}>
              <TouchableOpacity>
                <Text style={{
                  fontSize: width * 12,
                  fontStyle: "normal",
                  fontWeight: "500",
                }}>
                  {item}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                position: "absolute",
                right: width * 9,
              }} onPress={() => {

              }}>
                <Image source={require('../../assets/X.png')} width={width * 8} height={width * 15} />
              </TouchableOpacity>
            </View>}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default Search1;