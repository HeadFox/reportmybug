chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        switch(message.type) {
            case "getClientInfos":
              const { 
                userAgent, 
                language, 
                platform,
                connection,
                deviceMemory,
              } = window.clientInformation;
              const browser = {
                userAgent,
                language,
                platform,
                connection: connection.effectiveType,
                deviceMemory,
              };
              const res = {browser, body: window.document.body};
                sendResponse(res);
              break;
        }
    }
);