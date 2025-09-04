

import { useData } from '@/contexts/DataContext'

export default function Home() {
	const { trophyWinners } = useData()
	return (
		<div className="page-container">
			<div className="page-content">
				{/* Hero Section */}
				<div className="content-center space-y-6">
					<h1 className="text-4xl sm:text-5xl lg:text-6xl main-title">
						🏏 PCA 🏏
					</h1>
					<p className="text-lg sm:text-xl lg:text-2xl subtitle max-w-3xl mx-auto">
						Your Ultimate Cricket Statistics Portal - Track, Analyze, and Celebrate Cricket Excellence
					</p>
				</div>
				
				{/* Feature Cards Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
					{/* Live Statistics Card */}
					<div className="cricket-card rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4 group">
						<div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
							<span className="text-lg sm:text-2xl">📊</span>
						</div>
						<h3 className="text-lg sm:text-xl font-bold text-center text-visible">Live Statistics</h3>
						
						{/* PCA Match Statistics */}
						<div className="space-y-2 sm:space-y-3 mt-3 sm:mt-4">
							<div className="grid grid-cols-4 gap-1 sm:gap-2 text-center">
								<div className="bg-blue-500/20 rounded-lg p-1 sm:p-2">
									<div className="text-sm sm:text-lg font-bold text-visible">362</div>
									<div className="text-xs text-visible-muted">Played</div>
								</div>
								<div className="bg-green-500/20 rounded-lg p-1 sm:p-2">
									<div className="text-sm sm:text-lg font-bold text-visible">260</div>
									<div className="text-xs text-visible-muted">Won</div>
								</div>
								<div className="bg-red-500/20 rounded-lg p-1 sm:p-2">
									<div className="text-sm sm:text-lg font-bold text-visible">102</div>
									<div className="text-xs text-visible-muted">Lost</div>
								</div>
								<div className="bg-yellow-500/20 rounded-lg p-1 sm:p-2">
									<div className="text-sm sm:text-lg font-bold text-visible">71.8%</div>
									<div className="text-xs text-visible-muted">Win %</div>
								</div>
							</div>
						</div>
					</div>
					
					{/* Historical Records Card */}
					<div className="cricket-card rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4 group">
						<div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
							<span className="text-lg sm:text-2xl">🏆</span>
						</div>
						<h3 className="text-lg sm:text-xl font-bold text-center text-visible">Historical Records</h3>
						
						{/* PCA Trophies Won */}
						<div className="space-y-2 mt-4">
							<div className="text-center">
								<div className="text-sm font-semibold text-visible mb-2">PCA Trophies Won</div>
								<div className="grid grid-cols-5 gap-1 text-xs mb-2">
									<div className="text-visible font-semibold">Trophy</div>
									<div className="text-visible font-semibold">Year</div>
									<div className="text-visible font-semibold">MOTM</div>
									<div className="text-visible font-semibold">MOTS</div>
									<div className="text-visible font-semibold">Captain</div>
								</div>
								<div className="space-y-1 text-xs">
									{trophyWinners.map((trophy, index) => (
										<div key={index} className="grid grid-cols-5 gap-1 items-center bg-green-500/10 rounded px-2 py-1">
											<span className="text-visible-muted text-start">{trophy.trophy}</span>
											<span className="text-visible-muted text-center">{trophy.year}</span>
											<span className="text-visible-muted text-center">{trophy.MOTM}</span>
											<span className="text-visible-muted text-center">{trophy.MOTS === ' ' ? '' : trophy.MOTS}</span>
											<span className="text-visible-muted text-center">{trophy.captain}</span>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
					
					{/* PPL Analytics Card */}
					<div className="cricket-card rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4 group">
						<div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
							<span className="text-lg sm:text-2xl">📈</span>
						</div>
						<h3 className="text-lg sm:text-xl font-bold text-center text-visible">PPL Analytics</h3>
						
						{/* PPL Player Statistics */}
						<div className="space-y-2 mt-4">
							<div className="text-center">
								<div className="text-sm font-semibold text-visible mb-2">Top Performers</div>
								<div className="space-y-1 text-xs">
									<div className="flex justify-between items-center bg-purple-500/10 rounded px-2 py-1">
										<span className="text-visible">Best Batsman</span>
										<span className="text-visible-muted">Bholu</span>
									</div>
									<div className="flex justify-between items-center bg-purple-500/10 rounded px-2 py-1">
										<span className="text-visible">Best Bowler</span>
										<span className="text-visible-muted">Binit</span>
									</div>
									<div className="flex justify-between items-center bg-purple-500/10 rounded px-2 py-1">
										<span className="text-visible">Best Captain</span>
										<span className="text-visible-muted">Bholu</span>
									</div>
									<div className="flex justify-between items-center bg-purple-500/10 rounded px-2 py-1">
										<span className="text-visible">Best Batting Avg</span>
										<span className="text-visible-muted">Bholu</span>
									</div>
									<div className="flex justify-between items-center bg-purple-500/10 rounded px-2 py-1">
										<span className="text-visible">Best Bowling Avg</span>
										<span className="text-visible-muted">Binit</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				{/* CTA Section */}
				<div className="cricket-card rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12 text-center">
					<h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-visible mb-3 sm:mb-4">
						Ready to Explore Cricket Excellence?
					</h2>
					<p className="text-sm sm:text-base lg:text-lg text-visible-muted mb-6 sm:mb-8 max-w-2xl mx-auto">
						Dive into our comprehensive database of cricket statistics, records, and insights. 
						From legendary performances to current season highlights.
					</p>
					<div className="flex justify-center">
						<a 
							href="/records" 
							className="inline-flex items-center justify-center px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
						>
							📊 View Records
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
