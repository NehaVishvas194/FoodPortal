import React, { useState } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { baseUrl } from "../features/Api/BaseUrl";
import axios from "axios";
import image from "../assets/logo2.jpeg";
import bgImage from "../assets/home.jpg";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin, logout } from "../slices/login/adminSlice";

const defaultState = {
  email: "",
  password: "",
};

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, admin } = useSelector((state) => state.admin);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState(defaultState);

  const handleLogin = async (e) => {
    e.preventDefault();
    const credentials = {
      email: "amit@example.com",
      password: "123456",
    };

    try {
      const resultAction = await dispatch(loginAdmin(credentials));

      if (loginAdmin.fulfilled.match(resultAction)) {
        const { id, token, name, email, role } = resultAction.payload.data;
        localStorage.setItem("id", id);
        localStorage.setItem("token", token);
        localStorage.setItem("name", name);
        localStorage.setItem("name", email);
        localStorage.setItem("name", role);
        navigate("/admin");
      } else {
        console.error(resultAction.payload || "Login failed");
      }
    } catch (error) {
      console.error("Unexpected error:", error.message);
    }
  };

  const forgotPassword = () => {
    navigate("/forgot-password");
  };

  const loginApproved = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitData = (e) => {
    e.preventDefault();
    axios
      .post(`${baseUrl}admin/login`, {
        email: state.email,
        password: state.password,
      })
      .then((response) => {
        if (response.data.success) {
          const { id, first_name, profile } = response.data.data;
          localStorage.setItem("id", id);
          localStorage.setItem("name", first_name);
          localStorage.setItem("image", profile);
          Swal.fire("Admin login successfully!", "Welcome!", "success");
          navigate("/admin");
        }
      })
      .catch((error) => {
        console.log(error);
        setError({
          errors: error,
          isError: true,
        });
      });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <div className="text-center mb-6">
          <img src={image} alt="Logo" className="mx-auto mb-3 w-24" />
          <h4 className="text-2xl font-bold text-gray-800">Admin</h4>
        </div>
        {/* <span className="text-red-600 block text-center mb-2">
          {error.isError ? error.errors.response?.data?.msg : " "}
        </span> */}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="text"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {/* <span className="text-red-600 text-sm">
              {error.isError ? error.errors.response?.data?.message : " "}
            </span> */}
          </div>
          <div className="mb-4">
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {/* <span className="text-red-600 text-sm">
              {error.isError ? error.errors.response?.data?.pmessage : " "}
            </span> */}
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-500 text-white px-6 py-2 rounded-md inline-flex items-center gap-1"
            >
              Login
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <span
            className="text-sm text-blue-600 hover:underline cursor-pointer"
            onClick={forgotPassword}
          >
            Forgot password?
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
