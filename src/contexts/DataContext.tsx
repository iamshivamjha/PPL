import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

export interface Player {
	name: string
	matches: number
	runs: number
	wickets: number
	battingAverage: number
	bowlingAverage: number
	winPercentage: number
	matchesAsCaptain: number
}

export interface HallOfFameMember {
	name: string
	achievements: string[]
	stats: {
		matches: number
		runs: number
		wickets: number
		battingAverage: number
		bowlingAverage?: number
		winPercentage: number
		matchesAsCaptain: number
	}
}

export interface CaptainRecord {
	captain: string
	m: number
	w: number
	l: number
	winPercent: number
}

export interface TrophyWinner {
	trophy: string
	captain: string
}

interface DataContextType {
	// Players
	players: Player[]
	
	// Hall of Fame
	hallOfFameMembers: HallOfFameMember[]
	
	// Records
	captainRecords: CaptainRecord[]
	trophyWinners: TrophyWinner[]
	
	// Utility functions
	getPlayerByName: (name: string) => Player | undefined
	searchPlayers: (query: string) => Player[]
}

const DataContext = createContext<DataContextType | undefined>(undefined)

// Default data
const defaultPlayers: Player[] = [
	{ name: "Bholu", matches: 106, runs: 2787, wickets: 3, battingAverage: 26.3, bowlingAverage: 0, winPercentage: 78.1, matchesAsCaptain: 85 },
	{ name: "Mantu", matches: 100, runs: 1235, wickets: 0, battingAverage: 12.4, bowlingAverage: 0, winPercentage: 75.0, matchesAsCaptain: 60 },
	{ name: "Pintu", matches: 99, runs: 377, wickets: 46, battingAverage: 3.8, bowlingAverage: 21.5, winPercentage: 0, matchesAsCaptain: 0 },
	{ name: "Golu", matches: 98, runs: 1605, wickets: 59, battingAverage: 16.4, bowlingAverage: 16.6, winPercentage: 57.7, matchesAsCaptain: 24 },
	{ name: "Senli", matches: 93, runs: 342, wickets: 97, battingAverage: 3.7, bowlingAverage: 9.6, winPercentage: 60, matchesAsCaptain: 5 },
	{ name: "Ajit", matches: 90, runs: 900, wickets: 103, battingAverage: 10.0, bowlingAverage: 8.7, winPercentage: 0, matchesAsCaptain: 0 },
	{ name: "Chuhi", matches: 90, runs: 360, wickets: 72, battingAverage: 4.0, bowlingAverage: 12.5, winPercentage: 80, matchesAsCaptain: 5 },
	{ name: "Goluc", matches: 89, runs: 855, wickets: 63, battingAverage: 9.6, bowlingAverage: 14.1, winPercentage: 0, matchesAsCaptain: 0 },
	{ name: "Himanshu", matches: 89, runs: 533, wickets: 18, battingAverage: 6.0, bowlingAverage: 49.4, winPercentage: 63.3, matchesAsCaptain: 30 },
	{ name: "Binit", matches: 88, runs: 107, wickets: 117, battingAverage: 1.2, bowlingAverage: 7.5, winPercentage: 0, matchesAsCaptain: 0 },
	{ name: "Siva", matches: 88, runs: 477, wickets: 10, battingAverage: 5.4, bowlingAverage: 88.0, winPercentage: 80, matchesAsCaptain: 5 },
	{ name: "Chhotu", matches: 86, runs: 587, wickets: 11, battingAverage: 6.8, bowlingAverage: 78.2, winPercentage: 100, matchesAsCaptain: 2 },
	{ name: "Bhuar", matches: 74, runs: 20, wickets: 70, battingAverage: 0.3, bowlingAverage: 10.6, winPercentage: 0, matchesAsCaptain: 0 },
	{ name: "Joni", matches: 72, runs: 158, wickets: 87, battingAverage: 2.2, bowlingAverage: 8.3, winPercentage: 72.7, matchesAsCaptain: 33 },
	{ name: "RihitL", matches: 66, runs: 60, wickets: 90, battingAverage: 0.9, bowlingAverage: 7.3, winPercentage: 0, matchesAsCaptain: 0 },
	{ name: "Akasc", matches: 57, runs: 175, wickets: 81, battingAverage: 3.1, bowlingAverage: 7.0, winPercentage: 0, matchesAsCaptain: 0 },
	{ name: "Bhodu", matches: 55, runs: 694, wickets: 14, battingAverage: 12.6, bowlingAverage: 39.3, winPercentage: 78.6, matchesAsCaptain: 14 },
	{ name: "Rohitk", matches: 53, runs: 353, wickets: 50, battingAverage: 7.1, bowlingAverage: 10.6, winPercentage: 0, matchesAsCaptain: 0 },
	{ name: "Priyanshu", matches: 41, runs: 195, wickets: 5, battingAverage: 4.8, bowlingAverage: 82.0, winPercentage: 0, matchesAsCaptain: 1 },
	{ name: "Sudhir", matches: 38, runs: 185, wickets: 31, battingAverage: 6.0, bowlingAverage: 12.3, winPercentage: 53.8, matchesAsCaptain: 13 },
	{ name: "Satendra", matches: 38, runs: 50, wickets: 52, battingAverage: 1.3, bowlingAverage: 7.3, winPercentage: 0, matchesAsCaptain: 0 },
	{ name: "Shankar", matches: 38, runs: 30, wickets: 50, battingAverage: 0.8, bowlingAverage: 7.6, winPercentage: 0, matchesAsCaptain: 0 },
	{ name: "BikashC", matches: 37, runs: 48, wickets: 40, battingAverage: 1.3, bowlingAverage: 9.3, winPercentage: 0, matchesAsCaptain: 0 },
	{ name: "Sivam", matches: 37, runs: 152, wickets: 50, battingAverage: 4.1, bowlingAverage: 7.4, winPercentage: 0, matchesAsCaptain: 0 },
	{ name: "Raju", matches: 34, runs: 351, wickets: 39, battingAverage: 10.3, bowlingAverage: 8.7, winPercentage: 0, matchesAsCaptain: 0 },
	{ name: "Bhola", matches: 34, runs: 151, wickets: 1, battingAverage: 4.4, bowlingAverage: 340.0, winPercentage: 0, matchesAsCaptain: 0 },
	{ name: "Tarun", matches: 31, runs: 133, wickets: 17, battingAverage: 4.3, bowlingAverage: 18.2, winPercentage: 0, matchesAsCaptain: 0 },
	{ name: "Citu", matches: 29, runs: 158, wickets: 17, battingAverage: 5.4, bowlingAverage: 17.1, winPercentage: 0, matchesAsCaptain: 0 },
	{ name: "Pritam", matches: 28, runs: 213, wickets: 34, battingAverage: 7.6, bowlingAverage: 8.2, winPercentage: 0, matchesAsCaptain: 0 },
	{ name: "Kunal", matches: 28, runs: 34, wickets: 27, battingAverage: 1.2, bowlingAverage: 10.4, winPercentage: 0, matchesAsCaptain: 0 },
	{ name: "RahulE", matches: 26, runs: 300, wickets: 2, battingAverage: 11.5, bowlingAverage: 130.0, winPercentage: 0, matchesAsCaptain: 0 },
	{ name: "SonuR", matches: 25, runs: 220, wickets: 22, battingAverage: 8.8, bowlingAverage: 11.4, winPercentage: 0, matchesAsCaptain: 0 },
	{ name: "Bikas", matches: 23, runs: 519, wickets: 11, battingAverage: 22.6, bowlingAverage: 20.9, winPercentage: 0, matchesAsCaptain: 0 },
	{ name: "Sandip", matches: 21, runs: 190, wickets: 23, battingAverage: 9.0, bowlingAverage: 9.1, winPercentage: 68, matchesAsCaptain: 15 },
	{ name: "Sunmun", matches: 20, runs: 200, wickets: 8, battingAverage: 10.0, bowlingAverage: 25.0, winPercentage: 0, matchesAsCaptain: 0 },
	{ name: "Amar", matches: 19, runs: 350, wickets: 0, battingAverage: 18.4, bowlingAverage: 0, winPercentage: 0, matchesAsCaptain: 0 },
	{ name: "Bablu Singh", matches: 100, runs: 900, wickets: 1550, battingAverage: 9.0, bowlingAverage: 0.6, winPercentage: 60.0, matchesAsCaptain: 50 }
]

