'use client'

import { Saira } from "@next/font/google";
import { Catalogo } from './Catalogo/page';


const saira = Saira({
  weight: "400",
  display: "swap",
  subsets:['latin']
});

export default function Home() {
  return (
      <div className={saira.className}>
      <Catalogo />
      </div>
  )
}
