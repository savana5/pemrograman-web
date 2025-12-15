import React from "react";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <>
      <h1>Daftar Produk</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <ProductCard name="Laptop ASUS" price={12500000} isAvailable={true} />
        <ProductCard name="Mouse Logitech" price={250000} isAvailable={false} />
        <ProductCard name="Keyboard Rexus" price={500000} isAvailable={true} />
      </div>
    </>
  );
}

export default App;
