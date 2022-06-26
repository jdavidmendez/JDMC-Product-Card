import renderer from 'react-test-renderer';
import { ProductImage } from '../../src/components/ProductImage';
import React from 'react';
import ProductCard from '../../src/components';
import { product2 } from '../data/products';

describe('pruebas en ProductImage', () => {
    test('debe mostrarse correctamente el componente', () => {
        const wrapper = renderer.create(
            <ProductImage img='https://gatito.com/image.jpg' />
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    })

    test('debe mostrar el componente con el nombre del producto', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
})