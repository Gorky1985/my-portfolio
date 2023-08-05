const Contact = () => {
  return (
    <div className="padding-64 content text-grey" id="contact">
      <h2 className="text-light-grey">Contact Me</h2>
      <hr style={{ width: "200px" }} className="w3-opacity" />

      <div className="section">
        <p>
          <span className="xxlarge margin-right material-icons">
            location_on
          </span>{" "}
          Vienna, AT
        </p>
        <p>
          <span className="xxlarge margin-right material-icons">phone</span>{" "}
          Phone: +43 681 812 96428
        </p>
        <p>
          <span className="xxlarge margin-right material-icons">email</span>{" "}
          Email: goran_cosic@gmx.at
        </p>
      </div>
      <br />
      <p>Let's get in touch. Send me a message:</p>

      <form action="/action_page.php" target="_blank">
        <p>
          <input
            className="input padding-16"
            type="text"
            placeholder="Name"
            required
            name="Name"
          />
        </p>
        <p>
          <input
            className="input padding-16"
            type="text"
            placeholder="Email"
            required
            name="Email"
          />
        </p>
        <p>
          <input
            className="input padding-16"
            type="text"
            placeholder="Subject"
            required
            name="Subject"
          />
        </p>
        <p>
          <input
            className="input padding-16"
            type="text"
            placeholder="Message"
            required
            name="Message"
          />
        </p>
        <p>
          <button className="button light-grey padding-large" type="submit">
            <span className="xxlarge material-icons">send</span> SEND MESSAGE
          </button>
        </p>
      </form>
    </div>
  );
};

export default Contact;
