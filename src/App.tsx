import { useState, type ChangeEvent, type FormEvent } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { colors, formInputsList, productList } from "./data";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import type { IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ErrorMessage";
import CircleColor from "./components/CircleColor";
const App = () => {
  const defaultProductObj: IProduct = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      id: "",
      name: "",
      imageURL: "",
    },
  };
  // ** ----------- STATE ----------
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  console.log(errors);
  const [isOpen, setIsOpen] = useState(false);
  // ** ------------ Handler------------
  const openModal = (): void => setIsOpen(true);
  const closeModal = (): void => setIsOpen(false);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };
  const onCancel = (): void => {
    setProduct(defaultProductObj);
    closeModal();
  };
  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { title, description, imageURL, price } = product;
    const errorsMsg = productValidation({
      title,
      description,
      imageURL,
      price,
    });
    const hasErrorMsg =
      Object.values(errorsMsg).some((value) => value === "") &&
      Object.values(errorsMsg).every((value) => value === "");
    if (!hasErrorMsg) {
      setErrors(errorsMsg);
      return;
    }
  };
  
  // ** ---------------Renders---------------
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  const renderFormInputsList = formInputsList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label
        htmlFor={input.id}
        className="mb-1.5 text-sm font-medium text-gray-700"
      >
        {input.label}
      </label>
      <Input
        type={input.type}
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
      <ErrorMessage errorMsg={errors[input.name]} />
    </div>
  ));
  const renderProductColors = colors.map((color) => (
    <CircleColor key={color} color={color} />
  ));
  return (
    <main className="container px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-28">
      <div className="flex items-center justify-between p-2 m-5">
        <h2 className="text-3xl md:text-4xl font-medium">Latest Product</h2>
        <Button
          className="bg-indigo-700 hover:bg-indigo-600"
          width="w-fit"
          onClick={openModal}
        >
          Add New Product
        </Button>
      </div>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add a New Product">
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormInputsList}
          <div className="flex items-center flex-wrap my-4 space-x-1">
            {renderProductColors}
          </div>
          <div className="flex items-center gap-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-600">
              Submit
            </Button>
            <Button
              type="button"
              className="bg-gray-700 hover:bg-gray-600"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
};

export default App;
