import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Loading from './src/pages/Loading'
import AddTimer from './src/pages/AddTimer'
import SetTimer from './src/pages/SetTimer'
import Main from './src/pages/Main'


const Routes = createAppContainer(
    createSwitchNavigator(
    {
        Loading,
        AddTimer,
        SetTimer,
        Main,
    
    }, {
        initialRouteName: 'Loading',
        backBehavior: 'order',
    }),
)

export default Routes