import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Foso",
  description: "Foso",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${epilogue.className} font-epilogue antialiased`}>
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
          timeZone="Europe/Vienna"
        >
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
