import { render } from 'solid-js/web'
import App from './App'

const rootElement = document.getElementById('root')

if (rootElement) render(() => <App/>, rootElement)
else console.error('Error: The app was not rendered because the root element could not be found')
