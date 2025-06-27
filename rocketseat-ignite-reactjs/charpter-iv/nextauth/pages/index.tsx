import type { GetServerSideProps, NextPage } from "next";
import { FormEvent, useContext, useState } from "react";

import { parseCookies } from "nookies";
import { AuthContext } from "../contexts/AuthContext";

import styles from "../styles/Home.module.css";
import { withSSRGuest } from "../utils/withSSRGuest";

const Home: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();

    const data = {
      email,
      password,
    };

    await singIn(data);
  };

  const { singIn } = useContext(AuthContext);

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        type="email"
        value={email}
        onChange={(ev) => setEmail(ev.target.value)}
      />

      <input
        type="password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />

      <button type="submit">Entrar</button>
    </form>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = withSSRGuest<any>(
  async (ctx) => {
    return {
      props: {},
    };
  }
);
