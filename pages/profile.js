import Layout from "@/containers/Layout/Layout";
import { signIn, useSession } from "next-auth/react";

const Profile = () => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });

  if (status === "loading") {
    return (
      <Layout>
        <h1 className="text-xl">Loading...</h1>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1 className="text-xl">
        {session.user.name} Wellcome to your Profile Page
      </h1>
    </Layout>
  );
};

export default Profile;
