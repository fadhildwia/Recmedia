"use client"

import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';

export function ReactQueryProvider({children}: {children: React.ReactNode}) {
  const [queryClient] = useState(
    new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}