import { useEffect, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { MdClear } from "react-icons/md";
import "./index.css";

export default function Header() {
  const [activeLink, setActiveLink] = useState(navigationMenuItems[0].id);
  const [isNavActive, setIsNavActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      // Check which section is currently in view
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 50 && rect.bottom >= 50) {
          setActiveLink(`#${section.id}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onToggleActiveLink = (e) => {
    const id = e.target.textContent.toLowerCase();
    setActiveLink(`#${id}`);
  };

  const onToggleNavBar = () => setIsNavActive((prev) => !prev);

  return (
    <header>
      <h3>Sravan Goud Mandala</h3>
      <nav className={`${!isNavActive ? "hide-nav-bar" : ""}`}>
        {navigationMenuItems.map((menuItem) => (
          <a
            key={menuItem.id}
            href={menuItem.id}
            className={activeLink === menuItem.id ? "active" : ""}
            onClick={onToggleActiveLink}
          >
            {menuItem.name}
          </a>
        ))}
      </nav>
      {isNavActive ? (
        <button
          type="button"
          className="menu-toggle-btn cross-btn"
          onClick={onToggleNavBar}
        >
          <MdClear size={25} />
        </button>
      ) : (
        <button
          type="button"
          className="menu-toggle-btn"
          onClick={onToggleNavBar}
        >
          <RiMenu3Fill size={20} />
        </button>
      )}
    </header>
  );
}

const navigationMenuItems = [
  {
    id: "#home",
    name: "Home",
  },
  {
    id: "#about",
    name: "About",
  },
  {
    id: "#career",
    name: "Career",
  },
  {
    id: "#contact",
    name: "Contact",
  },
  {
    id: "#activities",
    name: "Activities",
  },
  {
    id: "#gallary",
    name: "Gallary",
  },
];
