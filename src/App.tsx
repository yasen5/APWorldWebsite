import { useState, type JSX } from 'react'
import worldIcon from './assets/world.svg'
import './App.css'

function App() {

  const [currentPage, setCurrentPage] = useState<number>(0)
  const [transitioning, setTransitioning] = useState<boolean>(false)

  const handlePageChange = () => {
    setTransitioning(true)

    // Wait for exit animation to complete, then switch content
    setTimeout(() => {
      setCurrentPage(currentPage + 1)
      setTransitioning(false)
    }, 2000) // Match this to your CSS transition duration
  }

  const pages: Record<number, JSX.Element> = {
    0: (
      <div>
        <h1>AP World Study Website</h1>
        <p>Click to Begin</p>
        <div>
          <button className='image-button' onClick={() => handlePageChange()}>
            <img src={worldIcon} className="logo"/>
          </button>
        </div>
      </div>
    ),
    1: (
      <div>
        <h1>Second Page</h1>
        <p>Explanation TODO</p>
      </div>
    )
  }

  return (
    <div className='slide-container'>
      <div className={transitioning ? 'slide-out' : '' }>
        {pages[currentPage]}
      </div>
      {transitioning && (<div className={transitioning ? 'slide-in' : ''}>
        {transitioning && pages[currentPage + 1]}
      </div>)}
    </div>
  )
}

export default App
