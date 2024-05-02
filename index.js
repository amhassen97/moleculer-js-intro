import UserService from './services/user.service.js';
import EmailService from './services/email.service.js';
import AuthService from './services/auth.service.js';

async function startApp() {
    // Start services

    await UserService.start();
    await EmailService.start();
    await AuthService.start();

    try {
        // Simulate user creation

        const newUser = await UserService.call('user.createUser', {
            username: 'john',
            email: 'john@gmail.com',
        })

        console.log('New User Created: ', newUser);

        const users = await UserService.call('user.getUsers');

        console.log(`All Users: `, users);

        // Simulate sending new user email

        const email = {
            recipient: newUser.email,
            subject: 'Welcome to our platform!',
            content: 'Thank you for signing up!',
        };

        const emailResult = await EmailService.call('email.sendEmail', email);

        console.log('Email Result: ', emailResult);

        // Simulate authentication

        const authResult = await AuthService.call('auth.authenticateUser', {
            username: 'admin',
            // username: newUser.username,
            password: 'password',
        });

        console.log('Auth Result: ', authResult);


    } catch (e) {
        console.log('Error: ', e);

    } finally {
        UserService.stop();
        EmailService.stop();
        AuthService.stop();
    }
};

startApp();