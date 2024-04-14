import React from "react";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
const Contact = () => {
  // const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  //Handle form Data
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //Handle Contact form submit
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = document.getElementById("form") as HTMLFormElement | null;
    if (form) {
      const formData = new FormData(form);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      })
        .then(async (response) => {
          console.log("ress", response);
          if (response.status === 200) {
            toast("Form submitted succesfully!!", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .then(function () {
          form.reset();
        });
    }
  };

  return (
    <div className="contact-wrap" id="contact">
      <h6>Connect with me?</h6>
      <p>
        I am available to engage in discussions regarding software/website
        development projects or the conversion of designs from Figma to React.
      </p>
      <div className="contact-form">
        <form onSubmit={sendEmail} method="POST" id="form">
          <div className="form-top">
            <input
              type="hidden"
              name="access_key"
              value="4da500d5-ba41-4729-9bbd-0822759696c9"
            />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-middle">
            <textarea
              name="message"
              id=""
              placeholder="Your Message"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-bottom">
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
