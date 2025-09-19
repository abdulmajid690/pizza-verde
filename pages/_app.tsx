import Layout from "@/common/Components/Layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/redux/store";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="green-cursor">
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider></div>
  );
}
