import React from "react";

function ProductCard({ name, price, isAvailable }) {
  // Format harga ke format rupiah
  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  return (
    <>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "16px",
          width: "250px",
          margin: "10px",
          backgroundColor: "#fff",
        }}
      >
        <h3>{name}</h3>
        {isAvailable ? (
          <p style={{ color: "green", fontWeight: "bold" }}>
            {formatRupiah(price)}
          </p>
        ) : (
          <p style={{ color: "gray", fontStyle: "italic" }}>Stok Habis</p>
        )}
      </div>
    </>
  );
}

export default ProductCard;
