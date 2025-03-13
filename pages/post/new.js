import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../../components/appLayout/AppLayout";
import { useState } from "react";
import Markdown from "react-markdown";

export default function NewPost() {
  const [postContent, setPostContent] = useState("");
  const handleClik = async () => {
    const response = await fetch("/api/generatePost", {method: "POST"});
    const data = await response.json();
    setPostContent(data.post.postContent);
  }

  return (
    <div>
      <h1>New post page</h1>
      <button className="btn" onClick={handleClik}>
        Generate
      </button>
      <Markdown>{postContent}</Markdown>
    </div>
  );
}

NewPost.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};

export const getServerSideProps = withPageAuthRequired();
