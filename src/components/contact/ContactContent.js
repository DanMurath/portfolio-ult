import React, { useState } from "react";

const ContactItems = () => {
  const [sent, setSent] = useState(false);

  const Form = () => {
    const [state, setState] = useState({ name: "", email: "", message: "" });

    const encode = (data) => {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    };

    const handleSubmit = (e) => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...state }),
      })
        .then(() => setSent(!sent))
        .catch((error) => alert(error));

      e.preventDefault();
    };

    const handleChange = (e) =>
      setState({ ...state, [e.target.name]: e.target.value });

    return (
      <div className="form-container">
        <form
          name="contact"
          method="post"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <div className="input-field">
            <label>
              <div className="text">
                <input
                  type="text"
                  name="name"
                  value={state.name}
                  onChange={handleChange}
                  id="name"
                  required
                  placeholder="name"
                />
              </div>
            </label>
          </div>

          <div className="input-field">
            <label>
              <div className="text">
                <input
                  type="email"
                  name="email"
                  value={state.email}
                  onChange={handleChange}
                  id="email"
                  required
                  placeholder="email"
                />
              </div>
            </label>
          </div>

          <div className="input-field">
            <label>
              <div className="text">
                <textarea
                  name="message"
                  value={state.message}
                  onChange={handleChange}
                  id="textarea"
                  placeholder="message"
                />
              </div>
            </label>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  };

  return (
    <div className="contact">
      <Form />
    </div>
  );
};

export default ContactItems;
