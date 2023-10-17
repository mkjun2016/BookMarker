import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { height, width } from '../../../defaultSize';

const SuggestList = ({ navigation, route }: any) => {
  const { finalResult } = route.params;
  const [loading, setIsLoading] = useState(false);
  const final = JSON.parse(finalResult);

  const getMoreData = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }

  const onEndReached = () => {
    if (!loading) {
      getMoreData();
    }
  }

  type ItemProps = {
    title: string,
    author: string,
    genre: string,
  };

  const Item = ({ title, author, genre }: ItemProps) => (
    <View style={styles.item}>
      <View>
        <Image style={{ width: 100, height: 100, borderRadius: 8 }} source={{ uri: "https://img.freepik.com/premium-vector/system-software-update-upgrade-concept-loading-process-screen-vector-illustration_175838-2182.jpg?w=2000" }} />
      </View>
      <View style={{
        width: "70%"
      }}>
        <Text style={styles.name} numberOfLines={1}
          ellipsizeMode='tail'>{title}</Text>
        <Text style={styles.element}>{author}</Text>
        <View style={{
          width: width * 45,
          height: height * 17.3,
          backgroundColor: "#D9D9D9",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: width * 10,
          marginTop: height * 19,
        }}>
          <Text style={styles.company}>{genre}</Text>
        </View>
      </View>
    </View>
  );

  const LoadingFooter = ({ loading }: any) => {
    if (loading) {
      return (
        <View style={{ padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
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
          내 관심 기반 추천 책
        </Text>
      </View>
      <FlatList
        data={final}
        renderItem={({ item }) =>
          <TouchableOpacity>
            <Item title={item.title} author={item.author} genre={item.genre} />
          </TouchableOpacity>}
        onEndReached={onEndReached}
        onEndReachedThreshold={0}
        ListFooterComponent={<LoadingFooter loading={loading} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#fff',
    paddingBottom: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    gap: 15
  },
  name: {
    fontSize: width * 13,
    fontWeight: "bold"
  },
  element: {
    fontSize: width * 11,
    paddingBottom: 5,
    paddingTop: 5,
  },
  company: {
    fontSize: width * 9,
    fontWeight: "bold",
  },
});

export default SuggestList;