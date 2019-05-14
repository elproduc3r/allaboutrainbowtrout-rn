import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Video } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';
import { SCREEN, VIDEOS } from '../../utiles';

export default class VideoPlayer extends React.Component {
	state = {
		mute: false,
		fullScreen: false,
		shouldPlay: true,
	}

	handlePlayAndPause = () => {
		this.setState(prevState => ({
			shouldPlay: !prevState.shouldPlay
		}));
	}

	handleVolume = () => {
		this.setState(prevState => ({
			mute: !prevState.mute,
		}));
	}
	render() {
		const { height } = SCREEN;

		const videoHeight = height * 0.8 * 0.5;
		const videoWidth = videoHeight * 2;
		return (
			<View style={styles.container}>
				<View style={{flex: 1}}>
					<ScrollView>
						<View>
							<Text>Add Stuff here</Text>
							<Text style={{paddingLeft: 15}}>Text with indent</Text>
							<Text>{"\u2022 "} Text with bullet points</Text>
							<Text style={{paddingLeft: 15}}>{"\u2022 "} Text with ident and bullet points</Text>
						</View>
					</ScrollView>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },

   controlBar: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 45,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "rgba(0, 0, 0, 0.5)",
   }
});
