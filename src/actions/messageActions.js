export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

export const updateMessage = (newMessage) => ({
    type: UPDATE_MESSAGE,
    payload: newMessage
});