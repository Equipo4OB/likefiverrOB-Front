import { React, useState, useEffect } from "react";
import '../../styles/tailwind.css';
import Container from "./Container";
import Button from "./Button";
import FilteredLoopv2 from "./FilteredLoop";

export default function DynamicListv2() {

    const [selection, setSelection] = useState("react");

    console.log(selection)

    return (
        <Container>
            <section className="py-12 space-y-4">
                <span className="text-2xl font-bold"> Selecciona una categoría: </span>
                <div className="space-y-12">
                    <div className="grid grid-flow-col auto-cols gap-2 lg:gap-12">
                        <Button
                            onClick={() => setSelection("react")}
                            name="React"
                            value="react"
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
                    <div className="space-y-4">
                        <span className="flex items-center uppercase text-2xl font-light"> {selection} 
                        { selection && <svg class="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>}
                        </span>
                        <FilteredLoopv2
                            dynamicFilter={selection}
                        />
                    </div>
                </div>
            </section>
        </Container>
    );
}