document.addEventListener("DOMContentLoaded", function () {
  const icon = document.getElementById("chatbot-icon");
  const chatbox = document.getElementById("chatbox");
  const chatInput = document.getElementById("chat-input");
  const chatContent = document.getElementById("chat-content");

  if (icon && chatbox) {
      icon.addEventListener("click", () => {
          chatbox.style.display = chatbox.style.display === "none" ? "block" : "none";
      });
  }

  if (chatInput && chatContent) {
      chatInput.addEventListener("keypress", async function (e) {
          if (e.key === "Enter" && chatInput.value.trim() !== "") {
              const userMessage = chatInput.value.trim();
              chatContent.innerHTML += `<div class="user-message">${userMessage}</div>`;
              chatInput.value = "";

              try {
                  const response = await fetch("https://api.openai.com/v1/chat/completions", {
                      method: "POST",
                      headers: {
                          "Content-Type": "application/json",
                          "Authorization": `Bearer YOUR_OPENAI_API_KEY` 
                      },
                      body: JSON.stringify({
                          model: "gpt-3.5-turbo",
                          messages: [{ role: "user", content: userMessage }],
                          max_tokens: 100
                      })
                  });

                  const data = await response.json();
                  const botResponse = data.choices?.[0]?.message?.content || "I'm sorry, I didn't understand that.";
                  chatContent.innerHTML += `<div class="bot-message">${botResponse}</div>`;
                  chatContent.scrollTop = chatContent.scrollHeight;
              } catch (error) {
                  chatContent.innerHTML += `<div class="error-message">Error: Unable to fetch response.</div>`;
              }
          }
      });
  }
});
