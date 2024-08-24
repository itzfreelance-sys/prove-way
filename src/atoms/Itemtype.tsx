export default function ItemType() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          gap: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <label htmlFor="size">Size</label>
          <select id="size" name="size">
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <label htmlFor="color">Color</label>
          <select id="color" name="color">
            <option value="Red">Red</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="Yellow">Yellow</option>
          </select>
        </div>
      </div>
    </>
  );
}
