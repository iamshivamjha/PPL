const items = [
	{ href: '/records/pca-records', label: 'PCA Records' },
	{ href: '/records/ppl-records', label: 'PPL Records' },
	{ href: '/records/players', label: 'PPL Players Stats' },
]

export default function RecordsIndex() {
	return (
		<div className="page-container">
			<div className="page-content">
				<div className="content-center space-y-4">
					<h2 className="text-4xl font-bold main-title">📊 RECORDS & STATISTICS</h2>
					<p className="text-xl subtitle">Explore comprehensive cricket data and performance metrics</p>
				</div>
				
				<div className="mx-auto max-w-6xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center place-items-center">
					{items.map((i) => (
						<a 
							key={i.href} 
							href={i.href} 
							className="cricket-card w-full rounded-xl p-6 hover:scale-105 transition-transform duration-200 group text-center"
						>
							<h3 className="text-lg font-semibold text-visible group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
								{i.label}
							</h3>
							<div className="mt-2 mx-auto w-8 h-1 bg-blue-500 rounded-full group-hover:w-12 transition-all duration-200"></div>
						</a>
					))}
				</div>
			</div>
		</div>
	)
}
