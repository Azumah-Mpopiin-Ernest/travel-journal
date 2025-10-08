import Header from "../components/Header"
import Entry from "../components/Entry"
import EntryData from "./EntryData"

export default function App(){
  const newArray = EntryData.map(function(place){
    return(
      <Entry 
      key = {place.id}
      {...place}
      />
    )
  })

  return(
    <main>
      <Header />
      {newArray}
    </main>
  )
}