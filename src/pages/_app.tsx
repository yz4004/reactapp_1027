import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { useEffect } from 'react';
import Amplify, { Auth } from 'aws-amplify';
import React from 'react';
// import { createAppSyncClient } from '../appsync/AppSyncClient';
// import amplifyConfig from '../deployment/amplify-config';


function App({ Component, pageProps, router }: AppProps) {
    const validateUserSession = async () => {
      try {
        await Auth.currentSession();
      } catch (error) {
        console.error(error);
        router.push('/signin');
      }
    };
  
    const getUserSession = async () => {
      try {
        await Auth.currentSession();
      } catch (error) {
        router.replace('/signin');
      }
    };
  
    useEffect(() => {
      getUserSession();
      //router.push('/app1');
    }, []);


    const client_test1 = new ApolloClient({
      uri: 'https://flyby-gateway.herokuapp.com/',
      cache: new InMemoryCache(),
    });
  
    return (
      <ChakraProvider>
      <ApolloProvider client={client_test1}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ChakraProvider>
    );
  }
  
  export default App;


  // return (
  //   <ChakraProvider>
  //         <Component {...pageProps} />
  //   </ChakraProvider>
  // );







//Amplify.configure(amplifyConfig);
/*
function App({ Component, pageProps, router }: AppProps) {
  const validateUserSession = async () => {
    try {
      await Auth.currentSession();
    } catch (error) {
      console.error(error);
      router.push('/signin');
    }
  };

  const getUserSession = async () => {
    try {
      await Auth.currentSession();
    } catch (error) {
      router.push('/signin');
    }
  };

  useEffect(() => {
    getUserSession();
  }, []);

  return (
    <ChakraProvider>
      <ApolloProvider client={createAppSyncClient(validateUserSession)}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default App;
*/