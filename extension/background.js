// background.js or any other script in the extension
// chrome.history.search({ text: "", maxResults: 10 }, function (data) {
//   data.forEach(function (page) {
//     console.log(page.url);
//   });
// });

chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "GREETINGS") {
    console.log("Received message:", message);
    sendResponse({ message: "Hello from background script" });
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "ELEMENT_CLICKED") {
    console.log("Received element clicked message:", message.payload);
    sendResponse({ message: "Log received" });
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "PAGE_VISIT") {
    console.log("Page visited:", message.url);
    sendResponse({ message: "URL received" });
  }
});
