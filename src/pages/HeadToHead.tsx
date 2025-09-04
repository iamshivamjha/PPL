import { useState, useMemo } from 'react'
import { useData } from '@/contexts/DataContext'

export default function HeadToHead() {
	const [player1Name, setPlayer1Name] = useState('')
	const [player2Name, setPlayer2Name] = useState('')
	const [showSuggestions1, setShowSuggestions1] = useState(false)
	const [showSuggestions2, setShowSuggestions2] = useState(false)

	const { getPlayerByName, searchPlayers } = useData()
	const player1 = getPlayerByName(player1Name)
	const player2 = getPlayerByName(player2Name)

	const suggestions1 = useMemo(() => searchPlayers(player1Name), [player1Name])
	const suggestions2 = useMemo(() => searchPlayers(player2Name), [player2Name])

	const handlePlayer1Select = (name: string) => {
		setPlayer1Name(name)
		setShowSuggestions1(false)
	}

	const handlePlayer2Select = (name: string) => {
		setPlayer2Name(name)
		setShowSuggestions2(false)
	}

	const getComparisonResult = (stat1: number, stat2: number, higherIsBetter: boolean = true) => {
		if (stat1 === stat2) return { winner: 'tie', difference: 0 }
		const isPlayer1Better = higherIsBetter ? stat1 > stat2 : stat1 < stat2
		return {
			winner: isPlayer1Better ? 'player1' : 'player2',
			difference: Math.abs(stat1 - stat2)
		}
	}

	return (
		<div className="page-container">
			<div className="page-content">
				{/* Header */}
				<div className="content-center space-y-6">
					<h1 className="text-4xl sm:text-5xl lg:text-6xl main-title">
						⚔️ HEAD-TO-HEAD COMPARISON
					</h1>
					<p className="text-lg sm:text-xl subtitle max-w-3xl mx-auto">
						Compare any two players side by side with detailed statistics
					</p>
				</div>

				{/* Player Selection */}
				<div className="cricket-card rounded-2xl p-8 space-y-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* Player 1 Selection */}
						<div className="space-y-2">
							<label className="block text-sm font-medium text-visible">Player 1</label>
							<div className="relative">
								<input
									type="text"
									value={player1Name}
									onChange={(e) => {
										setPlayer1Name(e.target.value)
										setShowSuggestions1(true)
									}}
									onFocus={() => setShowSuggestions1(true)}
									onBlur={() => setTimeout(() => setShowSuggestions1(false), 200)}
									className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
									placeholder="Enter player name..."
								/>
								{showSuggestions1 && suggestions1.length > 0 && (
									<div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg max-h-48 overflow-y-auto">
										{suggestions1.map((player) => (
											<div
												key={player.name}
												className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-gray-900 dark:text-white"
												onClick={() => handlePlayer1Select(player.name)}
											>
												{player.name}
											</div>
										))}
									</div>
								)}
							</div>
							{player1Name && !player1 && (
								<p className="text-red-500 text-sm">Invalid player name</p>
							)}
						</div>

						{/* Player 2 Selection */}
						<div className="space-y-2">
							<label className="block text-sm font-medium text-visible">Player 2</label>
							<div className="relative">
								<input
									type="text"
									value={player2Name}
									onChange={(e) => {
										setPlayer2Name(e.target.value)
										setShowSuggestions2(true)
									}}
									onFocus={() => setShowSuggestions2(true)}
									onBlur={() => setTimeout(() => setShowSuggestions2(false), 200)}
									className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
									placeholder="Enter player name..."
								/>
								{showSuggestions2 && suggestions2.length > 0 && (
									<div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg max-h-48 overflow-y-auto">
										{suggestions2.map((player) => (
											<div
												key={player.name}
												className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-gray-900 dark:text-white"
												onClick={() => handlePlayer2Select(player.name)}
											>
												{player.name}
											</div>
										))}
									</div>
								)}
							</div>
							{player2Name && !player2 && (
								<p className="text-red-500 text-sm">Invalid player name</p>
							)}
						</div>
					</div>
				</div>

				{/* Comparison Results */}
				{player1 && player2 && (
					<div className="cricket-card rounded-2xl p-8">
						<h2 className="text-2xl font-bold text-center text-visible mb-8">
							{player1.name} vs {player2.name}
						</h2>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{/* Player 1 Stats */}
							<div className="space-y-4">
								<h3 className="text-xl font-bold text-center text-visible bg-blue-500/20 rounded-lg py-2">
									{player1.name}
								</h3>
								<div className="space-y-3">
									<div className="flex justify-between items-center p-3 bg-blue-500/10 rounded-lg">
										<span className="text-visible">Matches</span>
										<span className="text-visible font-semibold">{player1.matches}</span>
									</div>
									<div className="flex justify-between items-center p-3 bg-blue-500/10 rounded-lg">
										<span className="text-visible">Runs</span>
										<span className="text-visible font-semibold">{player1.runs}</span>
									</div>
									<div className="flex justify-between items-center p-3 bg-blue-500/10 rounded-lg">
										<span className="text-visible">Wickets</span>
										<span className="text-visible font-semibold">{player1.wickets}</span>
									</div>
									<div className="flex justify-between items-center p-3 bg-blue-500/10 rounded-lg">
										<span className="text-visible">Batting Average</span>
										<span className="text-visible font-semibold">{player1.battingAverage.toFixed(1)}</span>
									</div>
									<div className="flex justify-between items-center p-3 bg-blue-500/10 rounded-lg">
										<span className="text-visible">Bowling Average</span>
										<span className="text-visible font-semibold">
											{player1.bowlingAverage === 0 ? 'N/A' : player1.bowlingAverage.toFixed(1)}
										</span>
									</div>
									{player1.matchesAsCaptain > 0 && (
										<div className="flex justify-between items-center p-3 bg-blue-500/10 rounded-lg">
											<span className="text-visible">Win % (Captain)</span>
											<span className="text-visible font-semibold">{player1.winPercentage.toFixed(1)}%</span>
										</div>
									)}
								</div>
							</div>

							{/* Player 2 Stats */}
							<div className="space-y-4">
								<h3 className="text-xl font-bold text-center text-visible bg-green-500/20 rounded-lg py-2">
									{player2.name}
								</h3>
								<div className="space-y-3">
									<div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg">
										<span className="text-visible">Matches</span>
										<span className="text-visible font-semibold">{player2.matches}</span>
									</div>
									<div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg">
										<span className="text-visible">Runs</span>
										<span className="text-visible font-semibold">{player2.runs}</span>
									</div>
									<div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg">
										<span className="text-visible">Wickets</span>
										<span className="text-visible font-semibold">{player2.wickets}</span>
									</div>
									<div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg">
										<span className="text-visible">Batting Average</span>
										<span className="text-visible font-semibold">{player2.battingAverage.toFixed(1)}</span>
									</div>
									<div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg">
										<span className="text-visible">Bowling Average</span>
										<span className="text-visible font-semibold">
											{player2.bowlingAverage === 0 ? 'N/A' : player2.bowlingAverage.toFixed(1)}
										</span>
									</div>
									{player2.matchesAsCaptain > 0 && (
										<div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg">
											<span className="text-visible">Win % (Captain)</span>
											<span className="text-visible font-semibold">{player2.winPercentage.toFixed(1)}%</span>
										</div>
									)}
								</div>
							</div>
						</div>

						{/* Comparison Summary */}
						<div className="mt-8 p-6 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg">
							<h3 className="text-lg font-bold text-center text-visible mb-4">Comparison Summary</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
								{/* Matches */}
								<div className="text-center">
									<div className="text-visible-muted mb-1">Most Matches</div>
									<div className="text-visible font-semibold">
										{getComparisonResult(player1.matches, player2.matches).winner === 'player1' ? player1.name : 
										 getComparisonResult(player1.matches, player2.matches).winner === 'player2' ? player2.name : 'Tie'}
									</div>
								</div>
								
								{/* Runs */}
								<div className="text-center">
									<div className="text-visible-muted mb-1">Most Runs</div>
									<div className="text-visible font-semibold">
										{getComparisonResult(player1.runs, player2.runs).winner === 'player1' ? player1.name : 
										 getComparisonResult(player1.runs, player2.runs).winner === 'player2' ? player2.name : 'Tie'}
									</div>
								</div>
								
								{/* Wickets */}
								<div className="text-center">
									<div className="text-visible-muted mb-1">Most Wickets</div>
									<div className="text-visible font-semibold">
										{getComparisonResult(player1.wickets, player2.wickets).winner === 'player1' ? player1.name : 
										 getComparisonResult(player1.wickets, player2.wickets).winner === 'player2' ? player2.name : 'Tie'}
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
