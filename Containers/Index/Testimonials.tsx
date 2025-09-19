import React from "react";

const Testimonials = () => {
  return (
    <section className="container max-w-[1280px] mx-auto px-4 testimonials">
      <h2 className="section-title-new">What Our Customers Say</h2>
      <div className="testimonial-grid">
        <div className="testimonial-card">
          <div className="testimonial-text">
            The best pizza I've ever had! The crust was perfectly crispy and the ingredients were so fresh.
          </div>
          <div className="testimonial-author">
            <div className="author-avatar">JD</div>
            <div>
              <div className="author-name">John Doe</div>
              <div>Food Blogger</div>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-text">
            Their delivery is always on time and the pizza arrives hot and delicious. Highly recommend!
          </div>
          <div className="testimonial-author">
            <div className="author-avatar">SM</div>
            <div>
              <div className="author-name">Sarah Miller</div>
              <div>Regular Customer</div>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-text">
            The Truffle Mushroom Supreme is absolutely divine. I order it at least once a week!
          </div>
          <div className="testimonial-author">
            <div className="author-avatar">RJ</div>
            <div>
              <div className="author-name">Robert Johnson</div>
              <div>Local Chef</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
