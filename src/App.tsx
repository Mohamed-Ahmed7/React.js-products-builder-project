import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { productList } from "./data";
import Button from "./components/ui/Button";

const App = () => {
  // ** STATE
  const [isOpen, setIsOpen] = useState(false);
  // ** Handler
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  // ** Renders
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  return (
    <main className="container px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-28">
      <Button className="bg-indigo-700 hover:bg-indigo-600" onClick={openModal}>
        Add
      </Button>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add a New Product">
        <div className="flex items-center gap-x-3">
          <Button className="bg-indigo-700 hover:bg-indigo-600">Submit</Button>
          <Button className="bg-gray-700 hover:bg-gray-600">Cancel</Button>
        </div>
      </Modal>
    </main>
  );
};

export default App;
