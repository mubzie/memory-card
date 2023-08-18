/* eslint-disable react/prop-types */
import "../assets/styles/header.css";

export default function Header({ title }) {
  return (
    <>
      <header className="header"> {title}</header>
    </>
  );
}
