import action from '../../actions'
import ProductMock from '../../__mocks__/ProductMock'

describe('Actions',() => {
    test('addToCart Action', () => {
        const payload = ProductMock;
        const expected = {
            type: 'ADD_TO_CART',
            payload
        }

        expect(action.addToCart(payload)).toEqual(expected);
    })

    test('removeFromCart Action', () => {
        const payload = ProductMock;
        const expected = {
            type: 'REMOVE_FROM_CART',
            payload
        }

        expect(action.removeFromCart(payload)).toEqual(expected);
    })
})