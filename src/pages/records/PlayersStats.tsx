import { useState, useMemo } from 'react'
import { PlayerProfile } from '@/components/PlayerProfile'
import { ArrowLeft } from 'lucide-react'
import { useData } from '@/contexts/DataContext'

const columns = [
	{ key: 'sl', header: 'Sl' },
	{ key: 'player', header: 'Player' },
	{ key: 'm', header: 'PPL Matches' },
	{ key: 'run', header: 'PPL Runs' },
	{ key: 'wkt', header: 'PPL Wickets' },
]

export default function PlayersStats() {
	const { players } = useData()
	const [sortBy, setSortBy] = useState<'matches' | 'runs' | 'wickets' | 'none'>('none')
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')

	const filteredAndSortedRows = useMemo(() => {
		// Convert players to the format expected by the table, excluding Bablu Singh (Hall of Fame only)
		const allRows = players
			.filter(player => player.name !== 'Bablu Singh')
			.map((player, index) => ({
				sl: index + 1,
				player: player.name,
				m: player.matches,
				run: player.runs,
				wkt: player.wickets
			}))

		// Create a copy of the data
		let filtered = [...allRows]

		// Sort the data
		if (sortBy !== 'none') {
			filtered.sort((a, b) => {
				let aValue: number, bValue: number
				
				switch (sortBy) {
					case 'matches':
						aValue = a.m
						bValue = b.m
						break
					case 'runs':
						aValue = a.run
						bValue = b.run
						break
					case 'wickets':
						aValue = a.wkt
						bValue = b.wkt
						break
					default:
						return 0
				}

				if (sortOrder === 'asc') {
					return aValue - bValue
				} else {
					return bValue - aValue
				}
			})
		}

		// Update SI numbers to reflect the ranking order (1, 2, 3, 4...)
		return filtered.map((row, index) => ({
			...row,
			sl: index + 1
		}))
	}, [players, sortBy, sortOrder])

	const handleSort = (type: 'matches' | 'runs' | 'wickets') => {
		if (sortBy === type) {
			setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
		} else {
			setSortBy(type)
			setSortOrder('desc')
		}
	}

	return (
		<div className="page-container">
			<div className="records-container">

				
				<div className="content-center">
					<h3 className="text-3xl font-bold main-title">PPL STATS</h3>
				</div>

				{/* Filter Controls */}
				<div className="cricket-card rounded-xl p-4 sm:p-6 max-w-4xl mx-auto">
					<div className="flex flex-wrap gap-2 sm:gap-4 justify-center items-center">
						<span className="text-visible font-semibold">Sort by:</span>
						<button
							onClick={() => handleSort('matches')}
							className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
								sortBy === 'matches'
									? 'bg-blue-600 text-white'
									: 'bg-gray-200 dark:bg-gray-700 text-visible hover:bg-gray-300 dark:hover:bg-gray-600'
							}`}
						>
							Matches {sortBy === 'matches' && (sortOrder === 'desc' ? '↓' : '↑')}
						</button>
						<button
							onClick={() => handleSort('runs')}
							className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
								sortBy === 'runs'
									? 'bg-blue-600 text-white'
									: 'bg-gray-200 dark:bg-gray-700 text-visible hover:bg-gray-300 dark:hover:bg-gray-600'
							}`}
						>
							Runs {sortBy === 'runs' && (sortOrder === 'desc' ? '↓' : '↑')}
						</button>
						<button
							onClick={() => handleSort('wickets')}
							className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
								sortBy === 'wickets'
									? 'bg-blue-600 text-white'
									: 'bg-gray-200 dark:bg-gray-700 text-visible hover:bg-gray-300 dark:hover:bg-gray-600'
							}`}
						>
							Wickets {sortBy === 'wickets' && (sortOrder === 'desc' ? '↓' : '↑')}
						</button>
						<button
							onClick={() => setSortBy('none')}
							className="px-4 py-2 rounded-lg font-medium bg-gray-200 dark:bg-gray-700 text-visible hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200"
						>
							Reset
						</button>
					</div>
				</div>

				{/* Table */}
				<div className="cricket-card rounded-xl overflow-hidden max-w-6xl mx-auto w-full">
					<div className="overflow-x-auto -mx-2 sm:mx-0">
						<table className="w-full min-w-[400px] sm:min-w-[500px]">
							<thead className="bg-blue-600 dark:bg-blue-700 text-white">
								<tr>
									{columns.map((c) => (
										<th key={c.key} className="py-3 sm:py-4 px-3 sm:px-6 text-center font-semibold text-sm sm:text-base">{c.header}</th>
									))}
								</tr>
							</thead>
							<tbody>
								{filteredAndSortedRows.map((r, i) => (
									<tr key={r.sl} className={`border-b border-gray-200 dark:border-gray-600 ${i % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700'}`}>
										{columns.map((c) => (
											<td key={c.key} className={`py-2 sm:py-3 px-2 sm:px-3 lg:px-6 text-visible font-medium text-xs sm:text-sm lg:text-base ${c.key === 'sl' ? 'text-center' : ''}`}>
												{c.key === 'player' ? (
													<PlayerProfile 
														playerName={String(r[c.key as keyof typeof r] ?? '')} 
														className="text-blue-400 hover:text-blue-300"
														showModal={true}
													/>
												) : (
													String(r[c.key as keyof typeof r] ?? '')
												)}
											</td>
										))}
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
				
				{/* Back Button */}
				<div className="mt-8 flex justify-center">
					<a 
						href="/records" 
						className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
					>
						<ArrowLeft className="h-5 w-5" />
						<span>Back to Records</span>
					</a>
				</div>
			</div>
		</div>
	)
}
