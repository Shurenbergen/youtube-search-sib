export const SET_TOKEN = 'SET_TOKEN';

export const setToken = (token, expirationTime) => ({
    type: SET_TOKEN,
    token,
    expirationTime
});