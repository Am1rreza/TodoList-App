import Layout from "@/containers/Layout/Layout";
import { signIn, useSession } from "next-auth/react";

const Profile = () => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });

  console.log(session);

  if (status === "loading") {
    return (
      <Layout>
        <h1 className="text-xl">Loading...</h1>
      </Layout>
    );
  }

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
          <span className="font-semibold">Profile</span> Page
        </p>
      </h1>
    </Layout>
  );
};

export default Profile;
