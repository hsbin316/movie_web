import { useEffect, useState } from "react";

function ScrollTop() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);
  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    showButton && (
      <div className="scrollContainer">
        <button className="top" onClick={ScrollToTop}>
          Top
        </button>
      </div>
    )
  );
}

export default ScrollTop;
