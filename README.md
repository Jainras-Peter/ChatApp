
# Chat app 💬 using websockets (Nodejs, Express & Socket.io)

I developed a chat application using Express, Websockets. Tough you can use plain websockets but i would be using a library called Socket.io - which is wrapper around Websockets, its super easy to use and provides a fallback to xhr requests until the websocket connection is established.

The frontend-ui is based on Flexbox, no external UI libraries are used, so you can modify it as per your liking.

---

## What is Websocket ?

WebSockets are an alternative to HTTP communication in Web Application, they offer full-duplex communication, that is, it is, bi-directional and that means the data can flow in both ways, so it can flow from client to the server and also from server to the client.

---

## To start setting up the project

Step 1: Clone the repo

```bash
git clone https://github.com/Jainras-Peter/ChatApp.git
```

Step 2: cd into the cloned repo and run:

```bash
npm install
```

Step 3: Start the chat app (development mode)

```bash
npm run dev
```

Step 4: Start the chat app

```bash
npm start
```


## Contribute
Contributions are welcome! Follow these steps:

1.Fork the repository.

2.Create a new branch:
```bash
git checkout -b feature/your-feature-name
```

3.Make your changes and commit:
```bash
git commit -m "Add new feature"
```

4.Push the changes:
```bash
git push origin feature/your-feature-name
```

5.Open a pull request.

## License

This project is licensed under the MIT License.
