import Layout from "@/containers/Layout/Layout";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]";

const ProtectedSSR = () => {
  const { data: session, status } = useSession();

  return (
    <Layout>
      <h1 className="text-xl flex flex-col items-center text-center sm:flex-row sm:items-center gap-4">
        <img
          src={session.user.image}
          alt="profile-img"
          className="w-24 h-24 sm:w-20 sm:h-20 rounded-full"
        />
        <p>
          {" "}
          {session.user.name}, Wellcome to your{" "}
          <span className="font-semibold">Protected SSR</span> Page
        </p>
      </h1>
    </Layout>
  );
};

export default ProtectedSSR;

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination:
          "/api/auth/signin?callbackUrl=http://localhost:3000/protected-ssr",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
