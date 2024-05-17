import ProductComponent from "./ProductComponent";

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
};

const loadProducts = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const { products } = await response.json();
  return products as Product[];
};

export default async function ProductList() {
  const products = await loadProducts();

  return (
    <div>
      {products.map((prod) => (
        <ProductComponent key={prod.id} product={prod} />
      ))}
    </div>
  );
}
