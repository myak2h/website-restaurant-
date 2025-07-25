// components/Navbar.jsx
import { Link } from "react-router-dom"; // or 'next/link' if using Next.js

export default function Navbar() {
  return (
    <div style={{
      background: "black",
      padding: "1rem",
      display: "flex",
      gap: "1rem",
      justifyContent: "center"
    }}>
      <Link to="/"><button style={btnStyle}>HOME</button></Link>
      <Link to="/about"><button style={btnStyle}>About</button></Link>
      <Link to="/menu"><button style={btnStyle}>Menu</button></Link>
      <Link to="/shop"><button style={btnStyle}>Shop</button></Link>
      
    </div>
    
  );
}

const btnStyle = {
  background: "yellow",
  padding: "0.5rem 1rem",
  borderRadius: "10px"
};
