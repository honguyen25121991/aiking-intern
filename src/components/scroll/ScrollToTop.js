import { useEffect, useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs/index";
import { classNames } from "../../utils/classNames";

export const ScrollToTop = () => {
  const [isViable, setIsViable] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsViable(true);
    } else {
      setIsViable(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div className="fixed bottom-20 right-20">
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isViable ? "opacity-100" : "opacity-0",
          "inline-flex items-center p-3 rounded-full shadow-sm text-white bg-yellow-600 transition-opacity hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        )}
      >
        <BsFillArrowUpCircleFill className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
};
