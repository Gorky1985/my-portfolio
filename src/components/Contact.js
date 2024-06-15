import React, { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const emailRegex = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: false });
  };

  const validateForm = () => {
    const errors = {
      name: formData.name.trim() === "",
      email: formData.email.trim() === "" || !emailRegex.test(formData.email),
      subject: formData.subject.trim() === "",
      message: formData.message.trim() === "",
    };

    setFormErrors(errors);

    return !Object.values(errors).some((error) => error);
  };

  const sendEmail = () => {
    const bodyMessage = `Full Name: ${formData.name}<br/>
                     Email Address: ${formData.email}<br/>
                     Subject: ${formData.subject}<br/>
                     Message: ${formData.message}<br/>`;

    // Sending email using SMTP.js
    window.Email.send({
      Host: "smtp.elasticemail.com",
      Username: "gorky1985@gmail.com",
      Password: "CBB67EBEA7C33D5E587DBBBE1FD246967B3D",
      To: "gorky1985@gmail.com",
      From: "gorky1985@gmail.com",
      Subject: `New Contact Form Submission: ${formData.subject}`,
      Body: bodyMessage,
    }).then(
      (message) => {
        console.log(message);
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
        });

        // Reset form data after successful submission
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      },
      (error) => {
        console.error(error);
        Swal.fire({
          title: "Error!",
          text: "Message failed to send!",
          icon: "error",
        });
      }
    );
  };

  function copyToClipboard(text, type) {
    navigator.clipboard.writeText(text);
    let copiedText;
    if (type === "phone") {
      copiedText = "Phone number copied to clipboard!";
    } else if (type === "email") {
      copiedText = "Email copied to clipboard!";
    }
    Swal.fire({
      title: "Copied!",
      text: copiedText,
      icon: "success",
    });
  }

  const handlePhoneClick = () => {
    copyToClipboard("+43 681 812 96428", "phone");
  };

  const handleEmailClick = () => {
    copyToClipboard("goran_cosic@gmx.at", "email");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      sendEmail();
    } else {
      Swal.fire({
        title: "Error!",
        text: "Please fill out all required fields.",
        icon: "error",
      });
    }
  };

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
        <p
          id="phoneParagraph"
          onClick={handlePhoneClick}
          style={{ cursor: "pointer" }}
        >
          <span className="xxlarge margin-right material-icons">phone</span>{" "}
          Phone: +43 681 812 96428
        </p>
        <p
          id="emailParagraph"
          onClick={handleEmailClick}
          style={{ cursor: "pointer" }}
        >
          <span className="xxlarge margin-right material-icons">email</span>{" "}
          Email: goran_cosic@gmx.at
        </p>
      </div>

      <br />
      <p>Let's get in touch. Send me a message:</p>
      <form className="input-form" onSubmit={handleSubmit}>
        <p>
          <input
            className="input padding-16"
            type="text"
            placeholder="Name"
            required
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </p>

        <p>
          <input
            className="input padding-16"
            type="email"
            placeholder="Email"
            required
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </p>

        <p>
          <input
            className="input padding-16"
            type="text"
            placeholder="Subject"
            required
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
          />
        </p>

        <p>
          <textarea
            className="input padding-16"
            placeholder="Message"
            required
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            style={{ width: "100%", resize: "none" }}
          ></textarea>
        </p>

        <button className="button light-grey padding-large" type="submit">
          <span className="xxlarge material-icons">send</span> SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default Contact;
