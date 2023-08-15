import Cursor from "@/components/cursor/customCursor";
import Layout from "@/components/layout/layout";
import Meta from "@/components/meta/meta";
import PageTransition from "@/components/pageTransition/pageTransition";
import Preloader from "@/components/preloader/preloader";
import { ScrollProvider } from "@/hooks/useLenis";
import "@/styles/globals.css";
import Fonts from "@/theme/fonts/fonts";
import theme from "@/theme/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import LoadingBar from "react-top-loading-bar";

export default function App({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  const LoadingBarRef: any = useRef(null);

  const router = useRouter();

  useEffect(() => {
    // router event listeners for loadingBar
    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteComplete);
    router.events.on("routeChangeError", handleRouteError);

    return () => {
      // remove loadingBar event listeners
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteComplete);
      router.events.off("routeChangeError", handleRouteError);
    };
  }, []);

  const handleRouteComplete = () => {
    if (LoadingBar !== null) {
      setTimeout(function () {
        LoadingBarRef.current.complete();
      }, 300);
    }
  };

  const handleRouteStart = () => {
    LoadingBarRef.current.continuousStart();
  };

  const handleRouteError = (err: any) => {
    setTimeout(function () {
      if (err.cancelled) {
        // console.log(`${err} on route to ${url}`);
      }
      LoadingBarRef.current.complete();
    }, 300);
  };

  return (
    <ChakraProvider theme={theme}>
      <Meta
        title={"housecolor | construimos experiencias y productos digitales"}
        description="construimos experiencias y productos digitales"
      />
      <Fonts />
      <Cursor />
      <Preloader />
      <LoadingBar ref={LoadingBarRef} height={3} color="#ff98a2" />
      <PageTransition router={router}>
        <ScrollProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ScrollProvider>
      </PageTransition>
    </ChakraProvider>
  );
}
