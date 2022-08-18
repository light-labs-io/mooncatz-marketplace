import '../styles/globals.css'
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';
import '@aws-amplify/ui-react/styles.css';
import { SessionProvider } from "next-auth/react";

Amplify.configure({ ...awsconfig, ssr: true });

function MyApp({Component, pageProps: {session, ...pageProps}}) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<SessionProvider session={session}>
    <Component {...pageProps} />
  </SessionProvider>)
}