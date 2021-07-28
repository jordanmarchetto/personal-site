import MainLayout from '../components/MainLayout'
import Head from 'next/head';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const tracking_id = "UA-132107286-1";

  return (
    <>
      <Head>
        <script
          async
          src={"https://www.googletagmanager.com/gtag/js?id=" + tracking_id}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${tracking_id}', { page_path: window.location.pathname });`,
          }}
        />
      </Head>
      <MainLayout {...pageProps}>
        <Component {...pageProps} />
      </MainLayout>
    </>
  )
}

export default MyApp
