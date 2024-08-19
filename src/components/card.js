import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Rating } from "@mui/material";

export default function CardItem({ foodItem }) {
  const screenWidth = window.innerWidth;
  let cardWidth;

 if (screenWidth >= 1024) {
    cardWidth = 300;
  }
  else if (screenWidth >= 768) {
    cardWidth = 200;
  } else {
    cardWidth = 250;
  }
  return (
    <Card sx={{ maxWidth: cardWidth, borderRadius: 3 }}>
      <CardActionArea>
        <CardMedia component="img" image={foodItem.src} alt={foodItem.name} />
        <CardContent>
          <Typography gutterBottom variant={screenWidth >= 1024 ? "h5" : "h6"} component="div">
            {foodItem.name}
          </Typography>
          <Typography variant={screenWidth >= 1024 ? "body2" : "subtitle2"} color="text.secondary">
            {foodItem.description}
          </Typography>
          <Rating name="read-only" value={foodItem.rating} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
