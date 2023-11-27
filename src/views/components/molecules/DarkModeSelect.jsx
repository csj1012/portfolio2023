import { useEffect, useContext } from 'react'
import { ThemeContext } from '../../ThemeContext'

export default function DarkModeSelect() {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const preference = window.localStorage.getItem('userDarkModePreference')
    if (preference) {
      setTheme(preference)
    }
  }, [setTheme])

  function handleChange(e) {
    const selected = e.target.value
    setTheme(selected)

    if (selected === 'system') {
      window.localStorage.removeItem('userDarkModePreference')
    } else {
      window.localStorage.setItem('userDarkModePreference', selected)
    }
  }

  const SelectElement = () => {
    const options = ['system', 'light', 'dark']
    return (
      <form className='main-menu__darkmode'>
        {
          options.map(option => {
            return (
              <label key={option}>
                <input
                  type="radio"
                  name="myOptions"
                  value={option}
                  checked={theme === option}
                  onChange={handleChange}
                />
                {option}
              </label>
            )
          })
        }      
      </form>
    )
  }

  return (
    <SelectElement />
  )
}
