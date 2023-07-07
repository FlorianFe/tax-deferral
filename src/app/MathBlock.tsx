"use client";

import Image from 'next/image'
import styles from './page.module.css'
import Diagram from './Diagram'
import {useEffect, useRef, useState} from "react"
import Box from '@mui/material/Box';
import CircleIcon from '@mui/icons-material/Circle';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import { Input, TextField } from '@mui/material';
import { MathJax } from 'better-react-mathjax';


type Props = {
    latex: string
}

export default function MathBlock({latex } : Props) {

    const containerRef = useRef(null);

    useEffect(() => {

        const listener = () => {
            //containerRef.current.style.width = "inherit";
            
            const element : any = containerRef.current;
            const width = element?.clientWidth;

            element.style.width = `${width}px`
            
            //console.log(width);
        };  

        window.addEventListener('resize', listener);
        
        listener();

        return () => {
            window.removeEventListener('resize', listener);
        }
        
    }, []);

    return (
        <div ref={containerRef} style={{ overflow: "auto"}}>
            <MathJax hideUntilTypeset='every'>
            {latex}
            </MathJax>
        </div>
    )
}


