import type { IProduct } from "../interfaces";
import { textSlicer } from "../utils/functions";
import Image from "./Image";
import Button from "./ui/Button";
interface IProps {
  product: IProduct;
}
const ProductCard = ({product}: IProps) => {
const {imageURL,title,description,category,price} = product
  return (
    <div className="rounded-md p-2 flex flex-col ">
      <Image
        imageURL={imageURL}
        alt={`${title} Image`}
        className="rounded-md mb-2 h-52 w-full lg:object-cover"
      />
      <h3 className="text-gray-900 font-semibold text-xl mb-1">{title}</h3>
      <p className="text-gray-700 text-sm mb-2">
       {textSlicer(description)}
      </p>
      <div className="flex items-center my-4 space-x-2">
        <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-yellow-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer" />
      </div>
      <div className="flex items-center justify-between">
        <span>${price}</span>
        <Image
          imageURL={category.imageURL}
          alt={category.name}
          className="w-10 h-10 rounded-full object-bottom"
        />
      </div>
      <div className="flex items-center space-x-2 mt-5">
        <Button type="button" className="bg-indigo-700 hover:bg-indigo-600" >
          EDIT
        </Button>
        <Button type="button" className="bg-red-700 hover:bg-red-600">
          DELETE
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
