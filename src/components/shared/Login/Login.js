import React, { useState } from "react";
import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import "./Login.css";
import useAuth from "../../../hooks/useAuth";
import { useHistory, useLocation } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Login = () => {
  const [isError, setIsError] = useState(false);
  const { loginWithEmailPassword, setUser, setError, error } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const url = location.state?.from || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    loginWithEmailPassword(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.displayName);
        setUser(user);
        history.push(url);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setIsError(true);
      });
  };
  return (
    <Box>
      <Header></Header>
      <Box sx={{ my: 3, display: "flex", justifyContent: "center" }}>
        <Box>
          <Paper elevation={3} sx={{ p: 5 }}>
            <Typography
              sx={{ mb: 3, fontWeight: "bold" }}
              variant="h4"
              gutterBottom
              component="div"
            >
              Login on Real Villa
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <p>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-100 p-2"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-danger">Email is required</span>
                )}
              </p>
              <p>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="w-100 p-2"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-danger">Password is required</span>
                )}
              </p>
              <input
                value="Login"
                className="w-100 signin-btn border-0 rounded-pill p-2 text-white"
                type="submit"
              />
            </form>
            <Link
              className="text-decoration-none text-center d-block mt-3"
              to="/register"
            >
              <Button
                sx={{ color: "black", fontWeight: "bold" }}
                variant="text"
              >
                Create an Account?
              </Button>
            </Link>
            {isError ? (
              <Typography
                className="text-danger"
                sx={{ mt: 3, fontWeight: "bold", textAlign: "center" }}
                variant="h6"
                gutterBottom
                component="div"
              >
                {error}
              </Typography>
            ) : (
              ""
            )}
          </Paper>
        </Box>
      </Box>
      <Footer></Footer>
    </Box>
  );
};

export default Login;
