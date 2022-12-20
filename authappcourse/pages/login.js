import Head from "next/head";
import Layout from "../layout/layout";
import Link from "next/link";
import styles from "../styles/Form.module.css";
import Image from "next/image";
export default function Login() {
  return (
    <Layout>
      <Head>
        <title> Login </title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
          <p className="w-3/4 mx-auto text-gray-400 "> lorem text </p>
        </div>

        <form className="flex flex-col gap-5">
          <div className={styles.input_group}>
            <input
              className={styles.input_text}
              type="email"
              name="email"
              placeholder="Email!"
            />
          </div>

          <div className={styles.input_group}>
            <input
              className={styles.input_text}
              type="password"
              name="password"
              placeholder="Password!"
            />
          </div>

          <div className="input-button">
            <button className={styles.button} type="submit">
              Login
            </button>
          </div>

          <div className="input-button">
            <button className={styles.button_custom} type="button">
              Sign In with Google{" "}
              <Image src={"/assets/google.svg"} width="20" height="20"></Image>
            </button>
          </div>

          <div className="input-button">
            <button className={styles.button_custom} type="button">
              Sign In with GitHub
              <Image src={"/assets/github.svg"} width="20" height="20"></Image>
            </button>
          </div>
        </form>

        <p className="text-center">
          Dont Have a account yet? click here
          <Link legacyBehavior href={"/register"}>
            <a className="text-blue-700"> Sign Up</a>
          </Link>
        </p>
      </section>
    </Layout>
  );
}
