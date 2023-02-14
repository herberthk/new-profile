import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <title>Kavuma Herbert</title>
      {/* <meta name=”robots” content=”index, follow” /> */}
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta
        name="description"
        content="Kavuma Herbert is the full stack  software Engineer with financial accounting background. He specialized in building, developing efficient and modern responsive single page applications, designing, developing and maintaining secure APIs, Database and mobile applications"
      />
      <meta
        name="keywords"
        content="Kavuma Herbert, Web designer, Web developer, Software Engineer, Internet master, Database administrator, mobile application developer, System administrator"
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Component {...pageProps} />
    </>
  );
}
