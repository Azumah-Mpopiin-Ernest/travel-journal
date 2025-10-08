import Header from "./Header"
import Entry from "./Entry"
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
