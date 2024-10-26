let isSidePanelOpened = false;
const LACKMANN_URL = "*://lackmann.shop/*/api/order/basket";

chrome.action.onClicked.addListener((tab) => {
  toggleSidePanel(tab);
  if (tab.url.startsWith(LACKMANN_URL)) {
    chrome.scripting
      .executeScript({
        target: { tabId: tab.id },
        files: ["script.js"],
      })
      .then("Script successfully injected");
  }
});

// chrome.webRequest.onCompleted.addListener(
//   async (details) => {
//     chrome.runtime.sendMessage("productAdded");
//   },
//   { urls: [LACKMANN_URL] }
// );

// chrome.webRequest.onBeforeRequest.addListener(
//   async (details) => {
//     console.log("request sent", details);
//     console.log(
//       "data",
//       decodeURIComponent(
//         String.fromCharCode.apply(
//           null,
//           new Uint8Array(details.requestBody.raw[0].bytes)
//         )
//       )
//     );
//   },
//   { urls: [LACKMANN_URL] },
//   ["requestBody"]
// );

chrome.webRequest.onResponseStarted.addListener(
  async (details) => {
    console.log(details);
    if (details.method === "POST") {
      chrome.runtime.sendMessage("productAdded");
    }
  },
  { urls: [LACKMANN_URL] },
  ["responseHeaders"]
);

const toggleSidePanel = (tab) => {
  if (!isSidePanelOpened) {
    chrome.sidePanel.open({ windowId: tab.windowId });
    isSidePanelOpened = true;
  } else {
    chrome.runtime.sendMessage("closeSidePanel");
    isSidePanelOpened = false;
  }
};
