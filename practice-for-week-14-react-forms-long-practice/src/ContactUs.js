import { useEffect, useState } from "react";

function ContactUs(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [staff, setStaff] = useState("");
  const [phoneType, setPhoneType] = useState("");
  const [bio, setBio] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    const errors = [];
    if (!name.length) {
      errors.push("Please enter your Name");
    }
    if (!email.includes("@")) {
      errors.push("Please provide a valid Email");
    }
    if (!bio.length > 280) {
      errors.push("Bio should have a length of 280 characters or less.");
    }
    if (phone && phoneType === "") {
      errors.push("Phone Type should be provided.");
    }
    setValidationErrors(errors);
  }, [name, email, bio, phone, phoneType]);

  const onSubmit = (e) => {
    e.preventDefault();

    setHasSubmitted(true);
    if (validationErrors.length) return alert(`Cannot Submit`);

    const contactUsInformation = {
      name,
      email,
      phone,
      phoneType,
      staff,
      bio,
      isChecked,
      submittedOn: new Date()
    };

    console.log(contactUsInformation);
    setName("");
    setEmail("");
    setPhone("");
    setPhoneType("");
    setStaff("");
    setBio("");
    setValidationErrors([]);
    setIsChecked(false);
    setHasSubmitted(false);
  };

  return (
    <div>
      <h2>Contact Us</h2>
      {hasSubmitted && validationErrors.length > 0 && (
        <div>
          The following errors were found:
          <ul>
            {validationErrors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
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
          <select
            name="phoneType"
            onChange={(e) => setPhoneType(e.target.value)}
            value={phoneType}
          >
            <option value="" disabled>
              Select a phone type...
            </option>
            <option>Home</option>
            <option>Work</option>
            <option>Mobile</option>
          </select>
        </div>
        <div>
          <p>Staff:</p>
          <input
            type="radio"
            name="staff"
            id="instructor"
            value="instructor"
            onChange={(e) => setStaff(e.target.value)}
            checked={staff === "instructor"}
          />
          <label htmlFor="instructor">Instructor</label>
          <br />

          <input
            type="radio"
            name="staff"
            id="student"
            value="student"
            onChange={(e) => setStaff(e.target.value)}
            checked={staff === "student"}
          />
          <label htmlFor="student">Student</label>
          <br />
        </div>
        <div>
          <label htmlFor="bio">Bio:</label>
          <textarea
            id="bio"
            name="bio"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="email_notification"
            name="email_notification"
            value={isChecked}
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          Sign Up for email notifications
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
