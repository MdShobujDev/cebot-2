import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { theme } from "@/theme/antd";
import { Almarai, Barlow } from "@/utils/customFonts";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Welcome to CEBOT",
  description:
    "Discover the most secure and user-friendly Crypto Wallet. Store Bitcoin, Ethereum, and altcoins while enjoying fast, seamless cryptocurrency exchanges.",
  keywords:
    "Crypto Wallet, Cryptocurrency Exchange, Bitcoin Wallet, Ethereum Wallet, Secure Crypto Storage, Altcoin Exchange,Secure Bitcoin ,Storage Private Key, WalletMulti-Currency, WalletCold Wallet for Crypto ,Hardware Crypto Wallet",
  openGraph: {
    title: "Welcome to CEBOT",
    description:
      "Discover the most secure and user-friendly Crypto Wallet. Store Bitcoin, Ethereum, and altcoins while enjoying fast, seamless cryptocurrency exchanges.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConfigProvider theme={theme}>
      <html lang="en">
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta property="og:title" content="Welcome to CEBOT" />
          <meta
            property="og:description"
            content="Discover the most secure and user-friendly Crypto Wallet. Store Bitcoin, Ethereum, and altcoins while enjoying fast, seamless cryptocurrency exchanges."
          />
        </head>
        <body
          className={`${Barlow.variable} ${Almarai.variable} antialiased max-w-[1440px] mx-auto px-5
          md:px-10 bg-neutrals-black text-neutrals-white relative scroll-smooth overflow-x-hidden`}
        >
          <AntdRegistry>
            <NavBar />
            {children}
            <Footer />
          </AntdRegistry>
        </body>
      </html>
    </ConfigProvider>
  );
}
