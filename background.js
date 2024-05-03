chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
        if (details.url.indexOf("master_sd.mpd") != -1) {
            return {redirectUrl: details.url.replace("master_sd.mpd", "master.mpd")};
        }
    },
    {urls: ["https://*.nowtv.it/*", "https://*.skycdn.it/*", "https://*.skycdp.com/*"]},
    ["blocking"]
);
