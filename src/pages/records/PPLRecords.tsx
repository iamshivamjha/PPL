import { ArrowLeft } from 'lucide-react'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
	return (
		<div className="space-y-4 cricket-card rounded-2xl p-6">
			<h3 className="text-2xl font-bold text-gray-800 dark:text-white">{title}</h3>
			{children}
		</div>
	)
}

export default function PPLRecords() {
	return (
		<div className="page-container">
			<div className="records-container">

				
				<div className="content-center space-y-3">
					<h2 className="text-4xl font-bold main-title">🏏🏏🏆 PPL RECORDS 🏆🏏🏏</h2>
					<p className="subtitle">Consolidated achievements and honors</p>
				</div>

				<Section title="✌ CAPTAIN & MOM FINAL ✌">
					<div className="cricket-card rounded-xl overflow-hidden max-w-4xl mx-auto">
						<div className="overflow-x-auto">
							<table className="w-full">
								<thead className="bg-blue-600 dark:bg-blue-700 text-white">
									<tr>
										<th className="py-4 px-6 text-left font-semibold">Captain</th>
										<th className="py-4 px-6 text-left font-semibold">MOTM</th>
									</tr>
								</thead>
								<tbody>
									<tr className="border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800">
										<td className="py-3 px-6 text-visible font-medium">Bhodu</td>
										<td className="py-3 px-6 text-visible font-medium">Sankar</td>
									</tr>
									<tr className="border-b border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
										<td className="py-3 px-6 text-visible font-medium">Bholu</td>
										<td className="py-3 px-6 text-visible font-medium">Bholu</td>
									</tr>
									<tr className="border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800">
										<td className="py-3 px-6 text-visible font-medium">Ajit</td>
										<td className="py-3 px-6 text-visible font-medium">GoluB</td>
									</tr>
									<tr className="border-b border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
										<td className="py-3 px-6 text-visible font-medium">Raju</td>
										<td className="py-3 px-6 text-visible font-medium">Raju</td>
									</tr>
									<tr className="border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800">
										<td className="py-3 px-6 text-visible font-medium">Bhodu</td>
										<td className="py-3 px-6 text-visible font-medium">Bhodu</td>
									</tr>
									<tr className="border-b border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
										<td className="py-3 px-6 text-visible font-medium">Bholu</td>
										<td className="py-3 px-6 text-visible font-medium">Raju</td>
									</tr>
									<tr className="border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800">
										<td className="py-3 px-6 text-visible font-medium">Gablu</td>
										<td className="py-3 px-6 text-visible font-medium">Raju</td>
									</tr>
									<tr className="border-b border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
										<td className="py-3 px-6 text-visible font-medium">Siva</td>
										<td className="py-3 px-6 text-visible font-medium">Siva</td>
									</tr>
									<tr className="border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800">
										<td className="py-3 px-6 text-visible font-medium">Bholu</td>
										<td className="py-3 px-6 text-visible font-medium">Bholu</td>
									</tr>
									<tr className="border-b border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
										<td className="py-3 px-6 text-visible font-medium">Mantu</td>
										<td className="py-3 px-6 text-visible font-medium">Ajitc</td>
									</tr>
									<tr className="border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800">
										<td className="py-3 px-6 text-visible font-medium">Raju</td>
										<td className="py-3 px-6 text-visible font-medium">Raju</td>
									</tr>
									<tr className="border-b border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
										<td className="py-3 px-6 text-visible font-medium">Bholu</td>
										<td className="py-3 px-6 text-visible font-medium">Satendr</td>
									</tr>
									<tr className="border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800">
										<td className="py-3 px-6 text-visible font-medium">Bhodu</td>
										<td className="py-3 px-6 text-visible font-medium">kundan</td>
									</tr>
									<tr className="border-b border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
										<td className="py-3 px-6 text-visible font-medium">Bholu</td>
										<td className="py-3 px-6 text-visible font-medium">Rabada</td>
									</tr>
									<tr className="border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800">
										<td className="py-3 px-6 text-visible font-medium">Bhodu</td>
										<td className="py-3 px-6 text-visible font-medium">Himnsu</td>
									</tr>
									<tr className="border-b border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
										<td className="py-3 px-6 text-visible font-medium">Chuhi</td>
										<td className="py-3 px-6 text-visible font-medium">Bikasc</td>
									</tr>
									<tr className="border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800">
										<td className="py-3 px-6 text-visible font-medium">Bholu</td>
										<td className="py-3 px-6 text-visible font-medium">Bholu</td>
									</tr>
									<tr className="border-b border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
										<td className="py-3 px-6 text-visible font-medium">Siva</td>
										<td className="py-3 px-6 text-visible font-medium">Dipak</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</Section>

				<Section title="🏏🍊🥇 ORANGE CAP 🥇🍊🏏">
					<p className="text-visible-muted">Winners: Bikash, Bikash, Bholu, Bholu, GoluB, Bikash, Mantu, Bholu, Bholu, Amar, Bhodu, Goluc, Bholu, GoluB, Bholu, Bholu, Bholu, Bholu.</p>
				</Section>

				<Section title="🏏🧢🥇 PURPLE CAP 🥇🧢🏏">
					<p className="text-visible-muted">Winners: Shankar, Pintu, Pintu, Sivam, Shankar, Rohitk, Niraj, Bisu, Akash, Ajitc, Sivam, Satendr, Kundan, Guddu, Rabada, Lalu, Binit, Akas.</p>
				</Section>

				<Section title="👑🥇 MOST VALUABLE PLAYER 🥇👑">
					<p className="text-visible-muted">Winners: Ajit, Bikash, GoluB, Bholu, GoluB, Bikash, Niraj, Bholu, Bholu, Amar, Senli, Goluc, Bholu, Rabada, Ajit, Chuhi, Bholu, Bholu.</p>
				</Section>

				<Section title="PPL TROPHY WINNER & RUNNER UP">
					<div className="grid sm:grid-cols-2 gap-4">
						<ul className="list-disc pl-6">
							<li className="text-visible">Bholu - 6 & 8</li>
							<li className="text-visible">Bhodu - 5 & 1</li>
							<li className="text-visible">Raju - 5 & 1</li>
							<li className="text-visible">Golub - 4 & 3</li>
						</ul>
						<ul className="list-disc pl-6">
							<li className="text-visible">Mantu - 3 & 6</li>
							<li className="text-visible">Ajit - 2 & 4</li>
							<li className="text-visible">Goluc - 1 & 2</li>
							<li className="text-visible">Senli - 1 & 1</li>
						</ul>
					</div>
				</Section>

				<Section title="🏆 PPL INDIVIDUAL RECORDS 🏆">
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
						<div className="space-y-3">
							<div className="flex justify-between items-center p-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg">
								<span className="font-semibold text-gray-800">MOST RUNS</span>
								<span className="font-bold text-gray-800">BHOLU</span>
							</div>
							<div className="flex justify-between items-center p-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg">
								<span className="font-semibold text-gray-800">BEST AVERAGE</span>
								<span className="font-bold text-gray-800">BHOLU</span>
							</div>
							<div className="flex justify-between items-center p-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg">
								<span className="font-semibold text-gray-800">BEST STRIKE RATE</span>
								<span className="font-bold text-gray-800">BHOLU</span>
							</div>
							<div className="flex justify-between items-center p-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg">
								<span className="font-semibold text-gray-800">MOST HUNDRED</span>
								<span className="font-bold text-gray-800">BHOLU</span>
							</div>
							<div className="flex justify-between items-center p-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg">
								<span className="font-semibold text-gray-800">MOST FIFTY</span>
								<span className="font-bold text-gray-800">BHOLU</span>
							</div>
							<div className="flex justify-between items-center p-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg">
								<span className="font-semibold text-gray-800">MOST SIXES</span>
								<span className="font-bold text-gray-800">BHOLU</span>
							</div>
							<div className="flex justify-between items-center p-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg">
								<span className="font-semibold text-gray-800">MOST FOURS</span>
								<span className="font-bold text-gray-800">BHOLU</span>
							</div>
							<div className="flex justify-between items-center p-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg">
								<span className="font-semibold text-gray-800">HIGHEST SCORE</span>
								<span className="font-bold text-gray-800">BHOLU</span>
							</div>
						</div>
						<div className="space-y-3">
							<div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg">
								<span className="font-semibold text-white">MOST MOM</span>
								<span className="font-bold text-white">BHOLU</span>
							</div>
							<div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg">
								<span className="font-semibold text-white">MOST MOS</span>
								<span className="font-bold text-white">BHOLU</span>
							</div>
							<div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg">
								<span className="font-semibold text-white">MOST ORANGE CAP</span>
								<span className="font-bold text-white">BHOLU</span>
							</div>
							<div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg">
								<span className="font-semibold text-white">MOST FINAL WIN</span>
								<span className="font-bold text-white">BHOLU</span>
							</div>
							<div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg">
								<span className="font-semibold text-white">MOST FINAL PLAYED</span>
								<span className="font-bold text-white">BHOLU</span>
							</div>
							<div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg">
								<span className="font-semibold text-white">MOST CATCH</span>
								<span className="font-bold text-white">BHOLU</span>
							</div>
							<div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg">
								<span className="font-semibold text-white">MOST STUMP</span>
								<span className="font-bold text-white">BHOLU</span>
							</div>
							<div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg">
								<span className="font-semibold text-white">MOST MATCH WIN</span>
								<span className="font-bold text-white">BHOLU</span>
							</div>
							<div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg">
								<span className="font-semibold text-white">MOST MATCH</span>
								<span className="font-bold text-white">BHOLU</span>
							</div>
						</div>
						<div className="space-y-3">
							<div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg">
								<span className="font-semibold text-white">MOST WICKET</span>
								<span className="font-bold text-white">BINIT</span>
							</div>
							<div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg">
								<span className="font-semibold text-white">BEST ECONOMY</span>
								<span className="font-bold text-white">SENLI</span>
							</div>
							<div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg">
								<span className="font-semibold text-white">BEST ALL-ROUNDER</span>
								<span className="font-bold text-white">GOLUB</span>
							</div>
							<div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg">
								<span className="font-semibold text-white">BEST BOWLING FIG.</span>
								<span className="font-bold text-white">GUDDU</span>
							</div>
							<div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg">
								<span className="font-semibold text-white">BEST BOWLING AVG</span>
								<span className="font-bold text-white">ROHIT(L)</span>
							</div>
							<div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg">
								<span className="font-semibold text-white">BEST BOW STRIKE RATE</span>
								<span className="font-bold text-white">AKASH</span>
							</div>
						</div>
					</div>
				</Section>
				
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
