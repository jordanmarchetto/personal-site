import MainLayout from '../components/MainLayout'
import Head from 'next/head';
import '../styles/globals.css'

export function reportWebVitals({ id, name, label, value }) {
  // Use `window.gtag` if you initialized Google Analytics as this example:
  // https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_document.js
  //console.log(`sending metric to google: {id: ${id}, name: ${name}, label: ${label}, value: ${value}} `)
  window.gtag('event', name, {
    event_category:
      label === 'web-vital' ? 'Web Vitals' : 'Web Vital (custom metric)',
    value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    event_label: id, // id unique to current page load
    non_interaction: true, // avoids affecting bounce rate.
  })
}

function MyApp({ Component, pageProps }) {
  const ga_id = "UA-132107286-1";
  const gtm_id = "GTM-5J67PNS";
  return (
    <>
      <Head>
        <script
          async
          src={"https://www.googletagmanager.com/gtag/js?id=" + ga_id}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${ga_id}', { page_path: window.location.pathname });`,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtm_id}');
            `,
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
