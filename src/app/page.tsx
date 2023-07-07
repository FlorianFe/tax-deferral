"use client";

import Image from 'next/image'
import styles from './page.module.css'
import Diagram from './Diagram'
import {useState} from "react"
import Box from '@mui/material/Box';
import CircleIcon from '@mui/icons-material/Circle';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import TaxDefferalDemo from './TaxDefferalDemo';
import { Card, CardContent, Typography } from '@mui/material';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import MathBlock from './MathBlock';

const R = `\\xrightarrow[]{\\text{1 Jahr gehalten}}` 
const T = `\\xrightarrow[]{\\text{Realisierung mit Steuern}}` 

export default function Home() {
  return (
    <MathJaxContext>
      
      <main style={{ display: "flex", width: "100%", justifyContent: "space-around"}}>
        <div>
          <Card sx={{ maxWidth: 800, margin: "15px" }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Steuerstundung
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Auf erzielte Gewinne mit Kapitalanlagen musst du in Deutschland 25% Kapitalertragsteuer (+ Soli und ggf. Kirchensteuer) zahlen. 
                Doch die Steuern fallen bei Akien erst an, wenn du deine Aktienanteile auch verkaufst und damit Gewinne realisierst.
                Der Zeitpunkt wann du deine Gewinne realisierst spielt in deinem Endvermögen jedoch eine große Rolle. 
                Diese Demo zeigt dir, das es sich lohnt deine Aktiengewinne so spät wie möglich zu realisieren.
              </Typography>
            </CardContent>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Der Vergleich
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Hierzu haben wir zwei Strategien miteinander verglichen: Dieter realisiert seine Aktiengewinne jedes Jahr, um von 
                den Gewinnen weiter Aktien zu kaufen. Anna betreibt die Buy&Hold-Strategie und realisiert ihre Gewinne erst am Ende der Gesamthaltedauer. 
                <br/><br/>
                
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Wir betrachten drei verschiedene Fälle: 
                Die Renditeentwicklung ohne Steuern (<span style={{ color: "orange"}}>orange</span>)
                Die Renditeentwicklung mit Annas Strategie (<span style={{ color: "green"}}>grün</span>)
                Die Renditeentwicklung mit Dieters Strategie (<span style={{ color: "blue"}}>blau</span>)
              </Typography>
            
              <TaxDefferalDemo/>
            </CardContent>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Beobachtungen
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                1. Anna ist in jedem Fall besser
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ width: "100%"}}>
                Du kannst es gerne einmal in der Demo ausprobieren. In jedem Fall hat Anna am Ende mehr Geld in der 
                Tasche oder sie hat zumindest weniger Geld verloren als Dieter. Das liegt daran, dass sie die Teile der Gewinne, 
                die sie dem Staat in Form von Steuern schuldet, noch weiter für sich arbeiten lassen konte, während Dieter diese 
                Option deutlich schwächer für sich nutzen konnte. <br/><br/>

                Nehmen wir mal ein extremes und vereinfachendes Beispiel: Wir haben keine Inflation, eine Kapitalertragsteuer von 50% und eine Rendite 
                von 200%. Dann gäbe es mit Annas Strategie folgende Ketten

                <MathBlock latex={`\\[ 1 ${R} 3 ${R} 9 ${R} 27 ${T} 14 \\]`}/>

                Bei Dieter sähe das ganze so aus 

                <MathBlock latex={`\\[ 1 ${R} 3 ${T} 2 ${R} 6 \\] \\[ ${T} 4 ${R} 12 ${T} 9 \\]`}/>
    {/* 
                <div style={{ overflow: "auto", width: "50px"}}>
                  <MathJax hideUntilTypeset='every'>
                    {`\\[ 1 ${R} 3 ${T} 2 ${R} 6 \\]`}
                    {`\\[ ${T} 4 ${R} 12 ${T} 9 \\]`}
                  </MathJax>
                </div>
                */}
              </Typography>
              <br/>
              <Typography gutterBottom variant="h6" component="div">
                2. Zinseszins
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Mit zunehmender Anlagedauer wird Annas Vorteil gegenüber Dieter deutlicher und zwar nicht nur 
                in absoluten Zahlen, sondern auch der prozentuale Abstand erhöht exponenziell. Das liegt daran, dass 
                frühzeitige Realisierung die Basis des Zinseszins schröpft. 
              </Typography>
              <br/>
              <Typography gutterBottom variant="h6" component="div">
                3. Verlust kann verhindert werden
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ width: "100%"}}>
                 Es kann sogar dazu kommen, dass Dieter Verlust macht, während Anna Gewinne macht und das obwohl ihre Aktien beide 
                 die gleiche Rendite abwerfen. Dieter macht nämlich zwangsläufig Verlust, wenn

                 <MathBlock latex={"\\[Rendite \\cdot (1 - Kapitalertragsteuer)  < Inflation\\]"}/>

                 gilt. Das liegt daran, dass man in diesem Zusammenhang die Inflation als eine Art 2. Steuer betrachten kann, welche 
                 aber nicht auf den Realgewinn angewendet wird, sondern auf den Bestand. Auf der anderen Seite macht Anna (sofern die 
                 Kapitalertragsteuer nicht bei 100% liegt) erst zwangsläufig Verlust, wenn die Rendite kleiner als die Inflation ist. 
                 Dann kommt sie nämlich in den Gewinnbereich, wenn Anna nur lang genug hält. 
              </Typography>
              <br/>

              <Typography gutterBottom variant="h5" component="div">
                Fazit
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Zusammenfassend lässt sich mitnehmen, dass unter Berückichtigung der Steuerbelastung der Verkauf der 
                Aktien so weit wie möglich in die Zukunft verschoben werden sollte. Dabei sind hier Kosten wie Handelsplatzgebüren 
                und die Differenz zwischen Einkauf und Verkaufpreis noch nicht einmal berücksichtigt.
                
                <br/><br/>

                <div style={{ display: "flex", justifyContent: "space-between"}}>
                  <div></div>
                  <blockquote style={{ color: "#aaa", borderRadius: "15px", padding: "15px", margin: "15px"}}>
                    <p><q>Hin und her macht Taschen leer</q></p>
                    <figcaption>—<cite>alte Börsenweisheit</cite></figcaption>
                  </blockquote>
                </div>
                

              </Typography>
            </CardContent>
          </Card>
        </div>
      </main>
    </MathJaxContext>
  )
}