import axios from 'axios';
const report = document.getElementById("report");

report.addEventListener("click", () => {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.captureVisibleTab((screenshot) => {
            chrome.tabs.sendMessage(tabs[0].id, {type:"getClientInfos"}, function(res){
                axios({
                  url: 'http://localhost:8000',
                  method: 'post',
                  data: {
                      browser: res.browser,
                      screenshot,
                  },
                });
            })
        });
    });

});

// chrome.tabs.query({currentWindow: true}, (res) => {
// })
