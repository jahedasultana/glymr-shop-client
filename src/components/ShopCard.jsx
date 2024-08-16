import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const ShopCard = ({product}) => {
  console.log(product.productImage)
  return (
    <div className="max-w-xs bg-white rounded-lg shadow-lg dark:bg-gray-800 flex flex-col justify-between" style={{ height: '450px' }}>
      <img
        className="object-cover w-full h-48 mt-2 p-3 rounded-lg"
        src={product.productImage}
        alt="image"
      />
      <div className="px-4 py-2 flex-grow">
        <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">{product.productName}</h1>
        <h5 className="font-bold uppercase text-gray-600 dark:text-gray-400">Brand: {product.brandName}</h5>
        <div className="flex justify-between">
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            <span>Category: {product.category}</span>
          </p>
         
        </div>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            <span>Date and Time:</span>
            <span>{product.dateAndTime}</span>
          </p>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          <span className="font-bold">Description: </span>
          {product.description}
        </p>
      </div>
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-lg font-bold text-white">${product.price}</h1>
        <Rating
                style={{ maxWidth: 120 }}
                value={product.ratings}
                readOnly
              />
      </div>
    </div>
  );
};

export default ShopCard;
