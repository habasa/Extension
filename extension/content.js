console.log("Content script running");

chrome.runtime.sendMessage(
  { type: "GREETINGS", payload: "Hello from content script" },
  (response) => {
    console.log("Received response:", response);
  }
);

document.addEventListener("DOMContentLoaded", () => {
  const targetElement = document.querySelector(".LC20lb.MBeuO.DKV0Md");

  if (targetElement) {
    targetElement.addEventListener("click", () => {
      console.log("Element clicked: Hello, world!");

      // 클릭 이벤트 발생 시 백그라운드 스크립트로 메시지 전송
      chrome.runtime.sendMessage(
        { type: "ELEMENT_CLICKED", payload: "Hello, world!" },
        (response) => {
          console.log("Response from background:", response);
        }
      );
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const currentUrl = window.location.href;

  // 현재 페이지 URL을 백그라운드 스크립트로 전송
  chrome.runtime.sendMessage(
    { type: "PAGE_VISIT", url: currentUrl },
    (response) => {
      console.log("Received response:", response);
    }
  );
});
