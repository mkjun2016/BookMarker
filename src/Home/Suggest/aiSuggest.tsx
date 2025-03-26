import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export const testTurbo = (question: string) => {
  const OPENAI_KEY = '******'


  const data = JSON.stringify({
    "model": "gpt-3.5-turbo",
    "messages": [
      { "role": "system", "content": "" },
      { "role": "user", "content": question }
    ]
  });

  return fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + OPENAI_KEY,
    },
    body: data,
  }).then(response => {
    response.json()
    console.log(response);
  });
}

const AiSuggest = () => {

  const [answer, setAnswer] = useState<any>([]);
  useEffect(() => {
    const load = async () => {
      setAnswer(await testTurbo('안녕하세요 당신은 뭐하는 사람?'));
    }
    load();
  }, [answer]);

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={async () => console.log(answer.choices[0].message)}>
        <Text>
          Click me!!
        </Text>
      </TouchableOpacity>
      <Text>
      </Text>
    </SafeAreaView>
  );
}

export default AiSuggest;