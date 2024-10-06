import logo from './assets/logo-in-orbit.svg'
import letsStart from './assets/lets-start-illustration.svg'
import { Plus, X } from 'lucide-react'
import { Button } from './components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from './components/ui/dialog'
import { DialogClose } from '@radix-ui/react-dialog'

export function App() {
  return (
    <Dialog>
      <div className="h-screen flex flex-col items-center justify-center gap-8">
        <img src={logo} alt="in orbit logo" />
        <img
          src={letsStart}
          alt="home page illustration of woman launching a rocket"
        />
        <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
          You haven't set any goals yet, how about setting one right now?
        </p>
        <DialogTrigger asChild>
          <Button>
            <Plus className="s-4" />
            Set goal
          </Button>
        </DialogTrigger>
      </div>

      <DialogContent>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <DialogTitle>Create goal</DialogTitle>
              <DialogClose>
                <X className="size-5 text-zinc-600" />
              </DialogClose>
            </div>

            <DialogDescription>
              Add activities that make you feel good and that you want to
              continue practicing every week.
            </DialogDescription>
          </div>
          <form className="flex-1 flex flex-col justify-between">
            <div>oi</div>
            <div className="flex items-center gap-3">
              <DialogClose asChild>
                <Button type="button" className="flex-1" variant="secondary">
                  Close
                </Button>
              </DialogClose>
              <Button className="flex-1">Save</Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
