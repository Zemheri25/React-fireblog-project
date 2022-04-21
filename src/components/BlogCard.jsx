import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./BlogCard.css";
import {AuthContext} from "../contexts/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ item }) => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const handleNavigate = () => {
    if (currentUser) {
      navigate("/details", {state : {item}});

    } else {
      alert("Please sign in or register !");
      navigate("/register");
    }
  };
  return (
    <Card sx={{ maxWidth: 345 }} onClick={handleNavigate}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.imgurl}
          alt="green iguana"
        />
        <div className="cardcontent">
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ color: "#04617D" }}
            >
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.date}
            </Typography>
            <p style={{ fontSize: "13px" }}>{item.content.slice(0, 150)}...</p>
          </CardContent>
        </div>
      </CardActionArea>
    </Card>
  );
};

export default BlogCard;
