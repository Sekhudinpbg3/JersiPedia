import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';
import { dummyPesanans } from '../../data';
import {ListHistory} from '../../components'
import { colors } from '../../utils';


export default class History extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            pesanans: dummyPesanans
             
        }
    }
    
    render() {
        const {pesanans} = this.state
        return (
            <View style={styles.page}>
                <ListHistory pesanans={pesanans}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    page:{
        backgroundColor: colors.white,
        flex:1,
    }
})
