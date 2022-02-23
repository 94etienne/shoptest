import StripeCheckout from 'react-stripe-checkout'; //added
import {useState,useEffect} from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';


const KEY ="pk_test_51HueWWKP2X020GgTQbHLuAhdM9tViriJ4BEOjZTG5LWPX2AEBCr0kEaWHaiwtXGO3XXnuzuEL16yjkQRWZXj5zs700bmg7wFsO";
 

const Pay = () => {
    // SEND DATA TO DB AND STRIPE SERVER
    const [stripeToken,setStripeToken] = useState(null);
    const history = useHistory();
    // PAYMENT TOKEN
    const onToken = (token)=>{
        // console.log(token);
        setStripeToken(token);
    }
    useEffect(()=>{
const makeRequest = async () => {
    try {
       const res = await axios.post(
           "http://localhost:8000/api/checkout/payment",
       {
       tokenId: stripeToken.id, 
       amount: 2000, 

       }
       );
       console.log(res.data);
       history.push("/success")
    } catch (err) {
        console.log(err);
        
    }
};
stripeToken && makeRequest(); //makeRequest == method call from above
    },[stripeToken, history]);//stripeToken===dependency
  return (<div
  style={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
  }}
  > 
  {stripeToken ? (<span>Processing. Please wait...</span>) : (

  
      <StripeCheckout name="Akeza Solution Ltd."
       image="img/2.png"
       billingAddress
       shippingAddress
       description="Your Total is $20"
       amount={2000}
       token = {onToken}
       stripeKey = {KEY}
       >

      
      <button
      style={{
          border: "none",
          width: 120,
          borderRadius: 5,
          padding: "20px",
          backgroundColor: "black",
          color: "white",
          cursor: "pointer",
          fontWeight: "600"
      }}
      >
          Pay Now
      </button>
      </StripeCheckout>
      )}
  </div>
  );
};

export default Pay;
