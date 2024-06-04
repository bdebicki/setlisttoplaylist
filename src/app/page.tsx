'use client'

import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Search } from '@/app/components/search'

const queryClient = new QueryClient()

export default function Home() {
	return (
		<QueryClientProvider client={queryClient}>
			<main>
				<Search />
			</main>
		</QueryClientProvider>
	)
}
