"use client";

export const ThemeToggleButton = () => {
  const handleClick = () => {
    document.getElementsByTagName("html").item(0)?.classList.toggle("dark");
  };

  return <button onClick={() => handleClick()}>Toggle</button>;
};
