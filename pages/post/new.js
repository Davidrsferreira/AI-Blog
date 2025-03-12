import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../../components/appLayout/AppLayout";

export default function NewPost() {
  return (
    <div>
      New post page
    </div>
  );
}

NewPost.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};

export const getServerSideProps = withPageAuthRequired();
