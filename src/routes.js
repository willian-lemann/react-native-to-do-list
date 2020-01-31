import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Main from './pages/Main';


const Routes = createAppContainer(
    createStackNavigator({

        Main: {
            screen: Main,
            navigationOptions: {
                title: 'To do List',
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontSize:23,
                    fontWeight:'bold'
                },
                headerStyle: {
                    backgroundColor: '#7d40e7',

                },
            },
        }
    })
);

export default Routes;