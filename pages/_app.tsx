import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layouts/Layout';
import localFont from '@next/font/local';
import NavigationBar from '../components/layouts/NavigationBar';

// TODO: Try to apply the NEXT way of configuring custom fonts.
// const inter = localFont({
//   src: [
//     {
//       path: './Inter-ExtraLight.woff2',
//       weight: '200',
//       style: 'normal',
//     },
//     {
//       path: './Inter-Regular.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: './Inter-SemiBold.woff2',
//       weight: '600',
//       style: 'normal',
//     },
//   ],
// });

// const sofiaSansExtraCondensed = localFont({
//   src: [
//     {
//       path: './SofiaSansExtraCondensed-Regular.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: './SofiaSansExtraCondensed-SemiBold.woff2',
//       weight: '600',
//       style: 'normal',
//     },
//   ],
// });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      {/* <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${sofiaSansExtraCondensed.style.fontFamily};
        }
      `}</style> */}
      <NavigationBar />
      <Component {...pageProps} />
    </Layout>
  );
}
