"use client"
import { useEffect, useState } from 'react';

export default function ChangeColor(){
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        const changeColors = (elements: any[], color: string) => {
            elements.forEach(element => {
                element.style.backgroundColor = color;
            });
        };
        
        const header = document.getElementById("container");
        const body = document.getElementById("body");
        const topics = document.querySelectorAll(".topics");
        const principal = document.querySelectorAll(".principal");
        const content = document.getElementById("content");
        const footer = document.getElementById("footer");
        const seta = document.getElementById("seta");
        const botao = document.querySelectorAll(".hoverButton");

        if (header && body && topics && principal && content && footer && seta && botao) {
            header.style.backgroundColor = checked ? '#613327': '#8E4837';
            body.style.backgroundColor = checked ? '#321A15':'#683529';
            content.style.backgroundColor = checked ? '#613327':'#C35A40';
            footer.style.backgroundColor = checked ? '#613327':'#8E4837';
            seta.style.backgroundColor = checked ? '#2C1712': '#C35A40';
            
            changeColors(Array.from(botao), checked ? '#2C1712' : '#8F4330');
            changeColors(Array.from(topics), checked ? '#613327' : '#C35A40');
            changeColors(Array.from(principal), checked ? '#613327' : '#C35A40');
        }

    }, [checked]);

    function Mudar() {
        setChecked(!checked);
    }

    return(
        <label className="inline-flex items-center cursor-pointer">
            <input 
                type="checkbox"  
                className="sr-only peer"
                onClick={Mudar}
                checked={checked}
                onChange={() => {}}/>
            <div className="relative w-[73px] h-9 bg-[#CF7C68] peer-focus:outline-none peer-focus:ring-7 peer-focus:ring-[#683529] dark:peer-focus:ring-[#9c5342] rounded-full peer dark:bg-[#683529] peer-checked:after:translate-x-full rtl:peer-checked:after:right-0 peer-checked:after:border-none after:content-[''] after:absolute after:top-0.5 after:start-[6px]  after:bg-[#CF7C68] after:border-gray-300 after:border-none after:rounded-full after:h-[30px] after:w-[30px] after:transition-all dark:border-[#9c5342] peer-checked:bg-[#683529]"></div>
        </label>
    
    )
}