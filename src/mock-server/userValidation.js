import {user} from './user';

const userValidation = (login, password) => {
    return user.some(val => val.login === login && val.password === password);
}

export default userValidation;