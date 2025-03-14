import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../components/appLayout/AppLayout";

export default function TokenPopup() {
  const handleClick = async () => {
    await fetch("/api/addTokens", {
      method: "POST",
    });
  };

  return (
    <div>
      <h1>Token popup page</h1>
      <button className="btn" onClick={handleClick}>
        Add Tokens
      </button>
    </div>
  );
}

TokenPopup.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};

export const getServerSideProps = withPageAuthRequired();
