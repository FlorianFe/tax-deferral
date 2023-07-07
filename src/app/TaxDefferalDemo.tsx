"use client";

import Image from 'next/image'
import styles from './page.module.css'
import Diagram from './Diagram'
import {useState} from "react"
import Box from '@mui/material/Box';
import CircleIcon from '@mui/icons-material/Circle';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import { Input, TextField } from '@mui/material';


export default function TaxDefferalDemo() {
  const [startCapital, setStartCapital] : any = useState(10000);
  const [years, setYears] : any = useState(30);
  const [interestRate, setInterestRate] : any = useState(7);
  const [taxRate, setTaxRate] : any = useState(26);
  const [inflationRate, setInflationRate] : any = useState(2);


  return (
    <div>
        
        <div style={{ 
            backgroundColor: "#fff", 
            width: "300px", 
            padding: "25px", 
            margin: "25px",
            borderRadius: "15px",
            border: "1px solid #ddd"
        }}>
        
            <TextField 
            type="number"
            label="Anfangskapital" 
            variant="standard" 
            value={startCapital}
            onChange={(e) => { 
                if(startCapital != e.target.value)
                {
                    setStartCapital(e.target.value)
                }
            }} 
            />
            
            <br/><br/>

            Anlagejahre: {years}
            <Slider aria-label="Volume" min={1} max={50} value={years} onChange={(event: Event, nextValue: number | number[]) => { 
            setYears(nextValue as number);
            }} />
            Rendite: {interestRate}% 
            <Slider aria-label="Volume" min={0} max={15} value={interestRate} onChange={(event: Event, nextValue: number | number[]) => { 
            setInterestRate(nextValue as number);
            }} />
            Kapitalertragsteuern: {taxRate}% 
            <Slider aria-label="Volume" min={0} max={100} value={taxRate} onChange={(event: Event, nextValue: number | number[]) => { 
            setTaxRate(nextValue as number);
            }} />
            Inflationsbereinigung: {inflationRate}% 
            <Slider aria-label="Volume" min={0} max={10} value={inflationRate} onChange={(event: Event, nextValue: number | number[]) => { 
            setInflationRate(nextValue as number);
            }} />
        
        
      </div>
      

      <div style={{ padding: "25px" }}>
        <Diagram 
          startCapital={startCapital}
          interestRate={interestRate * 0.01} 
          years={years} 
          taxRate={taxRate * 0.01} 
          inflationRate={inflationRate * 0.01}
        />
      </div>
    </div>
  )
}
