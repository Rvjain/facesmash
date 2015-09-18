/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} = React;

var Facesmash = React.createClass({
  getInitialState(){
    return {
      selectedTab: 'facesmash'
    }
  },
  changeTab(tabName){
    this.setState({
      selectedTab: tabName
    });
  },
  render: function() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title = "Facesmash"
          icon = {require ('image!message')}
          onPress={ () => this.changeTab('facesmash') }
          selected = {this.state.selectedTab === 'facesmash'}>
          <View style = {styles.pageView}>
            <Text>Home</Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title = "Messages"
          icon = {require ('image!message')}
          onPress={ () => this.changeTab('message') }
          selected = {this.state.selectedTab === 'message'}>
          <View style = {styles.pageView}>
            <Text>Message</Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title = "Settings"
          icon = {require ('image!message')}
          onPress={ () => this.changeTab('settings') }
          selected = {this.state.selectedTab === 'settings'}>
          <View style = {styles.pageView}>
            <Text>Settings</Text>
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

var styles = StyleSheet.create({
  pageView: {
    backgroundColor: '#fff',
    flex: 1
  }
});

AppRegistry.registerComponent('Facesmash', () => Facesmash);
