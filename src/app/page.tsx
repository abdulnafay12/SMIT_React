import AllProduct from "./allproducts";
import Categories from "./categories";
import MyInfo from "./myinfo";
import { useState } from "react";




export default function Home(){
  return(
    <>
     <MyInfo/>
     <Categories/>
     <AllProduct/>
    </>
  );
}