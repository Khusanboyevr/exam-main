import { useEffect, useState } from 'react';
import { Panel } from 'rsuite';

function Products() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    setList(products);
  }, []);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-6 w-[100%]">
      {list.map(product => (
        <Panel
          bordered
          key={product.id}
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
        >
          <h4 className="p-4 text-lg font-semibold text-gray-800 border-b">{product.title}</h4>
          <p className="p-4 text-gray-600 border-b">{product.description}</p>
          <div className="p-4 text-red-600 text-xl font-bold">
            Narxi: {product.price}$
          </div>
          <div className='flex items-center '>
            <button className="cursor-pointer mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-auto block">
              O'chirish
            </button>
            <button className="cursor-pointer mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto block">
             Sotib olish
            </button>
          </div>
        </Panel>
      ))}
    </div>
  );
}

export default Products;
