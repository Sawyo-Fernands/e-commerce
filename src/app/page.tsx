'use client'

import { Catalogo } from '@/app/pages/Catalogo/page'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
        <Catalogo />
    </QueryClientProvider>
  )
}
