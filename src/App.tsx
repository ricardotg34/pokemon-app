import { useContext } from 'react'
import { AppContext } from './contexts/app-context/app-context'
import withAppContext from './contexts/app-context/withAppContext'
import './App.css'
import FightPage from './pages/FightPage'
import LandingPage from './pages/LandingPage'
import SelectTeamPage from './pages/SelectTeamPage'
import { CurrentPage } from './domain/interfaces/app-state.interface'

function App() {
  const { state } = useContext(AppContext);

  switch (state.currentPage) {
    case CurrentPage.SELECT_TEAM:
      return <SelectTeamPage />
    case CurrentPage.BATTLE:
      return <FightPage />
    default:
      return <LandingPage />
  }
}

export default withAppContext(App)
