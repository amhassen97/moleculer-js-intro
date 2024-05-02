import { ServiceBroker } from "moleculer";

const broker = new ServiceBroker();


broker.createService({
    name: 'auth',
    actions: {

        async authenticateUser(ctx) {
            const { username, password } = ctx.params;

            // Simulate authentication of user

            if (username == 'admin' && password == 'password') {
                return {
                    success: true,
                    message: 'Authentication was successful!',
                };
            } else {
                return {
                    success: false,
                    message: 'Authentication failed!',
                };
            };

        }
    }
})

export default broker;