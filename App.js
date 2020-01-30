import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';

import Nav from './src/Components/Nav/Nav';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

import { NativeRouter, Route, Link } from 'react-router-native';
import routes from './routes';
import axios from 'axios';

class App extends Component {
	render() {
		return (
			<NativeRouter>
				{/* <Nav /> */}
				{routes}
			</NativeRouter>
		);
	}
}

export default App;
