import './index.css'
import { Navbar } from '@/components/navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DataProvider } from '@/contexts/DataContext'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import HeadToHead from '@/pages/HeadToHead'
import HallOfFame from '@/pages/HallOfFame'
import RecordsIndex from '@/pages/records/Index'
import PCARecords from '@/pages/records/PCARecords'
import PPLRecords from '@/pages/records/PPLRecords'
import Grades from '@/pages/records/Grades'
import { Players, Captains, PurpleCap, OrangeCap, BestCaptain, MostMVP } from '@/pages/records/pages'

function App() {
	return (
		<DataProvider>
			<BrowserRouter>
				<div className="min-h-screen cricket-bg text-white">
					<Navbar />
					<div className="container py-4 sm:py-6 lg:py-8 pt-20 sm:pt-24">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/contact" element={<Contact />} />
							<Route path="/head-to-head" element={<HeadToHead />} />
							<Route path="/hall-of-fame" element={<HallOfFame />} />
							<Route path="/records" element={<RecordsIndex />} />
							<Route path="/records/pca-records" element={<PCARecords />} />
							<Route path="/records/ppl-records" element={<PPLRecords />} />
							<Route path="/records/grades" element={<Grades />} />
							<Route path="/records/players" element={<Players />} />
							<Route path="/records/captains" element={<Captains />} />
							<Route path="/records/purple-cap" element={<PurpleCap />} />
							<Route path="/records/orange-cap" element={<OrangeCap />} />
							<Route path="/records/best-captain" element={<BestCaptain />} />
							<Route path="/records/most-mvp" element={<MostMVP />} />
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		</DataProvider>
	)
}

export default App