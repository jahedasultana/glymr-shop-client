const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-gray-400">
            We are a leading e-commerce platform providing a wide range of products to suit your needs. Our mission is to deliver the best online shopping experience.
          </p>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li><a href="#shipping" className="hover:text-gray-300">Shipping & Returns</a></li>
            <li><a href="#faq" className="hover:text-gray-300">FAQs</a></li>
            <li><a href="#support" className="hover:text-gray-300">Support</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>Email: support@ecommerce.com</li>
            <li>Phone: +123 456 7890</li>
            <li>Address: 123 E-commerce St., City, Country</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8">
        © 2024 Your E-commerce. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
