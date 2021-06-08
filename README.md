# Snippet for PubSub issue

### Files description

Frontend is created with React hooks. 

[publish.js](./src/utils/publish.js): send a message with PubSub.publish() on interval

[App.js](./src/App.js): main react component. Here we do PubSub.subscribe()

### Bug description

For each single message sent with `publish()` there are two messages received on `subscribe()`