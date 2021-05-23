import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Loading from './src/pages/Loading'
import Main from './src/pages/Main'


const Routes = createAppContainer(
    createSwitchNavigator(
    {
        Loading,
        Main,
    
    }, {
        initialRouteName: 'Loading',
        backBehavior: 'order',
    }),
)

export default Routes