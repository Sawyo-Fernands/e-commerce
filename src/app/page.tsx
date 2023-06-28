'use client'

import { QueryClientProvider, QueryClient } from 'react-query'
import { Saira } from "@next/font/google";
import { Catalogo } from './Catalogo/page';

const queryClient = new QueryClient()

const saira = Saira({
  weight: "400",
  display: "swap",
  subsets:['latin']
});

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={saira.className}>
      <Catalogo />
      </div>
    </QueryClientProvider>
  )
}
