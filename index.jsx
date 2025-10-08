import { createRoot } from "react-dom/client"
import App from "./App"
const root = createRoot(document.getElementById("root"))

function Time(){
  const hours = new Date().getHours()
  let timeOfDay
  if(hours<12){
    timeOfDay = "Morning"
  }

  else if(hours>=12 && hours<16){
    timeOfDay = "Afternoon"
  }

  else if(hours>=16 && hours<22){
    timeOfDay = "Evening"
  }

  else if(hours>=22){
    timeOfDay = "Night"
  }

  
  return(
    <h1 className="greetings">Hi! Good {timeOfDay} </h1>
  )
}



root.render(
  <>
  
  <App />
  <Time />
  </>
  
)