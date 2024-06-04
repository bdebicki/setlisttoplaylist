import { useQuery } from '@tanstack/react-query'

export const useSearchArtist = (query: string) => {
	const { data, isLoading, refetch } = useQuery({
		queryKey: ['concert', query],
		queryFn: async () => {
			const response = await fetch(
				`/api/searchArtist?artistName=${query}`,
				{
					headers: {
						Accept: 'application/json',
					},
				}
			)
			if (!response.ok) {
				throw new Error('Network response was not ok')
			}
			return response.json()
		},
		refetchOnMount: false,
		refetchOnWindowFocus: false,
	})

	return { data, isLoading, refetch }
}
