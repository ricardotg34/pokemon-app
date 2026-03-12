import { useContext } from 'react'
import { AppContext } from './app-context/app-context'
import withAppContext from './app-context/withAppContext'
import './App.css'
import FightPage from './pages/FightPage'
import Landing from './pages/LandingPage'
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
      return <Landing />
  }
}

export default withAppContext(App)
