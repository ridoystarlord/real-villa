import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Rating from "@mui/material/Rating";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const GiveFeedback = () => {
  const [value, setValue] = React.useState(2.5);
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.userName = user.displayName;
    data.userImg = user.photoURL;
    data.rating = value;
    fetch("https://warm-coast-92298.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Your Feedback Submit Successful");
          reset();
        }
      });
  };
  return (
    <Box>
      <Typography
        sx={{ mb: 3, fontWeight: "bold" }}
        variant="h3"
        gutterBottom
        component="div"
      >
        Give Real Villa Reviews
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ mr: 5 }} variant="h6" gutterBottom component="div">
          Give Us Rating:
        </Typography>
        <Rating
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          name="half-rating"
          value={value}
          precision={0.5}
        />
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          <textarea
            rows="2"
            className="w-100 p-2"
            placeholder="Enter Your honest Review About Real Villa"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <span className="text-danger">
              Property Description is required
            </span>
          )}
        </p>
        <input
          value="Sent"
          className="w-100 signup-btn border-0 rounded-pill p-2 text-white"
          type="submit"
        />
      </form>
    </Box>
  );
};

export default GiveFeedback;
