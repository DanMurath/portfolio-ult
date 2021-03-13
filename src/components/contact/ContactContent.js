import { useContext, useState } from "react";
import Context from "../../context";
import Thanks from "./Thanks";
import { Reveal, Tween } from "react-gsap";
import { Pause, WindupChildren } from "windups";

const ContactItems = () => {
  const [sent, setSent] = useState(false);
  const { textContent } = useContext(Context);

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
      <div>
        <div className="txt">
          <WindupChildren>
            {textContent.contact.one}
            <Pause ms={1100} />
            {textContent.contact.two}
            <br />
            <Pause ms={900} />
            {textContent.contact.three}
            <Pause ms={700} />
            {textContent.contact.four}
            <br />
            <Pause ms={900} />
            {textContent.contact.five}
            <Pause ms={900} />
            <br />
            {textContent.contact.six}
            <Pause ms={700} />
            {textContent.contact.seven}
            <Pause ms={430} />
            {textContent.contact.eight}
          </WindupChildren>
        </div>

        <Reveal>
          <Tween from={{ opacity: 0 }} duration={2} delay={7}>
            <div className="form-container">
              <form
                name="contact"
                method="post"
                data-netlify="true"
                onSubmit={handleSubmit}
              >
                <Reveal>
                  <Tween from={{ opacity: 0 }} duration={2} delay={7.5}>
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
                            placeholder={textContent.contact.name}
                          />
                        </div>
                      </label>
                    </div>
                  </Tween>
                </Reveal>

                <Reveal>
                  <Tween from={{ opacity: 0 }} duration={2} delay={7.7}>
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
                            placeholder={textContent.contact.email}
                          />
                        </div>
                      </label>
                    </div>
                  </Tween>
                </Reveal>

                <Reveal>
                  <Tween from={{ opacity: 0 }} duration={2} delay={7.9}>
                    <div className="input-field">
                      <label>
                        <div className="text">
                          <textarea
                            name="message"
                            value={state.message}
                            onChange={handleChange}
                            id="textarea"
                            placeholder={textContent.contact.message}
                          />
                        </div>
                      </label>
                    </div>
                  </Tween>
                </Reveal>

                <Reveal>
                  <Tween from={{ opacity: 0 }} duration={2} delay={8.1}>
                    <button type="submit">{textContent.contact.send}</button>
                  </Tween>
                </Reveal>
              </form>
            </div>
          </Tween>
        </Reveal>
      </div>
    );
  };

  return <div className="contact">{sent ? <Thanks /> : <Form />}</div>;
};

export default ContactItems;
