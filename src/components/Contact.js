import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "../styles/style.module.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oo3dfpm",
        "template_5kvh5a3",
        form.current,
        "TfNiuuuyvk-7oxtz8"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <label>Name</label>
        <input type="text" name="user_name" className={styles.input} />
        <label>Email</label>
        <input type="email" name="user_email" className={styles.input} />
        <label>Message</label>
        <textarea name="message" className={styles.textArea} />
        <input type="submit" value="Send" className={styles.Button} />
      </form>
    </div>
  );
};

export default Contact;
