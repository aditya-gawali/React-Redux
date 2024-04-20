export const INCREMENT = 'INCREMENT';

export const increment = (count) => ({
    type: INCREMENT,
    payload: count + 1

});