import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./App.css";
import productsArray from "./products";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import Rating from "@mui/material/Rating";
import EmptyButton from "./EmptyButton";
import FilledButton from "./FilledButton";
import { Paper } from "@mui/material";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function createProduct(product) {
  return (
    <Grid item lg={3} md={4} sm={6} xs={6}>
      {/* <Paper variant="outlined">
        <img src={product.imageUrls[0]} height="191px" width="191px"></img>
        <Paper
          sx={{ width: "193px", height: "67px", background: "#000000" }}
        ></Paper>
      </Paper> */}
      <Card
        onClick={() => {
          window.open(product.productUrl, "_blank");
        }}
        className="cardStyle"
        variant="outlined"
        raised="true"
        sx={{ border: "1px solid rgba(0, 0, 0, 0.3)" }}
      >
        <CardMedia
          component="img"
          alt="product image"
          height="191px"
          width="191px"
          image={product.imageUrls[0]}
        />
        <CardContent sx={{ background: "#FFFFFF" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={8}>
              <Typography
                sx={{
                  fontFamily: "Neuton",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "12px",
                  lineHeight: "12px",
                  textTransform: "none",
                  textAlign: "left",
                  letterSpacing: "0.5px",
                }}
              >
                {product.name}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Button
                fontSize="medium"
                style={{
                  color: "#ED6B68",
                }}
                onClick={() => {
                  window.alert("Added to wishlist!");
                }}
              >
                <TurnedInNotIcon />
              </Button>
            </Grid>
            <Grid item xs={8}>
              <Typography
                sx={{
                  fontFamily: "Neuton",
                  fontStyle: "normal",
                  fontWeight: "300",
                  fontSize: "12px",
                  lineHeight: "12px",
                  textTransform: "none",
                  color: "rgba(0, 0, 0)",
                  textAlign: "left",
                }}
              >
                <b>{product.price}</b>
              </Typography>
            </Grid>
            {/* <Grid item xs={4}>
              <Button
                fontSize="small"
                style={{
                  color: "#ED6B68",
                }}
              >
                <OpenInNewIcon />
              </Button>
            </Grid> */}
          </Grid>
        </CardContent>
        {/* <Typography
            sx={{ height: 60 }}
            gutterBottom
            variant="body1"
            component="div"
          >
            {product.name}
          </Typography>
          <Typography
            sx={{ height: 20 }}
            variant="body1"
            color="text.secondary"
          >
            {product.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="outlined"
            style={{
              border: "1px solid #79747E",
              borderRadius: "100px",
              color: "#6750A4",
            }}
            onClick={() => {
              window.open(product.productUrl, "_blank");
            }}
          >
            View Product
          </Button>
          
        </CardActions> */}
      </Card>
    </Grid>
  );
}

function App() {
  return (
    <div className="NoApp">
      <Box sx={{ p: 2 }}>
        <Typography variant="h6">
          <b>Explore our selection!</b>
        </Typography>
      </Box>
      {/* <Container
        fixed
        className="productCategory"
        style={{
          border: "1px solid #000000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        sx={{
          background: `rgba(103, 80, 164, 0.06)`,
          borderRadius: 3,
          padding: "20px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item lg={3} md={3} sm={3} xs={3}>
            <Card
              value="all"
              className="cardStyle"
              variant="outlined"
              style={{ border: "1px solid #000000" }}
              sx={{ maxWidth: 345, maxHeight: 370, borderRadius: 3 }}
              raised="true"
            >
              <CardMedia
                component="img"
                alt="product image"
                height="140"
                style={{
                  marginTop: "20px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "50%",
                  borderRadius: "100%",
                  border: "2px solid #000000",
                }}
                image="https://cdn-icons-png.flaticon.com/512/5110/5110777.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  All
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={3} md={3} sm={3} xs={3}>
            <Card
              className="cardStyle"
              variant="outlined"
              style={{ border: "1px solid #000000" }}
              sx={{ maxWidth: 345, maxHeight: 370, borderRadius: 3 }}
              raised="true"
            >
              <CardMedia
                component="img"
                style={{
                  marginTop: "20px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "50%",
                  borderRadius: "100%",
                  border: "2px solid #000000",
                }}
                alt="product image"
                height="140"
                image="https://cdn-icons-png.flaticon.com/512/1946/1946430.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Trending
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={3} md={3} sm={3} xs={3}>
            <Card
              className="cardStyle"
              variant="outlined"
              style={{ border: "1px solid #000000" }}
              sx={{ maxWidth: 345, maxHeight: 370, borderRadius: 3 }}
              raised="true"
            >
              <CardMedia
                component="img"
                alt="product image"
                height="140"
                style={{
                  marginTop: "20px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "50%",
                  borderRadius: "100%",
                  border: "2px solid #000000",
                }}
                image="https://cdn-icons-png.flaticon.com/512/3159/3159002.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  For You
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={3} md={3} sm={3} xs={3}>
            <Card
              className="cardStyle"
              variant="outlined"
              style={{ border: "1px solid #000000" }}
              sx={{ maxWidth: 345, maxHeight: 370, borderRadius: 3 }}
              raised="true"
            >
              <CardMedia
                component="img"
                alt="product image"
                height="140"
                style={{
                  marginTop: "20px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "50%",
                  borderRadius: "100%",
                  border: "2px solid #000000",
                }}
                image="https://cdn-icons-png.flaticon.com/512/1359/1359308.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Favourites
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container> */}
      {/* <Container
        fixed
        style={{
          border: "2px solid #000000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        sx={{
          background: `rgba(103, 80, 164, 0.06)`,
          borderRadius: 3,
          marginTop: "50px",
          marginBottom: "100px",
          padding: "50px",
        }}
      > */}
      <Grid container sx={{ mt: 1 }} spacing={1}>
        {productsArray.map(createProduct)}
      </Grid>
      {/* </Container> */}
    </div>
  );
}

export default App;
