import React from 'react';

const Success = () => {
  return  (<div
  style={{
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  
    `Order has been created successfully. Your order number is`
    `Successfull. Your order is being prepared...`
  <button style={{
          border: "none",
          width: 240,
          borderRadius: 5,
          padding: "20px",
          backgroundColor: "green",
          color: "white",
          cursor: "pointer",
          fontWeight: "600"
      }}>Go to Homepage</button>
</div>
  );
};

export default Success;
