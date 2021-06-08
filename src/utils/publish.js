import PubSub from 'pubsub-js'

export const TOPIC = "topic";

const DELAY = 5000;

const i = 0;
const init = () => {
    const data = "some data"
    setInterval(() => {
        console.log(`Publishing message: ${i}`)
        PubSub.publish(TOPIC, data)
    }, DELAY);
}

export default init();