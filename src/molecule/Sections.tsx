import ItemType from "../atoms/Itemtype";

export const Sections = [
  {
    id: 1,
    title: "30% Off",
    centeredContent: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "start" }}>
          <div>&nbsp;&nbsp;Buy 1 Get 2&nbsp;</div>
        </div>
      </div>
    ),
    discountPercent: (
      <>
        <span style={{ backgroundColor: "#ff6b82", padding: 4 }}>10% Off</span>
      </>
    ),
    currentPrice: "$10.00 USD",
    oldPrice: "$18.00 USD",

    content: (
      <>
        <ItemType />
      </>
    ),
  },
  {
    id: 2,
    title: "30% Off",
    centeredContent: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "start" }}>
          <div>&nbsp;&nbsp;Buy 1 Get 2&nbsp;</div>
        </div>
      </div>
    ),
    discountPercent: (
      <>
        <span style={{ backgroundColor: "#ff6b82", padding: 4 }}>10% Off</span>
      </>
    ),
    currentPrice: "$10.00 USD",
    oldPrice: "$18.00 USD",
    optionalText: "Most Popular",
    content: (
      <>
        <ItemType />
      </>
    ),
  },
  {
    id: 3,
    title: "30% Off",
    centeredContent: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "start" }}>
          <div>&nbsp;&nbsp;Buy 1 Get 2&nbsp;</div>
        </div>
      </div>
    ),
    discountPercent: (
      <>
        <span style={{ backgroundColor: "#ff6b82", padding: 4 }}>10% Off</span>
      </>
    ),
    currentPrice: "$10.00 USD",
    oldPrice: "$18.00 USD",

    content: (
      <>
        <ItemType />
      </>
    ),
  },
];
