const table = document.querySelector("#productTable");

chrome.runtime.onMessage.addListener(async (message) => {
  // Might not be as easy if there are multiple side panels open
  if (message === "closeSidePanel") {
    window.close();
  }
  if (message === "productAdded") {
    fillTable();
  }
});

const fillTable = async () => {
  const data = await fetch(
    "https://lackmann.shop/en/api/order/basket"
  );
  const basketData = await data.json();
  const basketItems = basketData.items;
  localStorage.clear();
  resetTable();
  basketItems.forEach((item) => {
    const {
      prodid,
      shorttext,
      current_price,
      stock_expiry_date,
      quantity,
      barcode,
      ...rest
    } = item;
    const row = createRow({
      prodid,
      shorttext,
      current_price,
      stock_expiry_date,
      quantity,
      barcode,
    });
    localStorage.setItem(
      "basket",
      JSON.stringify(basketItems)
    );
    table.appendChild(row);
    fillRowBarcode(barcode);
  });
};

const createRow = (values) => {
  const row = document.createElement("tr");
  for (const [key, value] of Object.entries(values)) {
    const cell = document.createElement("td");

    if (key == "barcode") {
      cell.innerHTML = `<svg class="barcode" id="barcode-${value}"></svg>`;
    } else if (key == "current_price") {
      cell.innerHTML = Math.round(value * 100) / 100;
    } else {
      cell.innerHTML = value;
    }
    row.appendChild(cell);
  }
  return row;
};

const resetTable = () => {
  table.innerHTML = `<tr>
        <th>ID</th>
        <th>Nome</th>
        <th>Prezzo</th>
        <th>Scadenza</th>
        <th>Quantity</th>
        <th>Barcode</th>
      </tr>`;
};

const printWindow = () => {
  window.open("./page/page.html");
};

document
  .querySelector("#printButton")
  .addEventListener("click", printWindow);

document
  .querySelector("#resetButton")
  .addEventListener("click", resetTable);

document
  .querySelector("#syncButton")
  .addEventListener("click", fillTable);

// prodid,
// shorttext,
// current_price,
// stock_expiry_date,
// quantity,
// barcode,

const fillRowBarcode = (value) => {
  JsBarcode(`#barcode-${value}`, value);
};
