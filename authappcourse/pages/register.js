import Head from "next/head";
import Layout from "../layout/layout";
import Link from "next/link";
import styles from "../styles/Form.module.css";
import Image from "next/image";
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import { useState } from "react";
import { useFormik } from "formik";

export default function Register() {
  const [show, setShow] = useState({ password: false, Cpassword: false });
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      Cpassword: "",
    },
    onSubmit,
  });
  async function onSubmit(values) {
    console.log(values);
  }

  return (
    <Layout>
      <Head>
        <title> Register</title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Register</h1>
          <p className="w-3/4 mx-auto text-gray-400 "> lorem text </p>
        </div>

        <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
          <div className={styles.input_group}>
            <input
              className={styles.input_text}
              type="text"
              name="Username"
              placeholder="Username"
              {...formik.getFieldProps("username")}
            />
            <span className="icon flex items-center px-4">
              <HiOutlineUser size={25} />
            </span>
          </div>

          <div className={styles.input_group}>
            <input
              className={styles.input_text}
              type="email"
              name="email"
              placeholder="Email"
              {...formik.getFieldProps("email")}
            />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25} />
            </span>
          </div>

          <div className={styles.input_group}>
            <input
              className={styles.input_text}
              type={`${show.password ? "text" : "password"}`}
              name="password"
              placeholder="Password!"
              {...formik.getFieldProps("password")}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow({ ...show, password: !show.password })}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>

          <div className={styles.input_group}>
            <input
              className={styles.input_text}
              type={`${show.Cpassword ? "text" : "password"}`}
              name="Cpassword"
              placeholder="Confirm Password!"
              {...formik.getFieldProps("Cpassword")}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow({ ...show, Cpassword: !show.Cpassword })}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>

          <div className="input-button">
            <button className={styles.button} type="submit">
              Sign Up
            </button>
          </div>
        </form>

        <p className="text-center">
          Have a account? click here
          <Link legacyBehavior href={"/login"}>
            <a className="text-blue-700"> Sign In</a>
          </Link>
        </p>
      </section>
    </Layout>
  );
}
