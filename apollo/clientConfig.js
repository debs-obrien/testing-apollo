import { InMemoryCache } from 'apollo-cache-inmemory'
export default function(context) {
  return {
    httpLinkOptions: {
      uri: 'https://nuxtjs-demo.herokuapp.com/v1/graphql',
      credentials: 'same-origin'
    },
    cache: new InMemoryCache(),
    wsEndpoint: 'wss://nuxtjs-demo.herokuapp.com/v1/graphql'
  }
}
