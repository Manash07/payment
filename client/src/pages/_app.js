import 'bootstrap/dist/css/bootstrap.css';
import '../styles/style.css'
import { Provider } from 'react-redux';
import store from '@/redux/store/store';
import { ChakraProvider } from '@chakra-ui/react'



export default function App({ Component, pageProps }) {
  return <ChakraProvider> <Provider store={store}> <Component {...pageProps} /> </Provider> </ChakraProvider>
}

