import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import "./Register.css";
import useAuth from "../../../hooks/useAuth";
import { useHistory, useLocation } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    registerWithEmailPassword,
    setUser,
    setError,
    updateUserProfile,
    error,
  } = useAuth();
  const [isError, setIsError] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const url = location.state?.from || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    registerWithEmailPassword(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateUserProfile(data.username);
        setUser(user);
        data.uid = user.uid;
        data.photoUrl = "https://i.ibb.co/HYYPS64/placeholder.jpg";
        fetch("https://warm-coast-92298.herokuapp.com/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              history.push(url);
            }
          });
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
              Register on Real Villa
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <p>
                <input
                  placeholder="Enter Your Name"
                  className="w-100 p-2"
                  {...register("username", { required: true })}
                />
                {errors.username && (
                  <span className="text-danger">Username is required</span>
                )}
              </p>
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
                value="Register"
                className="w-100 signup-btn border-0 rounded-pill p-2 text-white"
                type="submit"
              />
            </form>
            <Link
              className="text-decoration-none text-center d-block mt-3"
              to="/login"
            >
              <Button
                sx={{ color: "black", fontWeight: "bold" }}
                variant="text"
              >
                Already have an Account? Login
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

export default Register;
