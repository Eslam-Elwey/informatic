
import { useDarkMode } from "../contexts/DarkModeContext";


export default function Logo() {
  const {isDarkMode} = useDarkMode() ;

  const imgSrc = isDarkMode ? "./dark-logo.png" : "./light-logo.png"
  return <img src={imgSrc} alt="logo" className="md:w-3/4 w-full" />;
}
