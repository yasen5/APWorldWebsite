import { useState, type JSX } from 'react'
import worldIcon from './assets/world.svg'
import './App.css'

// State machine for keeping track of the current page
const enum Page {
  START_SCREEN, EXPLANATION
}

const PageTransition = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.START_SCREEN)
  const [nextPage, setNextPage] = useState<Page>(Page.EXPLANATION)
  const [transitioning, setTransitioning] = useState<boolean>(false)

  // Begin animation with setTransitioning, officially switch to the next page after delay
  const handlePageChange = (nextPage : Page) => {
    setTransitioning(true)
    setNextPage(nextPage);

    setTimeout(() => {
      setCurrentPage(nextPage)
      setTransitioning(false)
    }, 2000)
  }

  const renderPage = (page: Page) => {
    switch (page) {
      case Page.START_SCREEN:
        return (
          <StartScreen
            goToPage={handlePageChange}
          />
        )
      case Page.EXPLANATION:
        return <ExplanationPage />
      default:
        console.log("Invalid page location");
        return <div>Error: Invalid page location</div>
    }
  }

  return (
    <div className='slide-container'>
      <div className={transitioning ? 'slide-out' : ''}>
        {renderPage(currentPage)}
      </div>
      {transitioning && (
        <div className='slide-in'>
          {renderPage(nextPage)}
        </div>
      )}
    </div>
  )
}

interface StartScreenProps {
  goToPage: (page: Page) => void
}

const StartScreen = ({goToPage}: StartScreenProps) => {
  return (
    <div> 
        <h1>AP World Study Website</h1>
        <p>Click to Begin</p>
        <div>
          <button className='image-button' onClick={() => goToPage(Page.EXPLANATION)}>
            <img src={worldIcon} className="logo"/>
          </button>
        </div>
      </div>
  )
}

const ExplanationPage = () => {
  return (
    <div>
      <h1>Second Page</h1>
      <p>Explanation TODO</p>
    </div>
  )
}

function App() {
  return (
    <PageTransition/>
  )
}

export default App
