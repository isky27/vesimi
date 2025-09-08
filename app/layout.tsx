import {ReactNode} from "react";
import { Metadata } from 'next';
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'react-multi-carousel/lib/styles.css';
import 'rc-slider/assets/index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./scss/style.css"
import "./scss/responsive.css"
import {Providers} from "./providers";

export const metadata: Metadata = {
  title: 'Visit Online Apparel & Designer Fashion Store, Clothing & Accessories Dubai',
  description: 'Looking for the latest fashion trends and styles? Look no further than our online apparel & Designer fashion store! From trendy clothing to stylish accessories, we offer a wide range of fashionable products to help you stay on top of the latest fashion trends.',
  keywords: ['online fashion store Dubai', 'online apparel store in India', 'best online Indian clothing store'],
  openGraph: {
    title: 'Visit Online Apparel & Designer Fashion Store, Clothing & Accessories Dubai',
    description: 'Looking for the latest fashion trends and styles? Look no further than our online apparel & Designer fashion store!',
    url: 'https://www.vesimi.com/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visit Online Apparel & Designer Fashion Store, Clothing & Accessories Dubai',
    description: 'Looking for the latest fashion trends and styles? Look no further than our online apparel & Designer fashion store!',
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
      <html lang="en">
        <head>
          <meta name="theme-color" content="#000000" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
          <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
          <meta name="google-site-verification" content="x_1r1-lepeuMnQ1ueopI4e94F_MTqlGz0cn4zlACBlA" />
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-F3YK3ZX56K"></Script>
          <Script>
            {
              `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-F3YK3ZX56K');`
            }
          </Script>
        </head>
        <body>
            <Providers>{children}</Providers>
        </body>
      </html>
  )
}
