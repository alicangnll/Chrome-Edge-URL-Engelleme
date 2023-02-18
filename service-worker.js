// RAM dostu olarak cache kullanabilirsiniz
//chrome.runtime.onInstalled.addListener(() => {
//let [tab] = chrome.tabs.query(queryOptions);
//console.log(tab)
//chrome.scripting.executeScript({
//function: showAlert
//}) 
//});

function Update() {
  chrome.windows.create({ url: "wait.html" });
  fetch('https://www.usom.gov.tr/url-list.txt').then(function (response) {
    response.text().then(function (text) {
      const result = text.split("\n");
      for (var i = 0; i < result.length; i++) {
        const sonuc = 1001 + i;
        chrome.declarativeNetRequest.updateDynamicRules({removeRuleIds: [sonuc], addRules: [{ "id": sonuc, "priority": 1, "action": { "type": "block"}, "condition": { "urlFilter": "" + result[i] + "", "resourceTypes": ["main_frame", "sub_frame", "stylesheet", "script", "image", "xmlhttprequest", "font", "object", "ping", "websocket", "csp_report", "media", "other"] } }]});
      }
    });
    chrome.windows.create({ url: "ok.html" });
  });
}
Update();
