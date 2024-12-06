import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Rating } from "@mui/material";
// import nonNeg from "../assets/images/Non_veg_symbol.svg"
// import veg from "../assets/images/Veg_symbol.svg"
export default function CardItem({ foodItem }) {
  const screenWidth = window.innerWidth;
  let cardWidth;

  if (screenWidth >= 1024) {
    cardWidth = 300;
  } else if (screenWidth >= 768) {
    cardWidth = 200;
  } else {
    cardWidth = 250;
  }
  return (
    <Card sx={{ maxWidth: cardWidth, borderRadius: 3 }}>
      <CardActionArea>
        <CardMedia component="img" image={foodItem.src} alt={foodItem.name} />
        <CardContent>
          <Typography
            gutterBottom
            variant={screenWidth >= 1024 ? "h5" : "h6"}
            component="div"
            sx={{ fontFamily: "'Anek Telugu', sans-serif", fontWeight: "600", display: "flex", justifyContent: "space-between" }}
          >
            {foodItem?.name}
            {foodItem?.type === "veg" ? (
              <div className="border-2 border-[#008200] w-5 h-5 flex justify-center items-center">
                <span className="bg-[#008200] rounded-full w-3 h-3"></span>
              </div>
            ) : foodItem?.type === "nonVeg" ? (
              <div className="border-2 border-[#9C3B14]  w-5 h-5 flex justify-center items-center">
                <span className="bg-[#9C3B14] rounded-full w-3 h-3"></span>
              </div>
            ) : foodItem?.type === "veg/nonVeg" ? (
              <div className="flex gap-1">
                <div className="border-2 border-[#008200] w-5 h-5 flex justify-center items-center">
                  <span className="bg-[#008200] rounded-full w-3 h-3"></span>
                </div>
                <div className="border-2 border-[#9C3B14]  w-5 h-5 flex justify-center items-center">
                  <span className="bg-[#9C3B14] rounded-full w-3 h-3"></span>
                </div>
              </div>
            ) : (
              ""
            )}
          </Typography>
          <Typography
            variant={"subtitle1"}
            color="text.secondary"
            sx={{ fontFamily: "'Anek Telugu', sans-serif" }}
          >
            {foodItem?.description}
          </Typography>
          <Rating name="read-only" value={foodItem?.rating} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
