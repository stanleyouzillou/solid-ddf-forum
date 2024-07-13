// src/pages/RegisterPage.tsx
import React from "react";
import RegistrationForm from "../components/RegistrationForm";
import "./RegisterPage.css";

const RegisterPage: React.FC = () => {
  return (
    <div className="register-page">
      <RegistrationForm />
    </div>
  );
};

export default RegisterPage;
