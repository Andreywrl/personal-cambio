import ComponentProvider from "@/components/ComponentProvider";
import { Figtree } from "next/font/google";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { jsonLd } from "./seo/jsonLd";
import { metadata } from "./seo/metadata";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export { metadata };

export default function RootLayout({ children }) {
  return (
    <html lang="PT-br" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-" /> */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-');
              gtag('config', 'AW-');
              gtag('event', 'conversion', {'send_to': 'AW-/V_zmCM3DuNwaEICLxJBA'});
            `,
          }}
        /> */}
      </head>
      <body style={{ padding: 0, margin: 0 }} className={`${figtree.variable} ${figtree.variable}`}>
        <ComponentProvider>
          {children}
        </ComponentProvider>
      </body>
    </html>
  );
};
