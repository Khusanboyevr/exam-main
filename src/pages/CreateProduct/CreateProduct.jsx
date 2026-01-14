import { useState } from 'react';
import { Form, Button, Input, Textarea } from 'rsuite';

function CreateProduct() {
  const [data, setData] = useState({
    title: '',
    desc: '',
    price: ''
  });

  const handleChange = value => {
    setData(value);
  };

  const handleSubmit = () => {
    if (!data.title || !data.desc || !data.price) {
      alert('BOSH YUBORIB BOLMAYDI  ');
      return;
    }

    const oldProducts = JSON.parse(localStorage.getItem('products')) || [];

    oldProducts.push({
      id: Date.now(),
      title: data.title,
      description: data.desc,
      price: data.price
    });

    localStorage.setItem('products', JSON.stringify(oldProducts));

    setData({
      title: '',
      desc: '',
      price: ''
    });
  };

  return (
    <Form
      fluid
      formValue={data}
      onChange={handleChange}
      className="rounded-3xl bg-gray-100 p-5 w-full hover:bg-gray-200"
    >
      <Form.Group className="mb-4">
        <Form.Label className="font-bold">Title</Form.Label>
        <Form.Control name="title" accepter={Input} />
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label className="font-bold">Description</Form.Label>
        <Form.Control name="desc" accepter={Textarea} rows={4} />
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label className="font-bold">Price</Form.Label>
        <Form.Control name="price" accepter={Input} />
      </Form.Group>

      <Button
        className="mt-4 ml-auto"
        appearance="primary"
        color="orange"
        onClick={handleSubmit}
      >
        Add product
      </Button>
    </Form>
  );
}

export default CreateProduct;
