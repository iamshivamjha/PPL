import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'

const links = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/records', label: 'Records' },
	{ href: '/head-to-head', label: 'Head-to-Head' },
	{ href: '/hall-of-fame', label: 'Hall of Fame' },
	{ href: '/contact', label: 'Contact' },
]

export function Navbar() {
	const [open, setOpen] = useState(false)
	return (
		<nav className="glass-effect fixed top-0 left-0 right-0 z-50 border-b border-white/20 dark:border-gray-700/30">
			<div className="container mx-auto px-2 sm:px-4 lg:px-6">
				<div className="flex h-14 sm:h-16 items-center justify-between">
					<a href="/" className="text-lg sm:text-xl lg:text-2xl font-bold main-title">🏏 PCA</a>
					<div className="hidden md:flex gap-8 items-center">
						{links.map((l) => (
							<a 
								key={l.href} 
								href={l.href} 
								className="text-gray-800 dark:text-white/90 hover:text-blue-600 dark:hover:text-white font-medium transition-colors duration-200 relative group"
							>
								{l.label}
								<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-white transition-all duration-200 group-hover:w-full"></span>
							</a>
						))}
						<ThemeToggle />
					</div>
					<button 
						className="md:hidden text-gray-800 dark:text-white/90 hover:text-blue-600 dark:hover:text-white transition-colors p-1" 
						onClick={() => setOpen(!open)} 
						aria-label="Toggle menu"
					>
						{open ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
					</button>
				</div>
			</div>
			<div className={cn('md:hidden glass-effect border-t border-white/20 dark:border-gray-700/30', open ? 'block' : 'hidden')}>
				<div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4 flex flex-col gap-2 sm:gap-3">
					{links.map((l) => (
						<a 
							key={l.href} 
							href={l.href} 
							className="text-gray-800 dark:text-white/90 hover:text-blue-600 dark:hover:text-white font-medium py-2 transition-colors duration-200"
							onClick={() => setOpen(false)}
						>
							{l.label}
						</a>
					))}
					<div className="pt-2">
						<ThemeToggle />
					</div>
				</div>
			</div>
		</nav>
	)
}
