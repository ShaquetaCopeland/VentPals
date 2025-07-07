// chat.js
import { auth, db, onAuthStateChanged } from '../../firebase-config.js';
import {
  ref,
  push,
  onChildAdded
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const messageForm = document.getElementById("message-form");
const messageInput = document.getElementById("message-input");
const chatWindow = document.getElementById("chat-window");

// Check if the user is logged in
onAuthStateChanged(auth, (user) => {
  if (user) {
    const userId = user.uid;

    // Listen for new messages
    const messagesRef = ref(db, "messages");
    onChildAdded(messagesRef, (snapshot) => {
      const message = snapshot.val();
      displayMessage(message.text, message.username || "Anonymous");
    });

    // Send a message
    messageForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const text = messageInput.value.trim();
      if (text) {
        push(messagesRef, {
          text,
          userId,
          username: user.displayName || "Anonymous",
          timestamp: Date.now()
        });
        messageInput.value = "";
      }
    });

  } else {
    alert("Please log in to access the chatroom.");
    window.location.href = "login.html";
  }
});

function displayMessage(text, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message");
  messageDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatWindow.appendChild(messageDiv);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}
