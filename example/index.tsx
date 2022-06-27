import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../.';

const App = () => {
  return (
    <>
      <ProductCard
        product={{
          id: "1",
          title: "Coffee Mug de verdad!",
        }}
        initialValues={{
          count: 0,
          //maxCount:10
        }}
      >
        {({ reset, increaseBy, isMaxReached, count }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