const defaultHallOfFameMembers: HallOfFameMember[] = [
	{
		name: "Mantu",
		achievements: [
			"Led PCA to multiple trophy victories",
			"Outstanding leadership and captaincy",
			"Consistent performer across all formats",
			"75.0% win rate as captain",
			"1235 runs in 100 PPL matches"
		],
		stats: {
			matches: 100,
			runs: 1235,
			wickets: 0,
			battingAverage: 12.4,
			bowlingAverage: 0,
			winPercentage: 75.0,
			matchesAsCaptain: 60
		}
	},
	{
		name: "Bablu Singh",
		achievements: [
			"Legendary PCA captain with 60% win rate",
			"Outstanding bowling performance with 1550 wickets",
			"Consistent all-round contributions",
			"Led PCA to multiple victories as captain"
		],
		stats: {
			matches: 100,
			runs: 900,
			wickets: 1550,
			battingAverage: 9.0,
			bowlingAverage: 0.6,
			winPercentage: 60.0,
			matchesAsCaptain: 50
		}
	}
]

const defaultCaptainRecords: CaptainRecord[] = [
	{ captain: 'Bholu', m: 155, w: 121, l: 41, winPercent: 78.1 },
	{ captain: 'Sandip', m: 75, w: 51, l: 24, winPercent: 68 },
	{ captain: 'Joni', m: 33, w: 24, l: 9, winPercent: 72.7 },
	{ captain: 'Himnsu', m: 30, w: 19, l: 11, winPercent: 63.3 },
	{ captain: 'Golu', m: 24, w: 15, l: 9, winPercent: 57.7 },
	{ captain: 'Bhadhu', m: 14, w: 11, l: 3, winPercent: 78.6 },
	{ captain: 'Sudhir', m: 13, w: 7, l: 6, winPercent: 53.8 },
	{ captain: 'Siva', m: 5, w: 4, l: 1, winPercent: 80 },
	{ captain: 'Chuhi', m: 5, w: 4, l: 1, winPercent: 80 },
	{ captain: 'Senli', m: 5, w: 3, l: 2, winPercent: 60 },
	{ captain: 'Chhotu', m: 2, w: 2, l: 0, winPercent: 100 },
	{ captain: 'Priynsu', m: 1, w: 0, l: 1, winPercent: 0 },
	{ captain: 'Total', m: 362, w: 260, l: 102, winPercent: 71.8 }
]

