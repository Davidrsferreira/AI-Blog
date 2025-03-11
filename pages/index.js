import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function Home() {
  const { user } = useUser();

  console.log(user)
  return (
    <div>
      <h1>Homepage</h1>
      {!!user ? (
        <div>
          <div>
            <Image
              src={user.picture}
              alt={user.name}
              height={50}
              width={50}
            ></Image>
          </div>
          <div>
            {user.name}
          </div>
          <Link href="/api/auth/logout">Logout</Link>
        </div>
      ) : (
        <Link href="/api/auth/login">Login</Link>
      )}
    </div>
  );
}
