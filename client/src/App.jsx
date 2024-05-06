import { useState } from "react";
import "./App.css";

function App() {
  const mailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    date: "",
  });

  const [certificate, setCertificate] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_PUBLIC_BACKEND_URL}/api/certificate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setCertificate(data.url);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const disabled =
    Object.values(formData).some((value) => value === "") &&
    !mailRegex.test(formData.email) &&
    !dateRegex.test(formData.date);

  return (
    <>
      <h1>Welcome to Certificate Genererator</h1>
      <div className="container">
        <div className="input-container">
          <label htmlFor="user-input" className="input-label">
            Enter your name:
          </label>
          <input
            type="text"
            id="user-input"
            className="input-field"
            placeholder="Your name..."
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="user-input" className="input-label">
            Enter your email:
          </label>
          <input
            type="text"
            id="user-input"
            className="input-field"
            placeholder="Your name..."
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="user-input" className="input-label">
            Enter your course name:
          </label>
          <input
            type="text"
            id="user-input"
            className="input-field"
            placeholder="Your name..."
            name="course"
            value={formData.course}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="user-input" className="input-label">
            Enter date of completion:
          </label>
          <input
            type="date"
            id="user-input"
            className="input-field"
            placeholder="Your name..."
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
      </div>
      <button
        onClick={handleSubmit}
        disabled={disabled}
        className="generate-btn"
        style={{ padding: "10px", margin: "10px", fontSize: "20px" }}
      >
        Generate Certificate
      </button>
      <div>
        {certificate && (
          <>
            <a href={certificate} className="download-link" target="__blank">
              View Certificate
            </a>
            <small>Copy of this has been sent successfull on your mail</small>
          </>
        )}
      </div>
    </>
  );
}

export default App;
