import '../styles/globals.css'
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure({ ...awsconfig, ssr: true });

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}