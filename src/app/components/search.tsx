import React, { ChangeEvent, useState } from 'react'
import { Input } from '@/components/input'
import { Button } from '@/components/button'
import { useSearchArtist } from '@/api/actions'

export const Search = () => {
	const [query, setQuery] = useState<string>('')
	const { data, isLoading, refetch } = useSearchArtist(query)

	const handleQueryInput = (e: ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value)
	}

	const handleSearch = () => {
		refetch()
	}

	console.log({ data })

	return (
		<div>
			<Input onChange={handleQueryInput} value={query} />
			<Button onClick={handleSearch}>Search</Button>
			{isLoading && <p>Loading...</p>}
			{data && <div>{JSON.stringify(data)}</div>}
		</div>
	)
}
