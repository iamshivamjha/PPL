export default function About() {
	return (
		<div className="page-container">
			<div className="page-content">
				{/* Header */}
				<div className="content-center space-y-6">
					<h1 className="text-4xl sm:text-5xl lg:text-6xl main-title">
						About PCA
					</h1>
					<p className="text-lg sm:text-xl subtitle max-w-3xl mx-auto">
						Your comprehensive destination for cricket statistics, records, and insights
					</p>
				</div>

				{/* Main Content Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Mission Card */}
					<div className="cricket-card rounded-2xl p-8 space-y-6">
						<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
							<span className="text-2xl">🏏</span>
						</div>
						<h2 className="text-2xl font-bold text-visible">Our Mission</h2>
						<p className="text-visible-muted leading-relaxed">
							To play cricket with passion, honesty, and teamwork while spreading joy in our community.
						</p>
					</div>

					{/* Vision Card */}
					<div className="cricket-card rounded-2xl p-8 space-y-6">
						<div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
							<span className="text-2xl">🎯</span>
						</div>
						<h2 className="text-2xl font-bold text-visible">Our Vision</h2>
						<p className="text-visible-muted leading-relaxed">
							To build a friendly cricket culture where every match is about fair play, respect, and lifelong memories.
						</p>
					</div>
				</div>

				{/* Features Section */}
				<div className="cricket-card rounded-2xl p-8 lg:p-12">
					<h2 className="text-3xl font-bold text-center text-visible mb-8">
						What Makes Us Special
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="text-center space-y-4">
							<div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto">
								<span className="text-xl">⚖️</span>
							</div>
							<h3 className="text-lg font-semibold text-visible">Fair Play</h3>
							<p className="text-sm text-visible-muted">
								We never cheat, we play clean.
							</p>
						</div>
						<div className="text-center space-y-4">
							<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto">
								<span className="text-xl">🤝</span>
							</div>
							<h3 className="text-lg font-semibold text-visible">Respect</h3>
							<p className="text-sm text-visible-muted">
								Seniors guide, juniors are encouraged.
							</p>
						</div>
						<div className="text-center space-y-4">
							<div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mx-auto">
								<span className="text-xl">👥</span>
							</div>
							<h3 className="text-lg font-semibold text-visible">Brotherhood</h3>
							<p className="text-sm text-visible-muted">
								Win or lose, we stand together.
							</p>
						</div>
					</div>
				</div>

				{/* Team Section */}
				<div className="cricket-card rounded-2xl p-8 text-center">
					<h2 className="text-3xl font-bold text-visible mb-4">
						Built with ❤️ for PCA
					</h2>
					<div className="space-y-4">
						<p className="text-lg text-visible-muted max-w-2xl mx-auto">
							Created with passion and dedication for the PCA community.
						</p>
						<div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-visible-muted">
							<div className="flex items-center gap-2">
								<span className="text-sm">👨‍💻</span>
								<span className="text-sm">Shivam Jha</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="text-sm">📱</span>
								<span className="text-sm">7979761746</span>
							</div>
						</div>
						<div className="text-xs text-visible-muted mt-4">
							© 2024 Shivam Jha. All rights reserved.
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
