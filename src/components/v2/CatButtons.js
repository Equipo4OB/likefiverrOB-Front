import React from "react";
import '../../styles/tailwind.css';
import Container from "./Container";
import HeroImage from "../../assets/images/heroimage2.jpg"
import Button from "./Button";

export default function CatButtonsv2() {

    return (
        <Container>
            <section className="py-12 flex justify-center">
                <div className="grid grid-flow-col auto-cols-max gap-12">
                    <Button
                        name="React"
                    />
                    <Button
                        name="Angular"
                    />
                    <Button
                        name="Node"
                    />
                    <Button
                        name="Java"
                    />
                </div>
            </section>
        </Container>
    );
}