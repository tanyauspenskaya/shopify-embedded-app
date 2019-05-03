import App from 'next/app';
import Head from 'next/head';
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/styles.css';
import Cookies from 'js-cookie';

class EmbeddedApp extends App {
  state = {
    shopOrigin: Cookies.get('shopOrigin'),
  };

  render() {
    const { Component, pageProps } = this.props;
    return(
      <React.Fragment>
        <Head>
          <title>Shopify Embedded App</title>
          <meta charSet="utf-8" />
        </Head>
        <AppProvider
          apiKey={API_KEY}
          shopOrigin={this.state.shopOrigin}
          forceRedirect
        >
          <Component {...pageProps} />
        </AppProvider>
      </React.Fragment>
    );
  }
}

export default EmbeddedApp;