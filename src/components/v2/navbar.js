import React from "react";
import "../../styles/tailwind.css";
import Container from "./Container";

export default function NavBarv2() {
  return (
    <Container>
      <nav className="flex flex-col py-4">
        <div className="flex justify-center">
          <a href="/">
          <svg
            className="h-12"
            viewBox="0 0 47 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.794 35.53C27.6214 35.53 35.588 27.5763 35.588 17.765C35.588 7.95366 27.6214 0 17.794 0C7.96665 0 0 7.95366 0 17.765C0 27.5763 7.96665 35.53 17.794 35.53Z"
              fill="#0BF082"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M36.876 17.7649H17.793V52.5969H36.876C38.9324 52.5973 40.9313 51.9173 42.5608 50.6629C44.1904 49.4084 45.3591 47.65 45.8846 45.6618C46.4102 43.6737 46.2632 41.5674 45.4664 39.6716C44.6697 37.7757 43.268 36.1968 41.48 35.1809C43.268 34.165 44.6697 32.5861 45.4664 30.6902C46.2632 28.7943 46.4102 26.6881 45.8846 24.7C45.3591 22.7118 44.1904 20.9534 42.5608 19.6989C40.9313 18.4445 38.9324 17.7644 36.876 17.7649V17.7649Z"
              fill="#047AF3"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.794 35.5299C27.621 35.5299 35.588 27.5759 35.588 17.7649H17.793V35.5299H17.794Z"
              fill="#0DC0CB"
            />
          </svg>
          </a>
        </div>
      </nav>
    </Container>
  );
}
