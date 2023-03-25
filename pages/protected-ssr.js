import Layout from "@/containers/Layout/Layout";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";

const ProtectedSSR = () => {
  const { data: session, status } = useSession();

  return (
    <Layout>
      <h1 className="text-2xl">Protected page from server</h1>
    </Layout>
  );
};

export default ProtectedSSR;

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res);

  return {
    props: {
      session,
    },
  };
}
