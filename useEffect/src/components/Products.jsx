import React, { useEffect, useState } from "react";
import "./Products.css";

const Products = () => {
  let [data, setData] = useState([]);
  let [search, setSearch] = useState("")
  let [filertData , setFilterData] = useState([])

  let getData = async () => {
    let data = await fetch("https://fakestoreapi.com/products");
    let originalData = await data.json();
    // console.log(originalData)

    setData(originalData);
    setFilterData(originalData)
  };

  let handleSearch =(e)=>{

    let searchQuery = e.target.value.toLowerCase()
    setSearch(searchQuery)

    let afterfilter = data.filter((ele) => ele.title.toLowerCase().includes(searchQuery))

    setFilterData(afterfilter)

  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <nav>

          <input type="text" name="" id=""  value={search} onChange={handleSearch} />
      </nav>

      <main>
        {  filertData.length > 0 ? 
        (
          filertData.map((e, index) => {
            return (
              <div className="card" key={index}>
                <img src={e.image} alt="" />
  
                <h2> title :{e.title.slice(0, 20)}</h2>
  
                <h3>price :{e.price}</h3>
  
                <h4>rating : {e.rating.rate}</h4>
              </div>
            );
          }
        ) 
        ) : <h1> DATA NOT FOUND</h1>    
        
        }
      </main>

      <footer></footer>
    </>
  );
};

export default Products;
