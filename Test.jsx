import React, { useContext ,useState,useEffect} from "react";
import axios from "axios";
import Order from "./Order";
import Products from "../Products/Products";
import "./Order.scss";

const Test = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(process.env.REACT_APP_STRIPE_APP_DEV_URL + "/api/orders", {
            headers: { Authorization: "bearer " + process.env.REACT_APP_STRIPE_DEV_APP_KEY, },
          });
          
          
           console.log(res)
           const mydata = res.data?.data;
          setProducts(mydata);
           console.log(mydata);
          
        
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);
    
  
    return (
        <div className="myorder">
            <h3>MY ORDERS</h3>
           {!products.length &&  <h3>Sorry ,no Orders Found</h3> 
            
           }
       {products.map((product, index) => {

const data =product?.attributes?.products[0].attributes;

 return   <Order data={data} key={index}/>;

})}
      </div>
    )}

  
  export default Test