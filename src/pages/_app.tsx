import type { AppProps /*, AppContext */ } from "next/app";
import React from "react";
import { Amplify } from "aws-amplify";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import "../styles/globals.css";
import Navbar from "../components/Layout/Navbar";
import awsExports from "../aws-exports";

Amplify.configure({ ...awsExports, ssr: true });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <AmplifyAuthenticator>
    <div className="min-h-screen bg-green-100">
      <Navbar />
      <main className="-mt-32">
        <Component {...pageProps} />
      </main>
    </div>
    // </AmplifyAuthenticator>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
