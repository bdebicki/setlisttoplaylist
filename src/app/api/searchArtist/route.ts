import { NextResponse } from 'next/server'

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url)
	const artistName = searchParams.get('artistName')

	console.log('Received request with artistName:', artistName)

	if (!artistName) {
		return NextResponse.json(
			{ error: 'artistName query parameter is required' },
			{ status: 400 }
		)
	}

	try {
		const response = await fetch(
			`https://api.setlist.fm/rest/1.0/search/artists?artistName=${artistName}&p=1&sort=sortName`,
			{
				headers: {
					'x-api-key': process.env.SETLISTFM_API_KEY,
					Accept: 'application/json',
				},
			}
		)

		if (!response.ok) {
			const errorText = await response.text()
			console.error(
				'Failed to fetch data from setlist.fm:',
				response.status,
				response.statusText,
				errorText
			)
			return NextResponse.json(
				{ error: 'Failed to fetch data from setlist.fm' },
				{ status: response.status }
			)
		}

		const data = await response.json()
		return NextResponse.json(data)
	} catch (error) {
		console.error('Unexpected error:', error)
		return NextResponse.json(
			{ error: 'Unexpected error occurred' },
			{ status: 500 }
		)
	}
}
