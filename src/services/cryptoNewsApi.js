import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
        'x-bingapis-sdk': 'true',
        'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
        'x-rapidapi-key': '049a5907c0msh6f177594f87f7dfp1f6723jsn1154e40c67f6'
      }
const baseUrl = 'https://bing-news-search1.p.rapidapi.com'


const createRequest = (url) => ({ url, headers: cryptoNewsHeaders })


export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
      getCryptoNews: builder.query({
          query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&Freshness=Day&count=${count}`)
      })
  })
})

export const {
  useGetCryptoNewsQuery,
} = cryptoNewsApi;