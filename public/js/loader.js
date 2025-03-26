document.addEventListener("DOMContentLoaded", function () {
  console.log("Loader.js: DOM fully loaded. Attempting to fetch chatbot.ejs...");

  fetch("/chatbot")
    .then((response) => {
      console.log("Loader.js: chatbot.ejs response status:", response.status);
      return response.text();
    })
    .then((html) => {
      console.log("Loader.js: Received chatbot.ejs content.");
      const container = document.createElement("div");
      container.innerHTML = html;
      document.body.appendChild(container);

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "/css/chatbot.css";
      document.head.appendChild(link);

      setTimeout(() => {
        const script = document.createElement("script");
        script.src = "/js/script.js";
        script.defer = true;
        document.body.appendChild(script);
    }, 100); // Delay script injection to ensure CSS is loaded first

      console.log("Loader.js: Chatbot injected successfully.");
    })
    .catch((err) => {
      console.error("Loader.js: Failed to load chatbot:", err);
    });
});
