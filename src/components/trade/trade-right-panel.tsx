const TradeRightPanel = () => {
  return (
    <div className="space-y-3 p-4">
      <div className="grid grid-cols-3 border-b border-text-gray pb-2 text-sm text-text-gray">
        <p>Pair</p>
        <p className="text-right">Size</p>
        <p className="text-right">Price</p>
      </div>
      {data.map((item) => (
        <div key={item.id} className="grid grid-cols-3 text-sm">
          <p>
            <span style={{ color: item.pairStatusOne }}>
              {item.pairNameOne}
            </span>
            <span style={{ color: item.pairStatusTwo }}>
              /{item.pairNameTwo}
            </span>
          </p>
          <p className="text-right">{item.pairSize}</p>
          <p className="text-right" style={{ color: item.pairPriceStatus }}>
            {item.pairPrice}
          </p>
        </div>
      ))}
    </div>
  );
};

export { TradeRightPanel };

const data = [
  {
    id: 0,
    pairNameOne: "APE",
    pairStatusOne: "#fff",
    pairNameTwo: "BTC",
    pairStatusTwo: "#9C9C9C",
    pairSize: "15,126",
    pairPrice: "0.00020052",
    pairPriceStatus: "#fff",
  },
  {
    id: 1,
    pairNameOne: "API3",
    pairStatusOne: "#F24545",
    pairNameTwo: "BTC",
    pairStatusTwo: "#F24545",
    pairSize: "2,768",
    pairPrice: "0.00006235",
    pairPriceStatus: "#F24545",
  },
  {
    id: 2,
    pairNameOne: "APT",
    pairStatusOne: "#3CD963",
    pairNameTwo: "BTC",
    pairStatusTwo: "#3CD963",
    pairSize: "89,567",
    pairPrice: "0.00052597",
    pairPriceStatus: "#3CD963",
  },
  {
    id: 3,
    pairNameOne: "AR",
    pairStatusOne: "#fff",
    pairNameTwo: "BTC",
    pairStatusTwo: "#9C9C9C",
    pairSize: "4,235",
    pairPrice: "0.0003730",
    pairPriceStatus: "#fff",
  },
];
