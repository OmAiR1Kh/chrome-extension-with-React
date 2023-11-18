import axios from "axios";
import { useState } from "react";
import { Input, Form, Div, Btn, Button } from "./Register";

const Login = (props: any) => {
  const [data, setData] = useState({});
  const handleChange = (e?: any) => {
    e.preventDefault();
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };
  const handleSubmit = async (e?: any) => {
    e.preventDefault();
    try {
      let res = await axios.post(
        "http://localhost:8000/api/v1/users/login",
        data
      );
      console.log(res.data);
      localStorage.setItem("user", JSON.stringify(res.data)); 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h2 style={{ color: "white" }}>Login</h2>
        <Div>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onBlur={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onBlur={handleChange}
          />
        </Div>
        <Btn>
          <Button>Login</Button>
          <Button onClick={() => alert("Coming Soon")}>
            <i className="fa-brands fa-google"></i>
          </Button>
        </Btn>
        <p>
          Have An Account?{" "}
          <span
            style={{
              textDecoration: "underline",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={props.onClick}
          >
            Login
          </span>
        </p>
      </Form>
    </>
  );
};

export default Login;
