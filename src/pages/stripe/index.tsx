import Head from 'next/head';
import { Box, Heading, Container, Text, Button, Stack, createIcon, Center, Spinner } from '@chakra-ui/react';
import { useRouter } from 'next/router';


export default function Home() {

    const router = useRouter();

    const stripe_app1 = async () => {

        console.log("Checkout stripe app1 66666666666666666666666666666666666");

        fetch("http://localhost:5500/create-checkout-session", { // where to fetch server response -- server url
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              items: [
                { id: 1, quantity: 3 },
                { id: 2, quantity: 1 },
              ],
            }),
          })
          .then(res => {
            //console.log("@@@@@@@@@@@@@@@@@@@@@@", res);
            if (res.ok) return res.json()
            return res.json().then(json => Promise.reject(json))
            
          })
          .then(({ url }) => {
            window.location = url
          })
          .catch(e => {
            console.error(e.error)
          })

        };


    return (

        <>
            <Head>
                <title>Hello Stripe</title>

            </Head>
        
            <Button
              colorScheme={'green'}
              onClick={stripe_app1}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.500',
              }}
            >
              stripe app1
            </Button>
        </>

    );

}