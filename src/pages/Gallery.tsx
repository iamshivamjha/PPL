export default function Gallery() {
	const galleryItems = [
		{
			id: 1,
			title: "Cricket Stadium",
			image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&h=400&fit=crop&crop=center",
			category: "Stadiums"
		},
		{
			id: 2,
			title: "Match Action",
			image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center",
			category: "Matches"
		},
		{
			id: 3,
			title: "Player Celebration",
			image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop&crop=center",
			category: "Players"
		},
		{
			id: 4,
			title: "Cricket Equipment",
			image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=400&fit=crop&crop=center",
			category: "Equipment"
		},
		{
			id: 5,
			title: "Team Huddle",
			image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center",
			category: "Teams"
		},
		{
			id: 6,
			title: "Cricket Training",
			image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop&crop=center",
			category: "Training"
		}
	];

	return (
		<div className="page-container">
			<div className="page-content">
				{/* Header */}
				<div className="content-center space-y-6">
					<h1 className="text-4xl sm:text-5xl lg:text-6xl main-title">
						🖼️ GALLERY
					</h1>
					<p className="text-lg sm:text-xl subtitle max-w-3xl mx-auto">
						Capturing the essence of cricket through stunning visuals and memorable moments
					</p>
				</div>

				{/* Filter Buttons */}
				<div className="flex flex-wrap justify-center gap-4">
					{['All', 'Stadiums', 'Matches', 'Players', 'Equipment', 'Teams', 'Training'].map((category) => (
						<button
							key={category}
							className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20"
						>
							{category}
						</button>
					))}
				</div>

				{/* Gallery Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{galleryItems.map((item) => (
						<div key={item.id} className="cricket-card rounded-2xl overflow-hidden group">
							<div className="relative overflow-hidden">
								<img
									src={item.image}
									alt={item.title}
									className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								<div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
									<span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-2">
										{item.category}
									</span>
									<h3 className="text-xl font-bold">{item.title}</h3>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* CTA Section */}
				<div className="cricket-card rounded-2xl p-8 lg:p-12 text-center">
					<h2 className="text-3xl lg:text-4xl font-bold text-visible mb-4">
						Share Your Cricket Moments
					</h2>
					<p className="text-lg text-visible-muted mb-8 max-w-2xl mx-auto">
						Have amazing cricket photos or videos? We'd love to feature them in our gallery!
					</p>
					<button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
						📸 Submit Your Photos
					</button>
				</div>
			</div>
		</div>
	)
}
