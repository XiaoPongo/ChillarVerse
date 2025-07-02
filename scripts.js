// Function to include HTML components
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) { elmnt.innerHTML = this.responseText; }
            if (this.status == 404) { elmnt.innerHTML = "Component not found."; }
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        return;
      }
    }
  }
  
  // Apply config values
  document.addEventListener("DOMContentLoaded", function() {
    document.title = siteConfig.siteName;
    // Example: Set CSS variables dynamically
    document.documentElement.style.setProperty('--primary-color', siteConfig.themeColors.primary);
    document.documentElement.style.setProperty('--secondary-color', siteConfig.themeColors.secondary);
    document.documentElement.style.setProperty('--background-color', siteConfig.themeColors.background);
    document.documentElement.style.setProperty('--accent-color', siteConfig.themeColors.accent);
  });