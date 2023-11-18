import styled from "styled-components";
import axios from "axios";
import { useState } from "react";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-contect: space-between;
    align-items center;
    min-height: 420px;
    width: 270px;
    margin: auto;
`;

export const Input = styled.input`
  outline: none;
  padding: 10px;
  border: none;
  border-radius: 8px;
  width: 250px;
  &:focus {
    border: 2px solid rgb(103, 14, 56);
  }
`;

export const Div = styled.div`
  height: 294px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Btn = styled(Div)`
  flex-direction: row;
  height: 75px;
  width: 100%;
`;

export const Button = styled.button`
  background: white;
  border: none;
  outline: none;
  padding: 5px;
  border-radius: 5px;
  width: 33%;
  background: rgb(103, 14, 56);
  color: #bbbbbb;
  &:hover {
    background: #bbbbbb;
    color: rgb(103, 14, 56);
  }
`;

const Register = (props: any) => {
  const [data, setData] = useState({});
  const handleSubmit = async (e?: any) => {
    e.preventDefault();
    try {
      const pass = (document.getElementById("password") as HTMLInputElement)
        .value;
      const conf = (document.getElementById("confirm") as HTMLInputElement)
        .value;
      if (pass === conf) {
        let res = await axios.post(
          "http://localhost:8000/api/v1/users/register",
          data
        );
        localStorage.setItem("user", JSON.stringify(res.data.data));
      } else {
        alert("please make sure password and confirm password are matching");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };
  const handleChange = (e?: any) => {
    e.preventDefault();
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 style={{ color: "white" }}>Register</h2>
      <br />
      <Div>
        <Input
          placeholder="username"
          type="text"
          onBlur={handleChange}
          name="username"
        />
        <Input
          placeholder="First Name"
          type="text"
          onBlur={handleChange}
          name="fname"
        />
        <Input
          placeholder="Last Name"
          type="text"
          onBlur={handleChange}
          name="lname"
        />
        <Input
          placeholder="Email"
          type="email"
          onBlur={handleChange}
          name="email"
        />
        <Input
          placeholder="Password"
          type="text"
          name="password"
          onBlur={handleChange}
          id="password"
        />
        <Input placeholder="Confirm Password" type="text" id="confirm" />
      </Div>
      <Btn>
        <Button>Register</Button>
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
  );
};

export default Register;
