import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function TokenPopup() {
  return (
    <div>
      <h1>Token popup page</h1>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired();
