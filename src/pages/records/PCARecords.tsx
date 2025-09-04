import StubTable from './StubTable'
import { ArrowLeft } from 'lucide-react'
import { useData } from '@/contexts/DataContext'

const captainColumns = [
	{ key: 'captain', header: 'Captain' },
	{ key: 'm', header: 'M' },
	{ key: 'w', header: 'W' },
	{ key: 'l', header: 'L' },
	{ key: 'winPercent', header: 'WIN%' },
]

export default function PCARecords() {
	const { captainRecords } = useData()
	return (
		<div className="page-container">
			<div className="records-container">

				
				<div className="content-center space-y-4 px-4">
					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold main-title text-center break-words leading-tight">🏆 PCA RECORDS</h1>
					<p className="text-lg sm:text-xl subtitle text-center">Pararia Cricket Association Records</p>
				</div>

				{/* Best Win % as Captain */}
				<StubTable title="Best Win % as Captain" columns={captainColumns} rows={captainRecords as any} />

				{/* PCA SuperOver Tournament Winner */}
				<div className="content-center px-4 mb-6">
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold main-title text-center break-words leading-tight">🏆 PCA SUPEROVER TOURNAMENT WINNER</h2>
				</div>
				<div className="cricket-card rounded-xl overflow-hidden max-w-4xl mx-auto w-full">
					<div className="overflow-x-auto">
						<table className="w-full min-w-[400px]">
							<thead className="bg-green-600 dark:bg-green-700 text-white">
								<tr>
									<th className="py-3 sm:py-4 px-3 sm:px-6 text-left font-semibold text-sm sm:text-base whitespace-nowrap">Position</th>
									<th className="py-3 sm:py-4 px-3 sm:px-6 text-left font-semibold text-sm sm:text-base whitespace-nowrap">Winner</th>
									<th className="py-3 sm:py-4 px-3 sm:px-6 text-left font-semibold text-sm sm:text-base whitespace-nowrap">Runner Up</th>
								</tr>
							</thead>
							<tbody>
								<tr className="border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800">
									<td className="py-2 sm:py-3 px-3 sm:px-6 text-visible font-medium text-sm sm:text-base">1st</td>
									<td className="py-2 sm:py-3 px-3 sm:px-6 text-visible font-medium text-sm sm:text-base">Bholu</td>
									<td className="py-2 sm:py-3 px-3 sm:px-6 text-visible font-medium text-sm sm:text-base">Golu</td>
								</tr>
								<tr className="border-b border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
									<td className="py-2 sm:py-3 px-3 sm:px-6 text-visible font-medium text-sm sm:text-base">2nd</td>
									<td className="py-2 sm:py-3 px-3 sm:px-6 text-visible font-medium text-sm sm:text-base">Bholu</td>
									<td className="py-2 sm:py-3 px-3 sm:px-6 text-visible font-medium text-sm sm:text-base">GoluC</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				{/* Grade List */}
				<div className="content-center space-y-4 px-4">
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold main-title text-center break-words leading-tight">🏆 PARARIA TEAM GRADE LIST</h2>
					<p className="text-base sm:text-lg subtitle text-center">Period: 1 Aug 2021 to 31 Jul 2025</p>
				</div>

				<div className="grid gap-4 sm:gap-6 md:grid-cols-2 max-w-6xl mx-auto px-4">
					<div className="cricket-card rounded-xl p-4 sm:p-6 space-y-3 sm:space-y-4">
						<h3 className="text-xl sm:text-2xl font-bold text-yellow-600 dark:text-yellow-400 flex items-center justify-center gap-2 text-center">
							🥇 A+ (700)
						</h3>
						<ol className="space-y-2">
							<li className="flex justify-between items-center p-2 sm:p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
								<span className="font-semibold text-visible text-sm sm:text-base">BHOLU</span>
								<span className="text-yellow-600 dark:text-yellow-400 font-bold text-sm sm:text-base">(38)</span>
							</li>
							<li className="flex justify-between items-center p-2 sm:p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
								<span className="font-semibold text-visible text-sm sm:text-base">GOLUC</span>
								<span className="text-yellow-600 dark:text-yellow-400 font-bold text-sm sm:text-base">(36)</span>
							</li>
							<li className="flex justify-between items-center p-2 sm:p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
								<span className="font-semibold text-visible text-sm sm:text-base">SANDIP</span>
								<span className="text-yellow-600 dark:text-yellow-400 font-bold text-sm sm:text-base">(24)</span>
							</li>
							<li className="flex justify-between items-center p-2 sm:p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
								<span className="font-semibold text-visible text-sm sm:text-base">HIMANSHU</span>
								<span className="text-yellow-600 dark:text-yellow-400 font-bold text-sm sm:text-base">(23)</span>
							</li>
						</ol>
					</div>

					<div className="cricket-card rounded-xl p-4 sm:p-6 space-y-3 sm:space-y-4">
						<h3 className="text-xl sm:text-2xl font-bold text-gray-600 dark:text-gray-300 flex items-center justify-center gap-2 text-center">
							🥈 A (500)
						</h3>
						<ol className="space-y-2">
							<li className="flex justify-between items-center p-2 sm:p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-600">
								<span className="font-semibold text-visible text-sm sm:text-base">SENLI</span>
								<span className="text-gray-600 dark:text-gray-300 font-bold text-sm sm:text-base">(20)</span>
							</li>
							<li className="flex justify-between items-center p-2 sm:p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-600">
								<span className="font-semibold text-visible text-sm sm:text-base">GOLUB</span>
								<span className="text-gray-600 dark:text-gray-300 font-bold text-sm sm:text-base">(16)</span>
							</li>
							<li className="flex justify-between items-center p-2 sm:p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-600">
								<span className="font-semibold text-visible text-sm sm:text-base">AJIT</span>
								<span className="text-gray-600 dark:text-gray-300 font-bold text-sm sm:text-base">(12)</span>
							</li>
							<li className="flex justify-between items-center p-2 sm:p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-600">
								<span className="font-semibold text-visible text-sm sm:text-base">BHODU</span>
								<span className="text-gray-600 dark:text-gray-300 font-bold text-sm sm:text-base">(10)</span>
							</li>
							<li className="flex justify-between items-center p-2 sm:p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-600">
								<span className="font-semibold text-visible text-sm sm:text-base">CHUHI</span>
								<span className="text-gray-600 dark:text-gray-300 font-bold text-sm sm:text-base">(10)</span>
							</li>
							<li className="flex justify-between items-center p-2 sm:p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-600">
								<span className="font-semibold text-visible text-sm sm:text-base">JONI</span>
								<span className="text-gray-600 dark:text-gray-300 font-bold text-sm sm:text-base">(9)</span>
							</li>
						</ol>
					</div>

					<div className="cricket-card rounded-xl p-4 sm:p-6 space-y-3 sm:space-y-4">
						<h3 className="text-xl sm:text-2xl font-bold text-amber-600 dark:text-amber-400 flex items-center justify-center gap-2 text-center">
							🥉 B (300 rs)
						</h3>
						<ol className="space-y-2">
							<li className="flex justify-between items-center p-2 sm:p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
								<span className="font-semibold text-visible text-sm sm:text-base">SIVA</span>
								<span className="text-amber-600 dark:text-amber-400 font-bold text-sm sm:text-base">(8)</span>
							</li>
							<li className="flex justify-between items-center p-2 sm:p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
								<span className="font-semibold text-visible text-sm sm:text-base">CHHOTU</span>
								<span className="text-amber-600 dark:text-amber-400 font-bold text-sm sm:text-base">(7)</span>
							</li>
							<li className="flex justify-between items-center p-2 sm:p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
								<span className="font-semibold text-visible text-sm sm:text-base">SUDHIR</span>
								<span className="text-amber-600 dark:text-amber-400 font-bold text-sm sm:text-base">(6)</span>
							</li>
							<li className="flex justify-between items-center p-2 sm:p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
								<span className="font-semibold text-visible text-sm sm:text-base">MOHIT</span>
								<span className="text-amber-600 dark:text-amber-400 font-bold text-sm sm:text-base">(5)</span>
							</li>
							<li className="flex justify-between items-center p-2 sm:p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
								<span className="font-semibold text-visible text-sm sm:text-base">RAJU</span>
								<span className="text-amber-600 dark:text-amber-400 font-bold text-sm sm:text-base">(4)</span>
							</li>
							<li className="flex justify-between items-center p-2 sm:p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
								<span className="font-semibold text-visible text-sm sm:text-base">LALU</span>
								<span className="text-amber-600 dark:text-amber-400 font-bold text-sm sm:text-base">(4)</span>
							</li>
							<li className="flex justify-between items-center p-2 sm:p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
								<span className="font-semibold text-visible text-sm sm:text-base">BINIT</span>
								<span className="text-amber-600 dark:text-amber-400 font-bold text-sm sm:text-base">(4)</span>
							</li>
							<li className="flex justify-between items-center p-2 sm:p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
								<span className="font-semibold text-visible text-sm sm:text-base">BIKASC</span>
								<span className="text-amber-600 dark:text-amber-400 font-bold text-sm sm:text-base">(3)</span>
							</li>
							<li className="flex justify-between items-center p-2 sm:p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
								<span className="font-semibold text-visible text-sm sm:text-base">SUNIL</span>
								<span className="text-amber-600 dark:text-amber-400 font-bold text-sm sm:text-base">(3)</span>
							</li>
						</ol>
					</div>

					<div className="cricket-card rounded-xl p-4 sm:p-6 space-y-3 sm:space-y-4">
						<h3 className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400 flex items-center justify-center gap-2 text-center">
							🏅 C (100 rs)
						</h3>
						<ol className="space-y-2">
							<li className="flex justify-between items-center p-2 sm:p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
								<span className="font-semibold text-visible text-sm sm:text-base">AKAS</span>
								<span className="text-green-600 dark:text-green-400 font-bold text-sm sm:text-base">(2)</span>
							</li>
							<li className="flex justify-between items-center p-2 sm:p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
								<span className="font-semibold text-visible text-sm sm:text-base">BIKAS</span>
								<span className="text-green-600 dark:text-green-400 font-bold text-sm sm:text-base">(2)</span>
							</li>
							<li className="flex justify-between items-center p-2 sm:p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
								<span className="font-semibold text-visible text-sm sm:text-base">AMAR</span>
								<span className="text-green-600 dark:text-green-400 font-bold text-sm sm:text-base">(2)</span>
							</li>
							<li className="flex justify-between items-center p-2 sm:p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
								<span className="font-semibold text-visible text-sm sm:text-base">GOLUM</span>
								<span className="text-green-600 dark:text-green-400 font-bold text-sm sm:text-base">(2)</span>
							</li>
							<li className="flex justify-between items-center p-2 sm:p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
								<span className="font-semibold text-visible text-sm sm:text-base">PRIYANSU</span>
								<span className="text-green-600 dark:text-green-400 font-bold text-sm sm:text-base">(2)</span>
							</li>
							<li className="flex justify-between items-center p-2 sm:p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
								<span className="font-semibold text-visible text-sm sm:text-base">PAWAN</span>
								<span className="text-green-600 dark:text-green-400 font-bold text-sm sm:text-base">(1)</span>
							</li>
							<li className="flex justify-between items-center p-2 sm:p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
								<span className="font-semibold text-visible text-sm sm:text-base">MPAKHA</span>
								<span className="text-green-600 dark:text-green-400 font-bold text-sm sm:text-base">(1)</span>
							</li>
							<li className="flex justify-between items-center p-2 sm:p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
								<span className="font-semibold text-visible text-sm sm:text-base">SUDHNSU</span>
								<span className="text-green-600 dark:text-green-400 font-bold text-sm sm:text-base">(1)</span>
							</li>
							<li className="flex justify-between items-center p-2 sm:p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
								<span className="font-semibold text-visible text-sm sm:text-base">PANDYA</span>
								<span className="text-green-600 dark:text-green-400 font-bold text-sm sm:text-base">(1)</span>
							</li>
							<li className="flex justify-between items-center p-2 sm:p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
								<span className="font-semibold text-visible text-sm sm:text-base">BHIM</span>
								<span className="text-green-600 dark:text-green-400 font-bold text-sm sm:text-base">(1)</span>
							</li>
							<li className="flex justify-between items-center p-2 sm:p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
								<span className="font-semibold text-visible text-sm sm:text-base">CHANDAN</span>
								<span className="text-green-600 dark:text-green-400 font-bold text-sm sm:text-base">(1)</span>
							</li>
							<li className="flex justify-between items-center p-2 sm:p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
								<span className="font-semibold text-visible text-sm sm:text-base">SUMANTH</span>
								<span className="text-green-600 dark:text-green-400 font-bold text-sm sm:text-base">(1)</span>
							</li>
						</ol>
					</div>
				</div>

				<div className="cricket-card rounded-xl p-4 sm:p-6 text-center max-w-2xl mx-auto">
					<h3 className="text-xl sm:text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">Coach / Mentor / Manager</h3>
					<p className="text-lg sm:text-xl font-semibold text-purple-600 dark:text-purple-400">🥇🏅 MANTU SINGH (1)</p>
				</div>
				
				{/* Back Button */}
				<div className="mt-6 sm:mt-8 flex justify-center px-4">
					<a 
						href="/records" 
						className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
					>
						<ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
						<span>Back to Records</span>
					</a>
				</div>
			</div>
		</div>
	)
}
