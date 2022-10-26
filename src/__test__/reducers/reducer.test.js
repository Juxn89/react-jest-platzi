import reducer from '../../reducers'
import ProductMock from '../../reducers'

describe('Reducers', () => {
    test('Retornar initialState', () => {
        expect(reducer({}, '')).toEqual({});
    })

    test('ADD_TO_CART', () => { 
        const initialState = {
            cart: []
        }
        const payload = ProductMock;
        const action = {
            type: 'ADD_TO_CART',
            payload
        }

        const expected = {
            cart: [
                ProductMock
            ]
        }

        expect(reducer(initialState, action)).toEqual(expected)
    })
})