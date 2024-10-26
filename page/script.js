const tableBody = document.querySelector("#tableBody");

const basketData = localStorage.getItem("basket");
const parsedData = JSON.parse(basketData);
const filteredData = parsedData.map(
  ({
    prodid,
    shorttext,
    current_price,
    stock_expiry_date,
    quantity,
    barcode,
    ...rest
  }) => ({
    prodid,
    shorttext,
    current_price,
    stock_expiry_date,
    quantity,
    barcode,
  })
);

filteredData.forEach((item) => {
  const row = document.createElement("tr");
  let barcode;
  for (const [key, value] of Object.entries(item)) {
    const cell = document.createElement("td");

    if (key == "barcode") {
      cell.innerHTML = `<svg class="barcode" id="barcode-${value}"></svg>`;
      barcode = value;
    } else if (key == "current_price") {
      cell.innerHTML = Math.round(value * 100) / 100;
    } else {
      cell.innerHTML = value;
    }
    row.appendChild(cell);
  }
  tableBody.appendChild(row);
  JsBarcode(`#barcode-${barcode}`, barcode, { height: 50 });
});
