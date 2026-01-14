import { useEffect, useState } from 'react';
import { Panel } from 'rsuite';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(data);
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 16 }}>
      {products.map(item => (
        <Panel className='w-full bg-gray-400' bordered key={item.id}>
          <h2>Title: {item.title}</h2>
          <p>Description: {item.description}</p>
          <b>Price: {item.price}</b>
        </Panel>
      ))}
    </div>
  );
}

export default Products;
