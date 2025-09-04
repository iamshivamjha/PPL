import { ArrowLeft } from 'lucide-react'

type Column = { key: string; header: string }

type Props = {
	title: string
	columns: Column[]
	rows: Array<Record<string, string | number>>
}

export default function StubTable({ title, columns, rows }: Props) {
	return (
		<div className="page-container">
			<div className="records-container">

				
				<div className="content-center">
					<h3 className="text-3xl font-bold main-title">{title}</h3>
				</div>
				<div className="cricket-card rounded-xl overflow-hidden max-w-6xl mx-auto w-full">
					<div className="overflow-x-auto">
						<table className="w-full">
							<thead className="bg-blue-600 dark:bg-blue-700 text-white">
								<tr>
									{columns.map((c) => (
										<th key={c.key} className="py-4 px-6 text-left font-semibold">{c.header}</th>
									))}
								</tr>
							</thead>
							<tbody>
								{rows.map((r, i) => (
									<tr key={i} className={`border-b border-gray-200 dark:border-gray-600 ${i % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700'}`}>
										{columns.map((c) => (
											<td key={c.key} className="py-3 px-6 text-visible font-medium">
												{String(r[c.key] ?? '')}
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
