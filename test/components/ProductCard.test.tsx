import renderer, { act } from 'react-test-renderer';
import React from 'react';
import { product1 } from '../data/products';
import ProductCard from '../../src/components/index';


describe('pruebas en el productCard', () => {
    test('debe mostrar el componente correctamente', () => {
        const wrapper = renderer.create(
            <ProductCard product={product1} className='Custom class'>
                {
                    () => (<p>children</p>)
                }
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('Debe incrementar el contador', () => {
        const wrapper = renderer.create(
            <ProductCard product={product1} className='Custom class'>
                {
                    ({count,increaseBy}) => (
                        <>
                            <h1>Product card</h1>
                            <span>{count}</span>
                            <button onClick={()=> increaseBy(1)}></button>
                        </>
                    )
                }
            </ProductCard>
        )
        let tree = wrapper.toJSON();
        expect(tree).toMatchSnapshot();
    
        act(() => {
            (tree as any).children[2].props.onClick();
        })

        tree = wrapper.toJSON();
        expect((tree as any).children[1].children[0]).toBe("1");
    })
})