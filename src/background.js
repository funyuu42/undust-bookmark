// Standard background.js for a Chrome extension

// Event listener for when the extension is installed or updated
chrome.runtime.onInstalled.addListener(() => {
  // Perform any necessary setup or initialization here

  
});



// Event listener for when the extension is first run
chrome.runtime.onStartup.addListener(() => {
  // Perform any necessary setup or initialization here
});

// Event listener for when the extension is uninstalled
chrome.runtime.onUninstalled.addListener(() => {
  // Perform any necessary cleanup or finalization here
});
