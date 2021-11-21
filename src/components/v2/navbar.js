import React from "react";
import '../../styles/tailwind.css';
import Container from "./container";

export default function NavBarv2() {

    return (
        <Container>
            <nav className="flex justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 164 57" width="120px">
                    <ellipse cx="17.794" cy="17.765" rx="17.794" ry="17.765" fill="#0BF082" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M36.876 17.765H17.793v34.832h19.083a9.316 9.316 0 004.604-17.416 9.316 9.316 0 00-4.604-17.416z" fill="#047AF3" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.794 35.53c9.827 0 17.794-7.954 17.794-17.765H17.793V35.53z" fill="#0DC0CB" />
                </svg>
                <ul className="flex space-x-4">
                    <li>
                        Todos los Servicios
                    </li>
                    <li>
                        Categorías
                    </li>
                </ul>
            </nav>
        </Container>
    );
}
