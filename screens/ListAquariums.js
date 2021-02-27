/* List all aquriums */
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Realm from 'realm';
let realm;

export default class ListAquarium extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            FlatListItems: [],
        };
        realm = new Realm({ path})
    }
}