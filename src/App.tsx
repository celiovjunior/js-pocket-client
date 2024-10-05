import logo from './assets/logo-in-orbit.svg'
import letsStart from './assets/lets-start-illustration.svg'
import { Plus } from 'lucide-react'

export function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in orbit logo" />
      <img
        src={letsStart}
        alt="home page illustration of woman launching a rocket"
      />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        You dont have any goal registered yet, but you can start right now!
        Please, click in the botton below and start creating your goals.
      </p>

      <button
        type="button"
        className="px-4 py-2.5 rounded-lg bg-violet-500 text-violet-50 flex items-center gap-2 text-sm font-medium tracking-tight hover:bg-violet-600"
      >
        <Plus className="s-4" />
        Create goal
      </button>
    </div>
  )
}
