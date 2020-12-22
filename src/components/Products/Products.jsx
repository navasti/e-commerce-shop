import React from "react";
import { Grid } from "@material-ui/core";

// Components
import Product from "./Product/Product";

// Styles
import useStyles from "./styles";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes.",
    price: "$5",
    image:
      "https://cdn.pixabay.com/photo/2015/09/30/16/06/feet-965688_1280.jpg",
  },
  {
    id: 2,
    name: "Macbook",
    description: "Apple macbook.",
    price: "$10",
    image:
      "https://cdn.pixabay.com/photo/2014/05/02/21/47/laptop-336369_1280.jpg",
  },
];

const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
