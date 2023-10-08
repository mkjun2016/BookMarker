import React, { useEffect, useState } from 'react';

import axios from 'axios';

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
    console.log(response.data.items);
  }).catch((error) => {
    console.log(error);
    return error;
  })
  return search.searchList;
}

const Search2 = () => {

}

export default Search2;