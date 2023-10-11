import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import axios from 'axios';

import { height, width } from '../../defaultSize';
import { containsKey, removeData, storeData } from '../../AsyncService';

export const getBookData = async (text: string) => {
  const clientId = `qO6ng3fS5wE3VrhWt4LS`
  const clientSecret = `aujAPmB3IG`
  const search = await axios.get('https://openapi.naver.com/v1/search/book.json', {
    params: { query: text },
    headers: {
      "X-Naver-Client-Id": clientId,
      "X-Naver-Client-Secret": clientSecret,
    },
  }).then((response) => {
    return response.data.items;
  }).catch((error) => {
    console.log(error);
    return error;
  })
  return search;
}

const Search2 = ({ route, navigation }: any) => {
  const { text } = route.params;
  const [text1, setText] = useState(text);
  const [list, setList] = useState<any>([]);

  const [loadData, setLoadData] = useState<any>([]);
  useEffect(() => {
    const load = async () => {
      setLoadData(await getBookData(text));
    }
    load();
  }, [text]);

  const [loading, setIsLoading] = useState(false);

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
    image: string,
    author: string,
    publisher: string,
  };

  const Item = ({ title, image, author, publisher }: ItemProps) => (
    <View style={styles.item}>
      <View>
        <Image style={{ width: 100, height: 100, borderRadius: 8 }} source={{ uri: image ? image : "https://img.freepik.com/premium-vector/system-software-update-upgrade-concept-loading-process-screen-vector-illustration_175838-2182.jpg?w=2000" }} />
      </View>
      <View style={{
        width: "70%"
      }}>
        <Text style={styles.name} numberOfLines={1}
          ellipsizeMode='tail'>{title}</Text>
        <Text style={styles.element}>{author}</Text>
        <Text style={styles.company}>{publisher}</Text>
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
    <SafeAreaView style={styles.container}>
      <View style={{
        marginTop: height * 24,
        flexDirection: "row",
        gap: width * 10,
        alignItems: "center",
        justifyContent: "center"
      }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/arrowBack.png')} width={width * 15} height={width * 14.2} />
        </TouchableOpacity>
        <TextInput style={{
          width: width * 304,
          height: height * 40,
          borderRadius: 8,
          backgroundColor: "#E2E2E2",
          paddingLeft: width * 15
        }}
          value={text1}
          onChangeText={setText}
          onSubmitEditing={async () => {
            if (text1 != '') {
              const newArr: any = list.concat([text1]);
              setList(newArr);
              if (await containsKey('recentSearch')) {
                await removeData('recentSearch')
              }
              await storeData('recentSearch', list)
            }
            navigation.navigate("Search2", { text: text1 });
          }}
          inputMode='text' />
      </View>
      <FlatList
        data={loadData}
        renderItem={({ item }) =>
          <TouchableOpacity onPress={() => navigation.navigate("BookRecord", {
            title: item.title,
            image: item.image,
            publisher: item.publisher,
            author: item.author,
          })}>
            <Item title={item.title} image={item.image} publisher={item.publisher} author={item.author} />
          </TouchableOpacity>}
        onEndReached={onEndReached}
        onEndReachedThreshold={0}
        ListFooterComponent={<LoadingFooter loading={loading} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: height * 22
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
    fontSize: 14,
    fontWeight: "bold"
  },
  element: {
    fontSize: 10,
    paddingBottom: 5,
    paddingTop: 5,
  },
  company: {
    fontSize: 12,
    fontWeight: "bold"
  },
});

export default Search2;