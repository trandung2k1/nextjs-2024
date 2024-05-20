import React from 'react';

const ProductsPage = async () => {
    const res = await fetch('https://dummyjson.com/products', {
        cache: 'force-cache', // we can be omitted
    });
    const data = await res.json();

    return (
        <>
            <h3>Built with SSG</h3>
            <br />
            <ul>
                {data.products.map((product: any) => (
                    <li key={product.id}>
                        {product.id}: {product.title}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ProductsPage;
