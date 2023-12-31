import BuggyComponent from "./BuggyComponent"

function App() {
  
  return (
    <div className="bg-sky-50 h-full">
      <h1 className="text-5xl text-center text-sky-500/60">Title Goes Here</h1>
      <BuggyComponent className="text-center flex flex-col justify-center items-center mt-4"/>
    </div>
  )
}

export default App
