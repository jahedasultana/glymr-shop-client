const ShopCard = ({ title, brandName, category, dateAndTime, description, price, image }) => {
  return (
    <div className="max-w-xs bg-white rounded-lg shadow-lg dark:bg-gray-800 flex flex-col justify-between" style={{ height: '450px' }}>
      <img
        className="object-cover w-full h-48 mt-2 p-3 rounded-lg"
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
        alt="image"
      />
      <div className="px-4 py-2 flex-grow">
        <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">{title}</h1>
        <h5 className="font-bold uppercase text-gray-600 dark:text-gray-400">Brand: {brandName}</h5>
        <div className="flex justify-between">
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            <span>Category: {category}</span>
          </p>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            <span>Date and Time:</span>
            <span>{dateAndTime}</span>
          </p>
        </div>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          <span className="font-bold">Description: </span>
          {description}
        </p>
      </div>
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-lg font-bold text-white">${price}</h1>
      </div>
    </div>
  );
};

export default ShopCard;
