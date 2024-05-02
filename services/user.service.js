import { ServiceBroker } from "moleculer";
import { v4 as uuidv4 } from 'uuid';

const broker = new ServiceBroker();


const users = [];

broker.createService({
    name: 'user',
    actions: {
        async createUser(ctx) {
            const { username, email } = ctx.params;
            const newUser = {
                id: uuidv4(),
                username,
                email,
            }

            users.push(newUser);

            return newUser;

        },

        async getUsers(ctx) {
            return users;
        }
    }
})

export default broker;