const defaultTrophyWinners: TrophyWinner[] = [
	{ trophy: 'Barahara (2)', captain: 'Mantu' },
	{ trophy: 'Pararia (2)', captain: 'Mantu' },
	{ trophy: 'Chatar Kuiya (3)', captain: 'Mantu' },
	{ trophy: 'Matupur Turki', captain: 'Mantu' },
	{ trophy: 'Unknown Trophy', captain: 'Bholu' }
]

export function DataProvider({ children }: { children: ReactNode }) {
	const [players] = useState<Player[]>(defaultPlayers)
	const [hallOfFameMembers] = useState<HallOfFameMember[]>(defaultHallOfFameMembers)
	const [captainRecords] = useState<CaptainRecord[]>(defaultCaptainRecords)
	const [trophyWinners] = useState<TrophyWinner[]>(defaultTrophyWinners)

	// Utility functions
	const getPlayerByName = (name: string): Player | undefined => {
		return players.find(player => 
			player.name.toLowerCase() === name.toLowerCase()
		)
	}

	const searchPlayers = (query: string): Player[] => {
		if (!query.trim()) return []
		return players.filter(player =>
			player.name.toLowerCase().includes(query.toLowerCase()) && player.name !== 'Bablu Singh'
		)
	}

	const value: DataContextType = {
		players,
		hallOfFameMembers,
		captainRecords,
		trophyWinners,
		getPlayerByName,
		searchPlayers
	}

	return (
		<DataContext.Provider value={value}>
			{children}
		</DataContext.Provider>
	)
}

export function useData() {
	const context = useContext(DataContext)
	if (context === undefined) {
		throw new Error('useData must be used within a DataProvider')
	}
	return context
}