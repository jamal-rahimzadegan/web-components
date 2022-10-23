import 'core-js/actual' // this lib increase the size of our bundle, we should move it to webpack
import('./assets/global.css')
import Home from './pages/home'

Home()
