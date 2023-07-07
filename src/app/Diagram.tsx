"use client";

import React from "react"
import {range, zip, last} from "ramda"


export default function Diagram({startCapital = 10000, interestRate, years, taxRate = 0.25, inflationRate = 0.0} : any) {

    const calc1 = (arr : Array<number>) => 
    {
        const endResult = arr.reduce((acc : number, _x : number) => {
            return acc * (1 + interestRate);
        }, 1.0);

        const win = endResult - 1.0;

        return (1.0 + win * (1.0 - taxRate)) /  Math.pow(1.0 + inflationRate, arr.length);
    }

    const calc2 = (arr : Array<number>) => 
    {
        const endResult = arr.reduce((acc : number, _x : number) => {
            return acc * (1 + interestRate * (1.0 - taxRate));
        }, 1.0);

        const win = endResult - 1.0;

        return (1.0 + win) / Math.pow(1.0 + inflationRate, arr.length);
    }

    const calc3 = (arr : Array<number>) => 
    {
        const endResult = arr.reduce((acc : number, _x : number) => {
            return acc * (1 + interestRate);
        }, 1.0);

        return endResult / Math.pow(1.0 + inflationRate, arr.length);
    }

    const xValues = range(0, years + 1);

    const y1Values = xValues.map((x : number) => calc1(range(0, x)));
    const y2Values = xValues.map((x : number) => calc2(range(0, x)));
    const y3Values = xValues.map((x : number) => calc3(range(0, x)));

    const relativeMoneySaving : number = (last(zip(y1Values, y2Values).map((v : any) => (v[0] - 1) / (v[1] - 1))) as number) - 1 ;
    const absoluteMoneySaving : number = (last(zip(y1Values
        .map(v => v * startCapital), y2Values.map(v => v * startCapital))
        .map((v : any) => v[0] - v[1])
    ) as number);

    const absoluteMoneyY1 = (last(y1Values) as number) * startCapital;
    const absoluteMoneyY2 = (last(y2Values) as number) * startCapital;

    const yMax = Math.max(...y3Values)

    const points1 = zip(xValues, y1Values);
    const points2 = zip(xValues, y2Values);
    const points3 = zip(xValues, y3Values);

    const STEP = 10;

    return (
        <div style={{ width: "100%"}}>

            <svg viewBox="-5 -5 110 110">

                {range(0, 50).map((v : any) => <line key={v} x1={0} x2={100} y1={100 - v * STEP} y2={100 - v * STEP} stroke="#ddd" strokeWidth={0.1}/> )}

                {points1.map((v: any, index : number) => 
                    <circle key={index} cx={v[0] * 100 / years} cy={100 - v[1] * STEP} r={0.5} fill="green"/>
                )}

                {points2.map((v: any, index : number) => 
                    <circle key={index} cx={v[0] * 100 / years} cy={100 - v[1] * STEP} r={0.5} fill="blue"/>
                )}

                {points3.map((v: any, index : number) => 
                    <circle key={index} cx={v[0] * 100 / years} cy={100 - v[1] * STEP} r={0.5} fill="orange"/>
                )}

            </svg>

            Ohne Steuerstundung hättest du nach {years} Jahren <b>${absoluteMoneyY2.toFixed(2)}€</b> und mit Steuerstundung <b>${absoluteMoneyY1.toFixed(2)}€</b>.
            Du hast also <b>{absoluteMoneySaving.toFixed(2)}€ {relativeMoneySaving > 0 && `(+ ${(relativeMoneySaving * 100).toFixed(2)}%)` }</b> mehr hinzugewonnen 
            als wenn du jedes Jahr deine Gewinne realisiert hättest
        </div>
    )
  }
  