import { useEffect, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Movies from './components/Movies'
import Navbar from './components/Navbar'
import WatchList from './components/WatchList'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  let [watchList,setWatchList] = useState([])
  let handleAddToWatchList=(movObj)=>{
      let newWatchList = [...watchList,movObj]
      localStorage.setItem('moviesApp',JSON.stringify(newWatchList))
      setWatchList(newWatchList)
      console.log(newWatchList)
  }
  let handleRemoveFromWatchList=(movieObj)=>{
      let filteredWatchList = watchList.filter((movie)=>{
       return movie.id != movieObj.id
      })
      setWatchList(filteredWatchList)
     localStorage.setItem('moviesApp',JSON.stringify(filteredWatchList))
     console.log(filteredWatchList)
  }
  useEffect(()=>{
    let moviesFromLocalStorage = localStorage.getItem('moviesApp')
    if(!moviesFromLocalStorage){
      return
    }
    setWatchList(JSON.parse(moviesFromLocalStorage))
  },[])
  return(
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<><Banner/> <Movies watchList={watchList} handleAddToWatchList={handleAddToWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList}/></>}/>
      <Route path='/watchlist' element={<WatchList watchList={watchList} setWatchList={setWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList}/>}/>
    </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
