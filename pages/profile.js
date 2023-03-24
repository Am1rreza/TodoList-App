import Layout from "@/containers/Layout/Layout";
import { signIn, useSession } from "next-auth/react";
import styles from "../styles/Profile.module.css";

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
        <span className={styles.loader}></span>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1 className="text-xl">{session.user.name} Wellcome to your Profile Page</h1>
    </Layout>
  );
};

export default Profile;
