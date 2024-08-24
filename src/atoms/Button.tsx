import PlusIcon from "../svg/PlusIcon";

export default function CustomButton() {
  return (
    <>
      <button
        style={{
          width: "342px",
          padding: "10px",
          borderRadius: "4px",
          background: "#ff6b82",
          borderColor: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px", // Space between the icon and text
          cursor: "pointer",
          fontSize: "16px",
          color: "#fff",
        }}
        type="button"
      >
        <PlusIcon width="20" height="20" color="white" />
        Add to Cart
      </button>
    </>
  );
}
