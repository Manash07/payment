import "bootstrap/dist/css/bootstrap.css";
import "../styles/style.css";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { persistor, store } from "../redux/store/store";
import { PersistGate } from 'redux-persist/integration/react'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>{" "}
    </ChakraProvider>
  );
}
