import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth Reducer', () => {
    it('should return the initialState', ()=> {
        expect(reducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
            
         });
    })

    it('Should Store the token upon login', () => {
        expect(reducer({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
            
         }, { 
             type: actionTypes.AUTH_SUCCESS,
            idToken: 'some-Token',
            userId: 'some-Id'
        })).toEqual({
            token: 'some-Token',
            userId: 'some-Id',
            error: null,
            loading: false,
            authRedirectPath: '/'
            
         })
    })
})