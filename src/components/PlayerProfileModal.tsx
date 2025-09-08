import { useEffect } from 'react'
import { X } from 'lucide-react'
import { useData } from '@/contexts/DataContext'

interface PlayerProfileModalProps {
	playerName: string
	isOpen: boolean
	onClose: () => void
}

export function PlayerProfileModal({ playerName, isOpen, onClose }: PlayerProfileModalProps) {
	const { getPlayerByName } = useData()
	const player = getPlayerByName(playerName)

	if (!isOpen || !player) return null

	// Modal is now completely isolated from background interactions

	// Prevent keyboard events from reaching background
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			// Only allow Escape key to close modal
			if (e.key === 'Escape') {
				onClose()
			}
			// Prevent all other keyboard events from reaching background
			e.stopPropagation()
		}

		if (isOpen) {
			document.addEventListener('keydown', handleKeyDown, true)
		}

		return () => {
			document.removeEventListener('keydown', handleKeyDown, true)
		}
	}, [isOpen, onClose])

	const handleBackdropClick = (e: React.MouseEvent) => {
		// Prevent closing when clicking on backdrop
		e.stopPropagation()
	}

	return (
		<div 
			className="fixed inset-0 bg-black bg-opacity-75 flex items-start justify-center z-[9999] p-0 sm:p-4 overflow-y-auto"
			onClick={handleBackdropClick}
			data-modal="player-profile"
		>
			<div 
				className="cricket-card rounded-b-2xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 max-w-2xl w-full min-h-[100vh] sm:min-h-0 sm:max-h-[90vh] sm:mt-8 overflow-y-auto"
				onClick={(e) => e.stopPropagation()}
			>
				{/* Mobile Swipe Indicator */}
				<div className="sm:hidden flex justify-center mb-2">
					<div className="w-12 h-1 bg-gray-400 rounded-full"></div>
				</div>

				{/* Header */}
				<div className="flex justify-between items-center mb-4 sm:mb-6">
					<h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-visible">Player Profile</h2>
					<button
						onClick={onClose}
						className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full p-2 transition-colors"
						aria-label="Close player profile"
					>
						<X className="h-5 w-5 sm:h-6 sm:w-6" />
					</button>
				</div>

				{/* Player Info */}
				<div className="text-center mb-6 sm:mb-8">
					<div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
						<span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
							{player.name.charAt(0).toUpperCase()}
						</span>
					</div>
					<h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-visible mb-2">{player.name}</h3>
					{player.matchesAsCaptain > 0 && (
						<div className="inline-flex items-center px-2 sm:px-3 py-1 bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 rounded-full text-xs sm:text-sm font-medium">
							👑 Captain
						</div>
					)}
				</div>

				{/* Statistics Grid */}
				<div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8">
					{/* Matches */}
					<div className="bg-blue-500/10 rounded-lg p-2 sm:p-3 lg:p-4 text-center">
						<div className="text-lg sm:text-xl lg:text-2xl font-bold text-visible">{player.matches}</div>
						<div className="text-xs sm:text-sm text-visible-muted">Matches</div>
					</div>

					{/* Runs */}
					<div className="bg-green-500/10 rounded-lg p-2 sm:p-3 lg:p-4 text-center">
						<div className="text-lg sm:text-xl lg:text-2xl font-bold text-visible">{player.runs.toLocaleString()}</div>
						<div className="text-xs sm:text-sm text-visible-muted">Runs</div>
					</div>

					{/* Wickets */}
					<div className="bg-purple-500/10 rounded-lg p-2 sm:p-3 lg:p-4 text-center">
						<div className="text-lg sm:text-xl lg:text-2xl font-bold text-visible">{player.wickets}</div>
						<div className="text-xs sm:text-sm text-visible-muted">Wickets</div>
					</div>

					{/* Batting Average */}
					<div className="bg-orange-500/10 rounded-lg p-2 sm:p-3 lg:p-4 text-center">
						<div className="text-lg sm:text-xl lg:text-2xl font-bold text-visible">{player.battingAverage.toFixed(1)}</div>
						<div className="text-xs sm:text-sm text-visible-muted">Batting Avg</div>
					</div>

					{/* Bowling Average */}
					<div className="bg-red-500/10 rounded-lg p-2 sm:p-3 lg:p-4 text-center">
						<div className="text-lg sm:text-xl lg:text-2xl font-bold text-visible">
							{player.bowlingAverage === 0 ? 'N/A' : player.bowlingAverage.toFixed(1)}
						</div>
						<div className="text-xs sm:text-sm text-visible-muted">Bowling Avg</div>
					</div>

					{/* Captaincy Stats (if applicable) */}
					{player.matchesAsCaptain > 0 ? (
						<div className="bg-yellow-500/10 rounded-lg p-2 sm:p-3 lg:p-4 text-center">
							<div className="text-lg sm:text-xl lg:text-2xl font-bold text-visible">{player.winPercentage.toFixed(1)}%</div>
							<div className="text-xs sm:text-sm text-visible-muted">Win % (Captain)</div>
						</div>
					) : (
						<div className="bg-gray-500/10 rounded-lg p-2 sm:p-3 lg:p-4 text-center">
							<div className="text-lg sm:text-xl lg:text-2xl font-bold text-visible">-</div>
							<div className="text-xs sm:text-sm text-visible-muted">Not Captain</div>
						</div>
					)}
				</div>

				{/* Detailed Stats */}
				<div className="space-y-3 sm:space-y-4">
					<h4 className="text-lg sm:text-xl font-bold text-visible">Detailed Statistics</h4>
					
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
						{/* Batting Stats */}
						<div className="bg-blue-500/5 rounded-lg p-3 sm:p-4">
							<h5 className="font-semibold text-visible mb-2 sm:mb-3 text-sm sm:text-base">🏏 Batting</h5>
							<div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
								<div className="flex justify-between">
									<span className="text-visible-muted">Total Runs:</span>
									<span className="text-visible font-medium">{player.runs.toLocaleString()}</span>
								</div>
								<div className="flex justify-between">
									<span className="text-visible-muted">Matches:</span>
									<span className="text-visible font-medium">{player.matches}</span>
								</div>
								<div className="flex justify-between">
									<span className="text-visible-muted">Average:</span>
									<span className="text-visible font-medium">{player.battingAverage.toFixed(1)}</span>
								</div>
								<div className="flex justify-between">
									<span className="text-visible-muted">Runs per Match:</span>
									<span className="text-visible font-medium">{(player.runs / player.matches).toFixed(1)}</span>
								</div>
							</div>
						</div>

						{/* Bowling Stats */}
						<div className="bg-purple-500/5 rounded-lg p-3 sm:p-4">
							<h5 className="font-semibold text-visible mb-2 sm:mb-3 text-sm sm:text-base">🎯 Bowling</h5>
							<div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
								<div className="flex justify-between">
									<span className="text-visible-muted">Total Wickets:</span>
									<span className="text-visible font-medium">{player.wickets}</span>
								</div>
								<div className="flex justify-between">
									<span className="text-visible-muted">Matches:</span>
									<span className="text-visible font-medium">{player.matches}</span>
								</div>
								<div className="flex justify-between">
									<span className="text-visible-muted">Average:</span>
									<span className="text-visible font-medium">
										{player.bowlingAverage === 0 ? 'N/A' : player.bowlingAverage.toFixed(1)}
									</span>
								</div>
								<div className="flex justify-between">
									<span className="text-visible-muted">Wickets per Match:</span>
									<span className="text-visible font-medium">{(player.wickets / player.matches).toFixed(1)}</span>
								</div>
							</div>
						</div>
					</div>

					{/* Captaincy Stats */}
					{player.matchesAsCaptain > 0 && (
						<div className="bg-yellow-500/5 rounded-lg p-3 sm:p-4">
							<h5 className="font-semibold text-visible mb-2 sm:mb-3 text-sm sm:text-base">👑 Captaincy</h5>
							<div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
								<div className="flex justify-between">
									<span className="text-visible-muted">Matches as Captain:</span>
									<span className="text-visible font-medium">{player.matchesAsCaptain}</span>
								</div>
								<div className="flex justify-between">
									<span className="text-visible-muted">Win Percentage:</span>
									<span className="text-visible font-medium">{player.winPercentage.toFixed(1)}%</span>
								</div>
								<div className="flex justify-between">
									<span className="text-visible-muted">Wins as Captain:</span>
									<span className="text-visible font-medium">
										{Math.round((player.winPercentage / 100) * player.matchesAsCaptain)}
									</span>
								</div>
								<div className="flex justify-between">
									<span className="text-visible-muted">Losses as Captain:</span>
									<span className="text-visible font-medium">
										{player.matchesAsCaptain - Math.round((player.winPercentage / 100) * player.matchesAsCaptain)}
									</span>
								</div>
							</div>
						</div>
					)}
				</div>

				{/* Close Button */}
				<div className="mt-6 sm:mt-8 text-center space-y-3">
					<button
						onClick={onClose}
						className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 text-base sm:text-base shadow-lg"
					>
						Close Profile
					</button>
					<p className="text-xs text-visible-muted sm:hidden">
						Tap the X button above or this button to close
					</p>
				</div>
			</div>
		</div>
	)
}
