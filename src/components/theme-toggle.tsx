import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'

export function ThemeToggle() {
	const [isDark, setIsDark] = useState<boolean>(false)

	useEffect(() => {
		const root = document.documentElement
		const stored = localStorage.getItem(STORAGE_KEY)
		if (stored === 'dark') {
			root.classList.add('dark')
			setIsDark(true)
		} else if (stored === 'light') {
			root.classList.remove('dark')
			setIsDark(false)
		} else {
			// default follow existing class if present
			setIsDark(root.classList.contains('dark'))
		}
	}, [])

	function toggle() {
		const root = document.documentElement
		if (root.classList.contains('dark')) {
			root.classList.remove('dark')
			localStorage.setItem(STORAGE_KEY, 'light')
			setIsDark(false)
		} else {
			root.classList.add('dark')
			localStorage.setItem(STORAGE_KEY, 'dark')
			setIsDark(true)
		}
	}

	return (
		<Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={toggle}>
			{isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
		</Button>
	)
}
