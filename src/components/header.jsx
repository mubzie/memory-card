/* eslint-disable react/prop-types */
import "../assets/styles/header.css";

export default function Header({ title }) {
  return (
    <>
      <header>
        <h1 className="header"> {title}</h1>
      </header>
    </>
  );
}
