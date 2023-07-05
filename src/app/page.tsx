"use client";

import Image from 'next/image'
import styles from './page.module.css'
import Diagram from './Diagram'
import {useState} from "react"
import Box from '@mui/material/Box';
import CircleIcon from '@mui/icons-material/Circle';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';


export default function Home() {
  const [years, setYears] : any = useState(30);
  const [interestRate, setInterestRate] : any = useState(5);
  const [taxRate, setTaxRate] : any = useState(25);
  const [inflationRate, setInflationRate] : any = useState(2);

  return (
    <main style={{ display: "flex", justifyContent: "space-between"}}>
      
      <div style={{ width: "700px", padding: "25px" }}>
        <Diagram 
          interestRate={interestRate * 0.01} 
          years={years} 
          taxRate={taxRate * 0.01} 
          inflationRate={inflationRate * 0.01}
        />
      </div>

      <div style={{ width: "300px", padding: "25px" }}>
        Anlagejahre: {years}
        <Slider aria-label="Volume" min={1} max={50} value={years} onChange={(event: Event, nextValue: number | number[]) => { 
          setYears(nextValue as number);
        }} />
        Rendite: {interestRate}% 
        <Slider aria-label="Volume" min={0} max={15} value={interestRate} onChange={(event: Event, nextValue: number | number[]) => { 
          setInterestRate(nextValue as number);
        }} />
        Kapitalertragssteuern: {taxRate}% 
        <Slider aria-label="Volume" min={0} max={100} value={taxRate} onChange={(event: Event, nextValue: number | number[]) => { 
          setTaxRate(nextValue as number);
        }} />
        Inflationsbereinigung: {inflationRate}% 
        <Slider aria-label="Volume" min={0} max={10} value={inflationRate} onChange={(event: Event, nextValue: number | number[]) => { 
          setInflationRate(nextValue as number);
        }} />

        <br/>
        <br/>

        <br/>
        <br/>
        <br/>

        <div style={{border: "1px solid #ddd", padding: "15px"}}>
          <ul style={{fontSize: "10pt"}}>
            <li style={{ color: "orange" }}> ohne Steuern</li>
            <li style={{ color: "green" }}> mit Steuern, mit Steuerstundung</li>
            <li style={{ color: "blue" }}> mit Steuern, ohne Steuerstundung</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
