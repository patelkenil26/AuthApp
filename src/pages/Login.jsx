// import loginImg from "../assets/Images/login.webp"
// import loginImg from "../assets/Images/login.webp"
import loginImg from "../assets/Images/login2.jpg";
import Template from "../components/core/Auth/Template";

function Login() {
  return (
    <Template
      title="Welcome Back"
      description1="Login and manage your account securely."
      description2="Your trusted platform for all things auth."
      image={loginImg}
      formType="login"
    />
  );
}

export default Login;
