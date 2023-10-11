import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { height, width } from '../../defaultSize';

export const getBestSellers = async () => {
  const search = await axios.get('https://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=ttbbkjunn0031001&QueryType=BestSeller&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101')
    .then((response) => {
      console.log(JSON.stringify(response.data.item));
      return response.data.item;
    }).catch((error) => {
      console.log(error);
      return error;
    })
  return search;
}

const SuggestBook = () => {
  const [loadData, setLoadData] = useState<any>([]);
  useEffect(() => {
    const load = async () => {
      setLoadData(await getBestSellers());
    }
    load();
  }, []);

  return (
    <SafeAreaView style={{
      gap: height * 10,
      flex: 1,
      marginHorizontal: width * 15,
    }}>
      <TouchableOpacity onPress={() => {
        getBestSellers();
      }}>
        <Text>
          국내 베스트셀러 추천 TOP10
        </Text>
      </TouchableOpacity>
      <FlatList
        data={loadData}
        renderItem={({ item }) =>
          <View style={{
            marginBottom: height * 10,
            gap: height * 3,
            backgroundColor: "#F1F1F1",
            padding: width * 10,
            borderRadius: width * 5,
          }}>
            <Text style={{
              color: "red",
              fontWeight: "700",
              fontSize: width * 14
            }}>
              {item.bestRank}위
            </Text>
            <Image style={{ width: width * 100, height: width * 140, borderRadius: 8 }} source={{ uri: item.cover ? item.cover : "https://img.freepik.com/premium-vector/system-software-update-upgrade-concept-loading-process-screen-vector-illustration_175838-2182.jpg?w=2000" }} />
            <Text>
              {item.title}
            </Text>
            <Text>
              {item.author}
            </Text>
            <Text>
              {item.categoryName}
            </Text>
            <Text>
              {item.bestDuration ? item.bestDuration : "누적 순위 없음"}
            </Text>
            <Text>
              {item.pubDate}
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

export default SuggestBook;