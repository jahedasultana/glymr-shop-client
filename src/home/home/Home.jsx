import { useEffect, useState } from "react";
import ShopCard from '../../components/ShopCard'
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const axiosPublic = useAxiosPublic();

  const fetchProducts = async () => {
    try {
      const response = await axiosPublic.get("/products", {
        params: {
          page,
          limit: 8, // Number of products per page
          search,
          brand,
          category,
          minPrice,
          maxPrice,
          sortBy,
          sortOrder,
        },
      });
      setProducts(response.data.products);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page, search, brand, category, minPrice, maxPrice, sortBy, sortOrder]);

  return (
    <div className="p-4">
      <Helmet>
        <title>Best Outfit | Home</title>
      </Helmet>
      <div>
      <hr className="text-white mt-6 font-bold w-[300px] md:w-[400px] mx-auto mb-6"/>
      <h1 className="text-center md:text-3xl font-semibold mt-6">
        Welcome to Glymr-Shop
      </h1>
      <h1 className="text-center text-lg font-semibold mb-6">
        Here all our products are displayed!
      </h1>
      <hr className="text-white font-bold w-[300px] md:w-[400px] mx-auto mb-6"/>
      </div>
    

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center items-center mb-4">
        <input
          type="text"
          placeholder="Search by product name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded mb-2 sm:mb-0 sm:mr-2 w-full sm:w-auto"
        />
        <select
          onChange={(e) => setBrand(e.target.value)}
          className="border p-2 rounded mb-2 sm:mb-0 sm:mr-2 w-full sm:w-auto"
        >
          <option value="">All Brands</option>
          <option value="Neutrogena">Neutrogena</option>
          <option value="Nivea">Nivea</option>
          <option value="L'Oréal">L'Oréal</option>
          <option value="Dove">Dove</option>
        </select>
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded mb-2 sm:mb-0 sm:mr-2 w-full sm:w-auto"
        >
          <option value="">All Categories</option>
          <option value="Face wash">Face wash</option>
          <option value="Shampoo">Shampoo</option>
          <option value="Body wash">Body wash</option>
          <option value="Sunscree">Sunscree</option>
        </select>
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="border p-2 rounded mb-2 sm:mb-0 sm:mr-2 w-full sm:w-auto"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border p-2 rounded mb-2 sm:mb-0 sm:mr-2 w-full sm:w-auto"
        />
        <select
          onChange={(e) => setSortBy(e.target.value)}
          className="border p-2 rounded mb-2 sm:mb-0 sm:mr-2 w-full sm:w-auto"
        >
          <option value="">Sort By</option>
          <option value="price">Price</option>
          <option value="creationDate">Newest First</option>
        </select>
        <select
          onChange={(e) => {
            const value = e.target.value;
            if (value === "price-asc") {
              setSortBy("price");
              setSortOrder("asc");
            } else if (value === "price-desc") {
              setSortBy("price");
              setSortOrder("desc");
            } else if (value === "date-desc") {
              setSortBy("creationDate");
              setSortOrder("desc");
            }
          }}
          className="border mt-2 p-2 rounded w-full sm:w-auto"
        >
          <option value="">Sort By</option>
          <option value="price-asc">Price (Low to High)</option>
          <option value="price-desc">Price (High to Low)</option>
          <option value="date-desc">Date (Newest)</option>
        </select>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <ShopCard key={product._id} product={product} />
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="mt-4 flex justify-center items-center">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="bg-blue-800 text-white border px-3 py-1 mx-1 rounded"
        >
          Previous
        </button>
        <span className="px-3 py-1 mx-1">{`Page ${page} of ${totalPages}`}</span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="border px-3 py-1 mx-1 rounded bg-blue-800 text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
