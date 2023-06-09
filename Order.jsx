import React from "react";
import "./Order.scss";
const Order = ({ data }) => {
  
  
  const created = data?.createdAt; // Check if data exists before accessing createdAt
  const formattedDate = created ? new Date(created).toLocaleDateString() : '';

  return (


    <>
   
        <div className="my-orders-container">
       hhhhhh
          <img src={
            process.env.REACT_APP_STRIPE_APP_DEV_URL +
            data?.img?.data[0]?.attributes.url
          } alt="" />
        
        {!data.length && (<div className="order-item">
          
            <h3 className="order-number"></h3>
            
            <p className="order-date">Date: {formattedDate}</p>

            <p className="order-date">Amount:&#8377;{data?.price}</p>
            <p className="order-date">   {data?.title}</p>
            <p className="order-date"> Quantity{data?.quantity}</p>
          
          </div>)
}
{!!data.length && (<div className="order-item">
          
        <h1>no orders</h1>
        
        </div>)}
        
        </div>
         
        
    </>
  );
};

export default Order;
