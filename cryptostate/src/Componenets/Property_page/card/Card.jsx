import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import "./Card.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
export default function MediaCard() {
  const info = {
    owner: "0xE11BA2b4D45Eaed5996Cd0823791E0C93114882d",
    price: 10,
    place: "Bhopal",
    address: "bhopal gandhi Nager 12.o",
  };

  return (
    <div className="Card">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Owner:0xE11BA2b4D45Eaed5996Cd0823791E0C93114882d
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price:
            <AttachMoneyIcon className="monye" />
            10
          </Typography>
          <Typography variant="body2" csolor="text.secondary">
            Place:Bhopal
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            to={{
              pathname: "/moreInfo",
              state: {
                owner:"0xE11BA2b4D45Eaed5996Cd0823791E0C93114882d",
                price:10,
                Place:"Bhopal",
                Image:"https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                adress:"gandhi Bhopal 13"
              },
            }}
          >
            <Button size="small">
              {" "}
              More Info <ArrowForwardIosIcon className="monye" />
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}
