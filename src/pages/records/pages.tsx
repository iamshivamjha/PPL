import StubTable from './StubTable'
import PPLRecords from './PPLRecords'
import PlayersStats from './PlayersStats'

const sampleCols = [
	{ key: 'rank', header: 'Rank' },
	{ key: 'name', header: 'Name' },
	{ key: 'value', header: 'Value' },
]
const sampleRows = [
	{ rank: 1, name: 'Player A', value: '—' },
	{ rank: 2, name: 'Player B', value: '—' },
]

export function Players() {
	return <PlayersStats />
}
export function Captains() {
	return <StubTable title="List of Captains" columns={sampleCols} rows={sampleRows} />
}
export function PurpleCap() {
	return <StubTable title="Purple Cap Winners" columns={sampleCols} rows={sampleRows} />
}
export function OrangeCap() {
	return <StubTable title="Orange Cap Winners" columns={sampleCols} rows={sampleRows} />
}


const captainCols = [
	{ key: 'name', header: 'Captain' },
	{ key: 'm', header: 'M' },
	{ key: 'w', header: 'W' },
	{ key: 'l', header: 'L' },
	{ key: 'winp', header: 'WIN %' },
]
const captainRows = [
	{ name: 'Bholu', m: 155, w: 121, l: 41, winp: 78.1 },
	{ name: 'Sandip', m: 75, w: 51, l: 24, winp: 68 },
	{ name: 'Joni', m: 33, w: 24, l: 9, winp: 72.7 },
	{ name: 'Himnsu', m: 30, w: 19, l: 11, winp: 63.3 },
	{ name: 'Golu', m: 24, w: 15, l: 9, winp: 57.7 },
	{ name: 'Bhadhu', m: 14, w: 11, l: 3, winp: 78.6 },
	{ name: 'Sudhir', m: 13, w: 7, l: 6, winp: 53.8 },
	{ name: 'Siva', m: 5, w: 4, l: 1, winp: 80 },
	{ name: 'Chuhi', m: 5, w: 4, l: 1, winp: 80 },
	{ name: 'Senli', m: 5, w: 3, l: 2, winp: 60 },
	{ name: 'Chhotu', m: 2, w: 2, l: 0, winp: 100 },
	{ name: 'Priynsu', m: 1, w: 0, l: 1, winp: 0 },
	{ name: 'Total', m: 362, w: 260, l: 102, winp: 71.8 },
]

export function BestCaptain() {
	return <StubTable title="Best Win % as Captain" columns={captainCols} rows={captainRows} />
}
export function MostMVP() {
	return <PPLRecords />
}

