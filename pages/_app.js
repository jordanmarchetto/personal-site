import MainLayout from '../components/MainLayout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout {...pageProps}>
      <Component {...pageProps} />
    </MainLayout>)
}

export default MyApp
