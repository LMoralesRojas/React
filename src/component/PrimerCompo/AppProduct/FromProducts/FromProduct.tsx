import { Button, Form } from "react-bootstrap";
import { useForm } from "../../../../hooks/useForm";
import { FC } from "react";

interface IPropsFromProduct {
  handleAddProduct: Function;
}
export const FromProduct: FC<IPropsFromProduct> = ({ handleAddProduct }) => {
  const { handleChange, values, resetForm } = useForm({
    nombre: "",
    imagen: "",
    precio: 0,
  });

  const handleSubmitFrom = () => {
    handleAddProduct(values);
    resetForm();
  };
  return (
    <Form className="p-4 border rounded m-3">
      <Form.Group controlId="fromNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          name="nombre"
          placeholder="ingrese nombre del producto"
          value={values.nombre}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="fromNombre">
        <Form.Label>Imagen</Form.Label>
        <Form.Control
          type="text"
          name="imagen"
          placeholder="ingrese imagen del producto"
          value={values.imagen}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="fromNombre">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="number"
          name="precio"
          placeholder="ingrese precio del producto"
          value={values.precio}
          onChange={handleChange}
        />
      </Form.Group>
      <div className="d-flex justifyy-content-center mt-4">
        <Button variant="primary">Enviar Producto</Button>
      </div>
    </Form>
  );
};

export default FromProduct;
