import renderer from 'react-test-renderer';
import { ProductTitle } from '../../src/components/ProductTitle';
import React from 'react';
import { product1 } from '../data/products';
import ProductCard from '../../src/components/index';


describe('pruebas en el productTittle', () => {
    test('debe mostrar el componente correctamente con el titulo personalizado', () => {
        const wrapper = renderer.create(
            <ProductTitle title="Titulo personalizado" className='Custom class' />
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('debe mostrar el componente con el nombre del producto', () => {
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
})