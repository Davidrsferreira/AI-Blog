import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { DM_Sans } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <main className={`${dmSans.className}`}>
      <UserProvider>
        {getLayout(<Component {...pageProps} />, pageProps)}
      </UserProvider>
    </main>
  );
}

export default MyApp;
