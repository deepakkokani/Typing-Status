const inputBox = document.getElementById("chatbox");
const typingStatus = document.getElementById("typingstatus");

let typingTimer;

const showTyping = () => typingStatus.style.display = "block";
const hideTyping = () => typingStatus.style.display = "none";

const handleTyping = () =>{
    clearTimeout(typingTimer);
    showTyping();
    typingTimer = setTimeout(hideTyping, 1000);
};

inputBox.addEventListener('keydown', handleTyping)