export default function TotalAmount() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "342px", // Ensure it takes the full width of its container
        padding: "10px 20px", // Optional: Add some padding if needed
      }}
    >
      <span
        style={{
          color: "#ff6b82",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "16.94px",
        }}
      >
        Free Delivery
      </span>
      <span
        style={{
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "16.94px",
        }}
      >
        Total : <span style={{ fontWeight: "bold" }}>$18.00 USD</span>
      </span>
    </div>
  );
}
