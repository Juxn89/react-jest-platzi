import 'jsdom-global/register'
import React from "react";
import { mount, shallow } from 'enzyme'
import ProviderMock from '../../__mocks__/ProviderMock'
import Product from '../../components/Product'
import ProductMock from '../../__mocks__/ProductMock'

describe('<Product />', () => {
    test('Render del componente', () => {
        const product = shallow(
            <ProviderMock>
                <Product />
            </ProviderMock>
        );
        expect(product.length).toBe(1)
    })

    test('Comprobar el botón de comprar', () => {
        const handleAddToCart = jest.fn();
        const wrapper = mount(
            <ProviderMock>
                <Product product={ ProviderMock } handleAddToCart={ handleAddToCart }/>
            </ProviderMock>
        )

        wrapper.find('button').simulate('click');
        expect(handleAddToCart).toHaveBeenCalledTimes(1);
    })
})