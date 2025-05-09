import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../components/appLayout/AppLayout";
import { getAppProps } from "../utils/getAppProps";

export default function TokenPopup() {
  const handleClick = async () => {
    const result = await fetch("/api/addTokens", {
      method: "POST",
    });

    const data = await result.json();
    window.location.replace(data.session.url);
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

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const props = await getAppProps(ctx);
    return { props };
  },
});
