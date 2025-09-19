import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import logo from "@/common/images/logo.png";
import { useRouter } from "next/router";

const Header = () => {
  const { query, push, pathname } = useRouter();
  const [postCode, setPostCode] = useState(query?.postCode || "");
  const [validation, setValidation] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = () => {
    // e.preventDefault();
    if (!postCode.length) {
      setValidation("Please enter your post code");
      return;
    } else {
      push(`/findstore?postCode=${postCode}`);
      setValidation("");
      setPostCode("");
    }
  };

  return (
    <header className={`new-header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container max-w-[1200px] mx-auto px-5">
        <div className="header-content">
          <div className="logo" onClick={() => push("/")}>
            <Image
              src="/pizza-verde-logo.svg"
              alt="Pizza Verde Logo"
              width={50}
              height={50}
              className="logo-image"
            />
            <span className="logo-text">Pizza Verde</span>
          </div>
          <div className="header-actions">
            <input
              type="text"
              className="postcode-input"
              placeholder="Enter postcode"
              value={postCode}
              onChange={(e) => setPostCode(e.target.value)}
            // onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
            />
            <button type="button" className="btn-new" onClick={handleSubmit}>
              Order Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
