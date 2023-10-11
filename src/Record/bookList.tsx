import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

import { height, width } from '../../defaultSize';

const BookList = ({ navigation, route }: any) => {
  const { data } = route.params;

  type ItemProps = {
    feeling: string,
    writtenText: string,
    title: string,
    image: string,
    author: string,
    publisher: string,
    date: string,
  };

  const feelingTracker = (index: string) => {
    if (index === 'button1') {
      return require('../../assets/Bighappy.png');
    } else if (index === 'button2') {
      return require('../../assets/Bigneutral.png');
    } else if (index === 'button3') {
      return require('../../assets/Bigsad.png');
    } else if (index === 'button4') {
      return require('../../assets/Bigangry.png');
    }
  }

  const BookRecord = ({ feeling, writtenText, title, image, author, publisher, date }: ItemProps) => {
    return (
      <View style={{
        paddingHorizontal: width * 16,
        paddingVertical: width * 17,
        marginBottom: height * 20,
        borderRadius: width * 10,
        backgroundColor: "#F1F1F1",
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: width * 2,
        gap: height * 15,
      }}>
        <View style={{
          flexDirection: "row",
        }}>
          <View style={{
            marginRight: width * 10,
          }}>
            <Image style={{ width: width * 70, height: width * 70, borderRadius: width * 5 }} source={{ uri: image ? image : "https://img.freepik.com/premium-vector/system-software-update-upgrade-concept-loading-process-screen-vector-illustration_175838-2182.jpg?w=2000" }} />
          </View>
          <View style={{
            flexDirection: "column",
            width: "35%"
          }}>
            <Text style={styles.name}
              numberOfLines={1}
              ellipsizeMode='tail'>{title}</Text>
            <Text style={styles.element}>{author}</Text>
            <Text style={styles.company}>{publisher}</Text>
          </View>
          <View style={{
            gap: height * 7,
          }}>
            <View style={{
              marginLeft: width * 39,
            }}>
              <Image source={feelingTracker(feeling)} width={width * 50} height={width * 50} />
            </View>
            <View style={{
              marginLeft: width * 19,
            }}>
              <Text style={{
                fontSize: width * 10,
                fontStyle: "normal",
                fontWeight: "500",
                color: "#8B8B8B",
              }}>
                {date}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={{
            fontSize: width * 11,
            fontWeight: "500"
          }}>
            {writtenText}
          </Text>
        </View>
      </View>
    )
  }

  return (
    <View style={{
      flex: 1,
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
        }} onPress={() => navigation.navigate("Search1")}>
          <Image source={require('../../assets/arrowBack.png')} width={width * 15} height={width * 14.2} />
        </TouchableOpacity>
        <Text style={{
          fontSize: width * 18,
          fontStyle: "normal",
          fontWeight: "600",
          textAlign: "center",
        }}>
          내 책장
        </Text>
        <TouchableOpacity style={{
          position: "absolute",
          right: 0,
        }}>
          <Image source={require('../../assets/BtnWrite.png')} width={width * 30} height={width * 30} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) =>
          <TouchableOpacity>
            <BookRecord feeling={item.feeling} writtenText={item.writtenText} title={item.title} image={item.image} author={item.author} publisher={item.publisher} date={item.date} />
          </TouchableOpacity>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: width * 11,
    fontWeight: "700",
  },
  element: {
    fontSize: width * 10,
    fontWeight: "500",
    paddingBottom: width * 6,
    paddingTop: width * 6,
  },
  company: {
    fontSize: width * 10,
    fontWeight: "600"
  },
});

export default BookList;