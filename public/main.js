const socket = io()

const usernameScreen = document.getElementById('username-screen')
const chatScreen = document.getElementById('chat-screen')
const usernameInput = document.getElementById('username-input')
const joinChatBtn = document.getElementById('join-chat-btn')

const clientsTotal = document.getElementById('client-total')
const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('message-form')
const messageInput = document.getElementById('message-input')

let username = ''

// Handle username submission
joinChatBtn.addEventListener('click', () => {
    username = usernameInput.value.trim()
    if (username === '') return alert("Please enter a valid name!")

    // Hide username screen & show chat screen
    usernameScreen.classList.add('hidden')
    chatScreen.classList.remove('hidden')

    // Send username to the server
    socket.emit('user-joined', username)
})

// Handle messages
messageForm.addEventListener('submit', (e) => {
    e.preventDefault()
    sendMessage()
})

socket.on('clients-total', (data) => {
    clientsTotal.innerText = `Total Clients: ${data}`
})

socket.on('chat-message', (data) => {
    addMessageToUI(data.name === "System" ? false : true, data)
})

function sendMessage() {
    if (messageInput.value === '') return

    const data = {
        name: username,
        message: messageInput.value,
        dateTime: new Date(),
    }

    socket.emit('message', data)
    addMessageToUI(true, data)
    messageInput.value = ''
}

function addMessageToUI(isOwnMessage, data) {
    const element = `
        <li class="${isOwnMessage ? 'message-right' : 'message-left'}">
            <p class="message">
                ${data.message}
                <span>${data.name} ● ${new Date(data.dateTime).toLocaleTimeString()}</span>
            </p>
        </li>
    `

    messageContainer.innerHTML += element
    messageContainer.scrollTo(0, messageContainer.scrollHeight)
}
