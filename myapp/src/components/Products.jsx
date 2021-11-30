/* import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Container = styled.div`
  padding: 20vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  console.log(cat, filters, sort);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? "http:localhost:5000/api/products?category =${cat}"
            : "http:localhost:5000/api/products"
        );
        console.log("suck my cock");
        setProducts(res.data);
      } catch (err) {
        console.log("suck my cock");
      }
    };
    getProducts();
  }, [cat]);

       productsUpdate
  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  return (
    <Container>
      {filteredProducts.map((item) => ( 
      //{popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

    const getProducts = async () =>{
      try{
        const res = await axios.get("http:localhost:5000/CFCSDatabase/products");
        console.log(res);
     main

export default Products; */

import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Container = styled.div`
  padding: 20vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? "http:localhost:5000/api/products?category=${cat}"
            : "http://localhost:5000/api/products"
        );
        console.log(res);
      } catch (err) {
        console.log("Error 404");
      }
    };
    getProducts();
  }, [cat]);
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};
export default Products;
