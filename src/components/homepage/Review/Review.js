import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Rating from "@mui/material/Rating";

const Review = (props) => {
  const { userName, description, userImg, rating } = props.review;
  return (
    <Grid item xs={12} sm={12} md={4} lg={3}>
      <Card sx={{ py: 3 }}>
        <CardMedia
          style={{ width: "150px", marginLeft: "auto", marginRight: "auto" }}
          sx={{ borderRadius: "50%" }}
          component="img"
          height="150"
          image={userImg}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            sx={{ fontWeight: "bold", textAlign: "center" }}
            variant="h6"
            gutterBottom
            component="div"
          >
            {userName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Rating
            name="half-rating-read"
            defaultValue={rating}
            precision={0.5}
            readOnly
          />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Review;
