import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import FeaturedProduct from './components/FeaturedProduct';
import IngredientExplorer from './components/IngredientExplorer';
import HairQuizModal from './components/HairQuizModal';
import ProductCatalog from './components/ProductCatalog';
import ClinicalStats from './components/ClinicalStats';
import ReviewsSection from './components/ReviewsSection';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import ProductQuickViewModal from './components/ProductQuickViewModal';
import Toast from './components/Toast';
import Footer from './components/Footer';

import { products } from './data/products';

export default function App() {
  const [cartItems, setCartItems] = useState([
    {
      ...products[0],
      selectedSize: "1 Bottle (200ml)",
      quantity: 1,
      price: products[0].price
    }
  ]);
  const [wishlist, setWishlist] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [toast, setToast] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [grandTotal, setGrandTotal] = useState(750);

  const showToast = (message) => {
    setToast({ message });
    setTimeout(() => setToast(null), 3000);
  };

  const handleAddToCart = (productToAdd) => {
    setCartItems(prevCart => {
      const existingIndex = prevCart.findIndex(
        item => item.id === productToAdd.id && item.selectedSize === (productToAdd.selectedSize || "200ml Standard Bottle")
      );
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += productToAdd.quantity || 1;
        return updated;
      } else {
        return [
          ...prevCart,
          {
            ...productToAdd,
            selectedSize: productToAdd.selectedSize || "200ml Standard Bottle",
            quantity: productToAdd.quantity || 1,
            price: productToAdd.price || productToAdd.price
          }
        ];
      }
    });
    showToast(`Added ${productToAdd.name} to Cart!`);
  };

  const handleBuyNow = (productToBuy) => {
    handleAddToCart(productToBuy);
    setCartOpen(true);
  };

  const handleUpdateQuantity = (index, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(index);
      return;
    }
    setCartItems(prev => {
      const updated = [...prev];
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const handleRemoveItem = (index) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
    showToast('Item removed from cart');
  };

  const handleAddToWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(prev => prev.filter(id => id !== productId));
      showToast('Removed from Wishlist');
    } else {
      setWishlist(prev => [...prev, productId]);
      showToast('Saved to Wishlist ❤️');
    }
  };

  const handleProceedCheckout = (computedTotal) => {
    setGrandTotal(computedTotal);
    setCheckoutOpen(true);
  };

  const handleOrderSuccess = () => {
    setCartItems([]);
    showToast('🎉 Order placed successfully!');
  };

  const heroProduct = products[0];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
      <Navbar
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        wishlistCount={wishlist.length}
        onOpenCart={() => setCartOpen(true)}
        onOpenQuiz={() => setQuizOpen(true)}
        onSearchChange={setSearchTerm}
        searchTerm={searchTerm}
      />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        <HeroBanner
          heroProduct={heroProduct}
          onAddToCart={handleAddToCart}
          onOpenQuiz={() => setQuizOpen(true)}
        />

        <FeaturedProduct
          product={heroProduct}
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
          onAddToWishlist={handleAddToWishlist}
          isWishlisted={wishlist.includes(heroProduct.id)}
        />

        <IngredientExplorer />

        <ClinicalStats />

        <ProductCatalog
          onAddToCart={handleAddToCart}
          onQuickView={setQuickViewProduct}
          onAddToWishlist={handleAddToWishlist}
          wishlistedIds={wishlist}
          searchTerm={searchTerm}
        />

        <ReviewsSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Drawers and Modals */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedCheckout={handleProceedCheckout}
      />

      <HairQuizModal
        isOpen={quizOpen}
        onClose={() => setQuizOpen(false)}
        onAddToCart={handleAddToCart}
      />

      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        cartItems={cartItems}
        grandTotal={grandTotal}
        onOrderSuccess={handleOrderSuccess}
      />

      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onAddToWishlist={handleAddToWishlist}
        isWishlisted={quickViewProduct ? wishlist.includes(quickViewProduct.id) : false}
      />

      {/* Toast Feedbacks */}
      <Toast toast={toast} />
    </div>
  );
}
