document.addEventListener("DOMContentLoaded", function () {
    const icon = document.getElementById("chatbot-icon");
    const chatbox = document.getElementById("chatbox");
  
    if (icon && chatbox) {
      icon.addEventListener("click", () => {
        chatbox.style.display = (chatbox.style.display === "none" || !chatbox.style.display) 
            ? "block" 
            : "none";
    });
    
}
  
    const chatInput = document.getElementById("chat-input");
    const chatContent = document.getElementById("chat-content");
  
    document.getElementById("chat-input").addEventListener("keypress", async function (e) {
      if (e.key === "Enter" && chatInput.value.trim() !== "") {
        const userMessage = chatInput.value.trim();
        chatContent.innerHTML += `<div class="user-message">${userMessage}</div>`;
        chatInput.value = "";
  
        try {
          const response = await fetch("/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: userMessage }),
          });
  
          const data = await response.json();
          chatContent.innerHTML += `<div class="bot-message">${data.response}</div>`;
          chatContent.scrollTop = chatContent.scrollHeight;
        } catch (error) {
          chatContent.innerHTML += `<div class="error-message">Error: Unable to fetch response.</div>`;
        }
      }
    });
  });
  