# jdmc-product-card

Este es un paquete de pruebas para aprendizaje de despliegue a npm, rogamos encarecidamente no usar este paquete para proyectos en producción.

Desarrollado como actividad del curso React pro de Fernando Herrera por el Alumno **Juan David Mendez Campuzano**.

```
import { 
    ProductButtons, 
    ProductCard, 
    ProductImage,
    ProductTitle  } from 'jdmc-product-card';
```

```
      <ProductCard
        key={product.id}
        product={product}
        initialValues={{
          count: 0,
          //maxCount:10
        }}
      >
        {({ reset, increaseBy, isMaxReached, count }) => (
          <>
            <ProductImage />
            <ProductTitle/>
            <ProductButtons/>
          </>
        )}
      </ProductCard>
```

###### Bogotá-2022
