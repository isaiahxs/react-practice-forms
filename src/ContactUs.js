// ./src/ContactUs.js
import { useState } from "react";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = (e) => {
    //prevent the default form behavior so the page doesn't reload
    e.preventDefault();

    //create a new object for the contact us information
    const contactUsInformation = {
      name,
      email,
      phone,
      submittedOn: new Date()
    };

    //ideally, we'd persist this information to a database using a RESTful API
    //for now though, just log the contact us information to the console
    console.log(contactUsInformation);

    //reset the form state
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          {/* need to update the name state variable whenever the user types into the field */}
          <input
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            id="phone"
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
