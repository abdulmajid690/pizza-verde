import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from 'react';
import HomeDeal from "@/Containers/Index/HomeDeal";
import Hero from "@/Containers/Index/Hero";
import Products from "@/Containers/Index/Pizzas/Products";
import Meals from "@/Containers/Index/Meals/Meals";
import Testimonials from "@/Containers/Index/Testimonials";
import ScrollToTop from "@/common/Components/ScrollToTop/ScrollToTop";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
  useEffect(() => {
    // Header scroll effect is now handled in the Header component
    // Add animation to elements on scroll

    // Add animation to elements on scroll
    const animatedElements = document.querySelectorAll('.deal-card-new, .meal-card-new, .testimonial-card');

    function checkScroll() {
      animatedElements.forEach((element: any) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
          element.style.opacity = 1;
          element.style.transform = 'translateY(0)';
        }
      });
    }

    // Set initial state for animation
    // animatedElements.forEach((element: any) => {
    //   element.style.opacity = 0;
    //   element.style.transform = 'translateY(20px)';
    //   element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    // });

    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn-new');
    buttons.forEach((button: any) => {
      button.addEventListener('click', function (e: any) {
        // Ripple effect is handled by CSS
      });
    });

    // Initialize scroll listeners
    window.addEventListener('scroll', checkScroll);

    // Initial check
    checkScroll();

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <>
      <ToastContainer />
      <Hero />
      <HomeDeal />
      {/* <Products /> */}
      <Meals />
      <Testimonials />
      <ScrollToTop />
    </>
  );
}
