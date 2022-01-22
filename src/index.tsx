import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { SkeletonTheme } from 'react-loading-skeleton'
import { theme } from 'twin.macro'
import { App } from './app'
import reportWebVitals from './reportWebVitals'
import { GlobalStyles } from './components/globalStyles'
import 'react-loading-skeleton/dist/skeleton.css'

const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api',
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ApolloProvider client={client}>
      <SkeletonTheme
        baseColor={theme('colors.gray.300')}
        highlightColor={theme('colors.gray.200')}
        duration={4}
        borderRadius="2px"
      >
        <App />
      </SkeletonTheme>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

reportWebVitals()
