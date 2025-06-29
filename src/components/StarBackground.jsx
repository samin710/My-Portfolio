import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [isDark, setIsDark] = useState(false); // 🟢 1. Add theme state

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    // 🟢 2. Detect current theme
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkTheme();

    window.addEventListener("resize", handleResize);

    // Optional: track theme toggle dynamically if needed
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect(); // 🧹 Clean up observer
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`star animate-pulse-subtle ${!isDark ? "bg-black" : ""}`} // 🟢 3. Conditionally add bg-black in light mode
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
            ...(!isDark && {
              boxShadow: "0 0 10px 2px rgba(0, 0, 0, 0.4)",
            }), // 🟢 Apply glow only in light theme
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className={`meteor animate-meteor ${
            !isDark
              ? "bg-black bg-linear-to-r from-black via-black to-white"
              : ""
          }`} // 🟢 4. Conditionally add bg-black in light mode
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
            ...(!isDark && {
              boxShadow: "0 0 10px 2px rgba(0, 0, 0, 0.4)",
            }), // 🟢 Apply glow only in light theme
          }}
        />
      ))}
    </div>
  );
};
