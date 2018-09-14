import React from 'react';
import {Text, View, ActivityIndicator, StyleSheet} from 'react-native';
// import Header from '../components/Header';
import PeopleList from '../components/PeopleList';
import axios from 'axios';

export default class PeoplePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            peoples: [],
            loading: false,
            error: false,
        };
    }

    componentDidMount() {
        this.setState({loading: true});
        axios.get('https://randomuser.me/api/?nat=br&results=150')
            .then(response => {
                const {results} = response.data;
                this.setState({
                    peoples: results,
                    loading: false
                });
            }).catch(error => {
            this.setState({
                error: true,
                loading: false
            })
        });
    }

    renderPage() {
        if (this.state.loading) {
            return <ActivityIndicator size='large' color='#6ca2f7'/>
        }
        if (this.state.error) {
            return <Text style={styles.error}>Ops... Algo deu errado =(</Text>
        }
        return <PeopleList peoples={this.state.peoples}
                           onPressItem={(pageParams) => {
                               this.props.navigation.navigate('PeopleDatail', pageParams);
                           }}/>;
    }


    render() {
        return (
            <View style={styles.container}>
                {this.renderPage()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    error: {
        color: 'red',
        alignSelf: 'center',
        fontSize: 18
    }
});
