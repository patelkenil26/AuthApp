// import signupImg from "../assets/Images/signup.webp"
import signupImg from "../assets/Images/login1.jpg"
import Template from "../components/core/Auth/Template"

function Signup () {
  return (
    <Template
    title = "Welcome to the future of authentication"
    description1 = "Log in, sign up, and manage profiles with ease."
    description2 = "Fast, reliable, and built for modern users."
    
    
      image = {signupImg}
      formType = "signup"
    />
  )
}

export default Signup