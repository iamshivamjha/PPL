

import { useData } from '@/contexts/DataContext'

export default function HallOfFame() {
	const { hallOfFameMembers } = useData()
	return (
		<div className="page-container">
			<div className="page-content">
				{/* Header */}
				<div className="content-center space-y-6">
					<h1 className="text-4xl sm:text-5xl lg:text-6xl main-title">
						🏆 PCA HALL OF FAME
					</h1>
					<p className="text-lg sm:text-xl subtitle max-w-3xl mx-auto">
						Honoring the legends who have made exceptional contributions to PCA cricket
					</p>
				</div>

				{/* Hall of Fame Members */}
				<div className="space-y-8">
					{hallOfFameMembers.map((member) => (
						<div key={member.name} className="cricket-card rounded-2xl p-8">
							<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
								{/* Member Info */}
								<div className="lg:col-span-1 space-y-4">
									<div className="text-center">
										<div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
											<span className="text-3xl">👑</span>
										</div>
										<h2 className="text-2xl font-bold text-visible">
											{member.name}
										</h2>
										<p className="text-visible-muted">PCA Hall of Fame Member</p>
									</div>
								</div>

								{/* Achievements */}
								<div className="lg:col-span-1 space-y-4">
									<h3 className="text-xl font-bold text-visible">Key Achievements</h3>
									<ul className="space-y-2">
										{member.achievements.map((achievement, idx) => (
											<li key={idx} className="flex items-start space-x-2">
												<span className="text-yellow-500 mt-1">⭐</span>
												<span className="text-visible-muted">{achievement}</span>
											</li>
										))}
									</ul>
								</div>

								{/* Statistics */}
								<div className="lg:col-span-1 space-y-4">
									<h3 className="text-xl font-bold text-visible">Career Statistics</h3>
									<div className="grid grid-cols-2 gap-3">
										<div className="bg-blue-500/10 rounded-lg p-3 text-center">
											<div className="text-lg font-bold text-visible">{member.stats.matches}</div>
											<div className="text-xs text-visible-muted">Matches</div>
										</div>
										<div className="bg-green-500/10 rounded-lg p-3 text-center">
											<div className="text-lg font-bold text-visible">{member.stats.runs}</div>
											<div className="text-xs text-visible-muted">Runs</div>
										</div>
										<div className="bg-purple-500/10 rounded-lg p-3 text-center">
											<div className="text-lg font-bold text-visible">{member.stats.wickets}</div>
											<div className="text-xs text-visible-muted">Wickets</div>
										</div>
										<div className="bg-orange-500/10 rounded-lg p-3 text-center">
											<div className="text-lg font-bold text-visible">{member.stats.battingAverage.toFixed(1)}</div>
											<div className="text-xs text-visible-muted">Batting Avg</div>
										</div>
									</div>
									{member.stats.bowlingAverage && member.stats.bowlingAverage > 0 && (
										<div className="bg-red-500/10 rounded-lg p-3 text-center">
											<div className="text-lg font-bold text-visible">{member.stats.bowlingAverage.toFixed(1)}</div>
											<div className="text-xs text-visible-muted">Bowling Avg</div>
										</div>
									)}
									{member.stats.matchesAsCaptain > 0 && (
										<div className="bg-yellow-500/10 rounded-lg p-3 text-center">
											<div className="text-lg font-bold text-visible">{member.stats.winPercentage.toFixed(1)}%</div>
											<div className="text-xs text-visible-muted">Win % (Captain)</div>
										</div>
									)}
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Hall of Fame Criteria */}
				<div className="cricket-card rounded-2xl p-8">
					<h2 className="text-2xl font-bold text-center text-visible mb-6">
						Hall of Fame Criteria
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						<div className="text-center space-y-3">
							<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto">
								<span className="text-xl">🏆</span>
							</div>
							<h3 className="text-lg font-semibold text-visible">Exceptional Performance</h3>
							<p className="text-sm text-visible-muted">
								Outstanding statistics and consistent performance over multiple seasons
							</p>
						</div>
						<div className="text-center space-y-3">
							<div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto">
								<span className="text-xl">👑</span>
							</div>
							<h3 className="text-lg font-semibold text-visible">Leadership</h3>
							<p className="text-sm text-visible-muted">
								Demonstrated leadership qualities and positive impact on team performance
							</p>
						</div>
						<div className="text-center space-y-3">
							<div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto">
								<span className="text-xl">⭐</span>
							</div>
							<h3 className="text-lg font-semibold text-visible">Contribution</h3>
							<p className="text-sm text-visible-muted">
								Significant contribution to PCA's success and cricket development
							</p>
						</div>
						<div className="text-center space-y-3">
							<div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto">
								<span className="text-xl">🎖️</span>
							</div>
							<h3 className="text-lg font-semibold text-visible">Legacy</h3>
							<p className="text-sm text-visible-muted">
								Created lasting impact and inspired future generations of players
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
