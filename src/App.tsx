import { useState, type JSX } from 'react'
import worldIcon from './assets/world.svg'
import './App.css'

function App() {
  // State machine for keeping track of the current page
  const enum Page {
    START_SCREEN, EXPLANATION
  }

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

  // List of page layouts linked to enum values for better readability
  const pages: Record<Page, JSX.Element> = {
    [Page.START_SCREEN]: (
      <div> 
        <h1>AP World Study Website</h1>
        <p>Click to Begin</p>
        <div>
          <button className='image-button' onClick={() => handlePageChange(Page.EXPLANATION)}>
            <img src={worldIcon} className="logo"/>
          </button>
        </div>
      </div>
    ),
    [Page.EXPLANATION]: (
      <div>
        <h1>Second Page</h1>
        <p>Explanation TODO</p>
      </div>
    )
  }

  return (
    <div className='slide-container'>
      {/* Display the current page, add slide-out animation if transitioning */}
      <div className={transitioning ? 'slide-out' : '' }>
        {pages[currentPage]}
      </div>
      {/* If transitioning, display the next page sliding in */}
      {transitioning && (<div className={transitioning ? 'slide-in' : ''}>
        {transitioning && pages[nextPage]}
      </div>)}
    </div>
  )
}

export default App
