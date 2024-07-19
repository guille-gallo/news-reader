import './App.css'
import ListComponent from './components/List/list.component'
import NewsContext from './context/news.context'
import { useFetchStory } from './hooks/useFetchStory' 


function App() {

  const { fetchStoryIds, fetchStoryDetails } = useFetchStory(); 

  return (
    <NewsContext.Provider value={{fetchStoryIds, fetchStoryDetails}}>
      <ListComponent />
    </NewsContext.Provider>
  )
}

export default App;
