import {
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faPeopleCarry,
  faHeart,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import "./WhyChooseUs.css";
import { Box } from "@mui/system";

const WhyChooseUs = () => {
  return (
    <Container sx={{ my: 3, py: 3 }}>
      <Typography
        className="whychooseus"
        sx={{ textAlign: "center", fontWeight: "bold", mb: 3 }}
        variant="h3"
        gutterBottom
        component="div"
      >
        Plenty of Reasons To Choose Us
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3} lg={3}>
          <Card variant="outlined" style={{ height: "270px" }}>
            <CardActionArea>
              <Box sx={{ p: 2, textAlign: "center" }}>
                <FontAwesomeIcon
                  className="icon-color"
                  icon={faThumbsUp}
                  size="5x"
                />
              </Box>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Excellent reputation
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Our comprehensive database of listings and market info give
                  the most accurate view of the market and your home value.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <Card variant="outlined" style={{ height: "270px" }}>
            <CardActionArea>
              <Box sx={{ p: 2, textAlign: "center" }}>
                <FontAwesomeIcon
                  className="icon-color"
                  icon={faPeopleCarry}
                  size="5x"
                />
              </Box>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Best local agents
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  You are just minutes from joining with the best agents who are
                  fired up about helping you Buy or sell.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <Card variant="outlined" style={{ height: "270px" }}>
            <CardActionArea>
              <Box sx={{ p: 2, textAlign: "center" }}>
                <FontAwesomeIcon
                  className="icon-color"
                  icon={faHeart}
                  size="5x"
                />
              </Box>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Peace of mind
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Rest guaranteed that your agent and their expert team are
                  handling every detail of your transaction from start to end.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <Card variant="outlined" style={{ height: "270px" }}>
            <CardActionArea>
              <Box sx={{ p: 2, textAlign: "center" }}>
                <FontAwesomeIcon
                  className="icon-color"
                  icon={faHome}
                  size="5x"
                />
              </Box>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Tons of options
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Discover a place you’ll love to live in. Choose from our vast
                  inventory and choose your desired house.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhyChooseUs;
