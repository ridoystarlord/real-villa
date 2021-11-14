import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddNewProperty = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleFileChange = (event) => {
    const imageData = new FormData();
    imageData.set("key", "59321fc5aa71ab6ce28cd0f90d68e86a");
    imageData.append("image", event.target.files[0]);
    fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body: imageData,
    })
      .then((res) => res.json())
      .then((data) => setImageUrl(data.data.display_url));
  };
  const onSubmit = (data) => {
    data.img = imageUrl;
    fetch("https://warm-coast-92298.herokuapp.com/addproperty", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("New Property Added Successful");
          reset();
        }
      });
  };
  return (
    <Box>
      <Typography
        sx={{ fontWeight: "bold", mb: 3 }}
        variant="h4"
        gutterBottom
        component="div"
      >
        Add a new Property
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          <input
            placeholder="Enter Your Property Name"
            className="w-100 p-2"
            {...register("propertyName", { required: true })}
          />
          {errors.propertyName && (
            <span className="text-danger">Property Name is required</span>
          )}
        </p>
        <p>
          <input
            type="number"
            placeholder="Enter Your Property Price"
            className="w-100 p-2"
            {...register("price", { required: true })}
          />
          {errors.price && (
            <span className="text-danger">Property Price is required</span>
          )}
        </p>
        <input
          className="d-block my-3"
          onChange={handleFileChange}
          type="file"
          name=""
          id=""
        />

        <p>
          <input
            type="number"
            placeholder="How many bedrooms?"
            className="w-100 p-2"
            {...register("bedrooms", { required: true })}
          />
          {errors.bedrooms && (
            <span className="text-danger">Bedrooms is required</span>
          )}
        </p>
        <p>
          <input
            type="number"
            placeholder="How many baths?"
            className="w-100 p-2"
            {...register("bath", { required: true })}
          />
          {errors.bath && (
            <span className="text-danger">Baths is required</span>
          )}
        </p>
        <p>
          <input
            type="number"
            placeholder="How many garages?"
            className="w-100 p-2"
            {...register("garages", { required: true })}
          />
          {errors.garages && (
            <span className="text-danger">Garages is required</span>
          )}
        </p>
        <p>
          <input
            type="number"
            placeholder="How many Property Size(sq ft)?"
            className="w-100 p-2"
            {...register("size", { required: true })}
          />
          {errors.size && (
            <span className="text-danger">Property Size is required</span>
          )}
        </p>
        <p>
          <input
            type="date"
            placeholder="Enter Property Build in date"
            className="w-100 p-2"
            {...register("buildin", { required: true })}
          />
          {errors.buildin && (
            <span className="text-danger">
              Property Build in date is required
            </span>
          )}
        </p>
        <p>
          <textarea
            rows="2"
            className="w-100 p-2"
            placeholder="Enter Property Description"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <span className="text-danger">
              Property Description is required
            </span>
          )}
        </p>
        <p>
          <textarea
            rows="3"
            className="w-100 p-2"
            placeholder="Enter Property amenities(use (,) for separate the amenities)"
            {...register("amenities", { required: true })}
          />
          {errors.amenities && (
            <span className="text-danger">
              Property Description is required
            </span>
          )}
        </p>
        <input
          value="Add Property"
          className="w-100 signup-btn border-0 rounded-pill p-2 text-white"
          type="submit"
        />
      </form>
    </Box>
  );
};

export default AddNewProperty;
