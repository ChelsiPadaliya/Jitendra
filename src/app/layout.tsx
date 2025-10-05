import "./globals.css";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Jitendra - Personal Portfolio",
  description: "A creative portfolio showcase template by Themesvila",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/nice-select.min.css" />
        <link rel="stylesheet" href="/css/animate.min.css" />
        <link rel="stylesheet" href="/css/slick.min.css" />
        <link rel="stylesheet" href="/css/spacing.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
        <link rel="stylesheet" href="/fonts/remixicon.css" />
      </head>
      <body>
        {children}
        <Script src="/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/js/appear.min.js" strategy="afterInteractive" />
        <Script src="/js/gsap.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/js/slick.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.nice-select.min.js" strategy="afterInteractive" />
        <Script src="/js/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/js/isotope.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/js/wow.min.js" strategy="afterInteractive" />
        <Script src="/js/smooth-scroll.js" strategy="afterInteractive" />
        <Script src="/js/form-validator.min.js" strategy="afterInteractive" />
        <Script src="/js/contact-form-script.js" strategy="afterInteractive" />
        <Script src="/js/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}