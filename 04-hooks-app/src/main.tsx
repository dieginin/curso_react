import "./index.css"

// import { HooksApp } from "./HooksApp.tsx"
// import { TrafficLight } from "./01-useState/TrafficLight.tsx"
// import { TrafficLightWithEffect } from "./02-useEffect/TrafficLightWithEffect.tsx"
// import { TrafficLightWithEffectWithHook } from "./02-useEffect/TrafficLightWithEffectWithHook.tsx"
// import { PokemonPage } from "./03-examples/PokemonPage.tsx"
// import FocusScreen from "./04-useRef/FocusScreen.tsx"
// import { TasksApp } from "./05-useReducer/TaskApp.tsx"
// import { ScrambleWords } from "./05-useReducer/ScrambleWords.tsx"
// import MemoHook from "./06-memos/MemoHook.tsx"
// import { MemoCounter } from "./06-memos/MemoCounter.tsx"
// import { InstagromApp } from "./07-useOptimistic/InstagromApp.tsx"
import { StrictMode, Suspense } from "react"

import { ClientInformation } from "./08-use-suspense/ClientInformation.tsx"
import { Toaster } from "sonner"
import { createRoot } from "react-dom/client"
import { getUserAction } from "./08-use-suspense/api/get-user.action.ts"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster />
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithEffectWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords /> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter /> */}
    {/* <InstagromApp /> */}
    <Suspense
      fallback={
        <div className='bg-gradient flex flex-col gap-4'>
          <h1 className='text-5xl font-thin text-white'>Cargando...</h1>
        </div>
      }
    >
      <ClientInformation getUser={getUserAction(1000)} />
    </Suspense>
  </StrictMode>
)
