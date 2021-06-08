import userReducer from './user.reducer';

describe('Testing userReducer...', () => {

    test('Init state should be an empty OBJECT...', () => {
        let action = {};
        let state = undefined;
        let returnedState = userReducer(state, action);
        expect( returnedState ).toEqual( {} );
    });

    test('testing set user...', () => {
        let action = { type: 'SET_USER', payload: {username: 'jdoe1', id: 1} };
        let state = { username: 'jdoe2', id: 1 };
        let returnedState = userReducer(state, action);
        console.log(returnedState);
        expect( returnedState )
    });
    
});