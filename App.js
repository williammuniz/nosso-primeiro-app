import {createStackNavigator} from 'react-navigation'
import PeoplePage from './src/pages/PeoplePage'
import PeopleDetailPage from "./src/pages/PeopleDetailPage";
import {capitalizeFirstLetter} from "./src/util";

export default createStackNavigator({
    'Main': {
        screen: PeoplePage
    },
    'PeopleDatail': {
        screen: PeopleDetailPage,
        navigationOptions: ({navigation}) => {
            const peopleName = capitalizeFirstLetter(navigation.state.params.people.name.first);
            return ({
                title: peopleName,
                headerTitleStyle: {
                    color: 'white',
                    fontSize: 30,
                }
            });
        }
    }
}, {
    navigationOptions: {
        title: 'Pessoas!',
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#6ca2f7',
            borderBottomWidth: 1,
            borderBottomColor: '#C5C5C5FF',
        },
        headerTitleStyle: {
            color: 'white',
            fontSize: 30,
            textAlign: 'center',
            flexGrow: 1,
        }
    }
});
