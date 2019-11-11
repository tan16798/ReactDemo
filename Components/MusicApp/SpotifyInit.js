import React, {PureComponent} from 'react';
import {ActivityIndicator,
	Alert,
	StyleSheet,
	Text,
	TouchableHighlight,
	View
} from 'react-native';
import Spotify from 'rn-spotify-sdk';
export default class SpotifyInit extends PureComponent{
    constructor(props){
        super(props);
        this.state={
            spotifyInitialized:false
        }
        this.spotifyLoginButtonWasPressed = this.spotifyLoginButtonWasPressed.bind(this);
    }
    async intializedifNeeded(){
        if(!await Spotify.isInitializedAsync()){
            const spotifyOptions = {
				"clientID":"54246e3d63054b929addddc1b8cfca3b",
				"sessionUserDefaultsKey":"SpotifySession",
				"redirectURL":"examplespotifyapp://auth",
				"scopes":["user-read-private", "playlist-read", "playlist-read-private", "streaming"],
            };
            const loggedIn=await Spotify.initialize(spotifyOptions);
            this.setState({spotifyInitialized:true});
            if(loggedIn){
                console.log("ready");
            }
        }
        else{
            this.setState({spotifyInitialized:true});
            if(await Spotify.isLoggedInAsync()){
                console.log("ready again");
            }
        }
    }
    componentDidMount(){
        this.intializedifNeeded().catch((error)=>{Alert.alert("errorrrrrrrrrr");});
    }
    spotifyLoginButtonWasPressed() {
		// log into Spotify
		Spotify.login().then((loggedIn) => {
			if(loggedIn) {
				// logged in
				console.log("readyyyyy");
			}
			else {
                // cancelled
                console.log("cancel");
			}
		}).catch((error) => {
			// error
			Alert.alert("Error", error.message);
		});
    }
    render(){
        if(!this.state.spotifyInitialized){
            return(
                <View style={styles.container}>
                    <ActivityIndicator animating={true} style={styles.loadIndicator}>
					</ActivityIndicator>
					<Text style={styles.loadMessage}>
						Loading...
					</Text>
                </View>
            );
        }
        else{
            return(
                <View style={styles.container}>
                <Text style={styles.greeting}>
                    Hey! You! Log into your spotify
                </Text>
                <TouchableHighlight onPress={this.spotifyLoginButtonWasPressed} style={styles.spotifyLoginButton}>
                    <Text style={styles.spotifyLoginButtonText}>Log into Spotify</Text>
                </TouchableHighlight>
            </View> 
            );
        }
    }
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},

	loadIndicator: {
		//
	},
	loadMessage: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},

	spotifyLoginButton: {
		justifyContent: 'center',
		borderRadius: 18,
		backgroundColor: 'green',
		overflow: 'hidden',
		width: 200,
		height: 40,
		margin: 20,
	},
	spotifyLoginButtonText: {
		fontSize: 20,
		textAlign: 'center',
		color: 'white',
	},

	greeting: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
});