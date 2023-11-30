import { useEffect, useContext } from 'react'
import { ThemeContext } from '@views/contexts/ThemeContext'

export default function ThemeSelect() {
  const { theme, setTheme } = useContext(ThemeContext)
  const { systemDarkModeSetting, showResetButton, setShowResetButton } = useContext(ThemeContext)

  useEffect(() => {
    const preference = window.localStorage.getItem('userDarkModePreference')
    if (preference) {
      setTheme(preference)
      setShowResetButton(true)
    }
  }, [setTheme, setShowResetButton])

  function handleClick() {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    window.localStorage.setItem('userDarkModePreference', newTheme)
    setShowResetButton(true)
  }

  const ResetThemeElement = () => {
    const buttonClassName = showResetButton ? 'theme-select__theme-reset' : 'theme-select__theme-reset--hidden'
    return (
      <button 
        className={ buttonClassName }
        onClick={ () => { 
          window.localStorage.removeItem('userDarkModePreference')
          setTheme(systemDarkModeSetting)
          setShowResetButton(false)
          }
        }
      >
        use OS settings
      </button>
    )    
  }

  const ThemeControls = () => {
    return (
      <div role='group' aria-labelledby='theme-select-label'>
        <p id='theme-select-label' className='theme-select__label--sr-only'>Select theme</p>
        <button 
          className='theme-select__theme-toggle'
          onClick={ handleClick }
        >
          { theme }
        </button>
        <ResetThemeElement />
      </div>
    )
  }

  return (
    <ThemeControls />
  )
}


