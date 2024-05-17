import type { Product } from "./ProductList";

type ProductComponentProps = {
  product: Product;
};

export default function ProductComponent({ product }: ProductComponentProps) {
  return (
    <div className="p-5">
      <h3>
        [{product.id}] Product: {product.title}{" "}
      </h3>
      <h4>Desc: {product.description}</h4>
      <h4>Price: {product.price}</h4>
    </div>
  );
}
