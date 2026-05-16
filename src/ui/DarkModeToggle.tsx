
import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext'

export default function DarkModeToggle() {
    const {isDarkMode , toggleMode} = useDarkMode() ;

  return (
    <button onClick={toggleMode} >
        {isDarkMode?<Sun /> : <Moon />}
    </button>
  )
}
