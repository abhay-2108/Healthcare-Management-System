document.addEventListener("DOMContentLoaded", function () {
  console.log("Loader.js: DOM fully loaded. Injecting chatbot...");

  const chatbotHTML = `
      <div id="chatbot-container">
        <div id="chatbot-icon">
          <img src="/images/Medico.jpg" alt="Chatbot">
        </div>
        <div id="chatbox">
          <div id="chat-header">Medico Chatbot</div>
          <div id="chat-content"></div>
          <input type="text" id="chat-input" placeholder="Type a message...">
        </div>
      </div>
  `;

  const container = document.createElement("div");
  container.innerHTML = chatbotHTML;
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
  }, 100);

  console.log("Loader.js: Chatbot injected successfully.");
});
