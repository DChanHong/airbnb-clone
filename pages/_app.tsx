import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";

const font = Nunito({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
      <ClientOnly>
        <Modal actionLabel="Submit" title="Hello World" isOpen />
        <Navbar />
      </ClientOnly>
      <Component {...pageProps} />
    </main>
  );
}
