import { useState, useEffect } from 'react'
import { useData } from '@/contexts/DataContext'
import { PlayerProfileModal } from './PlayerProfileModal'

interface PlayerProfileProps {
	playerName: string
	className?: string
	showStats?: boolean
	onClick?: () => void
	showModal?: boolean // New prop to control modal display
}

export function PlayerProfile({ playerName, className = '', showStats = false, onClick, showModal = false }: PlayerProfileProps) {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const { getPlayerByName } = useData()
	const player = getPlayerByName(playerName)
	
	// Prevent body scroll and interactions when modal is open
	useEffect(() => {
		if (isModalOpen) {
			document.body.classList.add('modal-open')
		} else {
			document.body.classList.remove('modal-open')
		}
		
		// Cleanup on unmount
		return () => {
			document.body.classList.remove('modal-open')
		}
	}, [isModalOpen])
	
	if (!player) {
		return <span className={`text-red-500 ${className}`}>Invalid Player</span>
	}

	const handleClick = () => {
		if (onClick) {
			onClick()
		} else if (showModal) {
			// Only open modal if showModal is true
			setIsModalOpen(true)
		}
	}

	return (
		<>
			<span 
				className={`${showModal ? 'text-blue-400 hover:text-blue-300 cursor-pointer' : ''} transition-colors ${className}`}
				onClick={handleClick}
				title={showModal ? `Click to view ${player.name}'s detailed profile` : ''}
			>
				{player.name}
				{showStats && (
					<span className="text-visible-muted ml-1">
						({player.matches}M, {player.runs}R, {player.wickets}W)
					</span>
				)}
			</span>
			
			{showModal && (
				<PlayerProfileModal
					playerName={playerName}
					isOpen={isModalOpen}
					onClose={() => setIsModalOpen(false)}
				/>
			)}
		</>
	)
}
