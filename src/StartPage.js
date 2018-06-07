import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Background from './start-background.jpg';

class StartPage extends Component {
    render() {
        return (
            <div style={styles.container} >
                <h1>Your Journey - An Interactive Game</h1>
                <h2>AsianAm 51 - UC Irvine</h2>
                <h3>By Christian Morte</h3>
                <Button 
                    variant="contained" 
                    color="primary" 
                    style={styles.button}
                    onClick={this.props.onStartClick}
                >
                    Start Game
                </Button>
            </div>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
        position: 'absolute',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        background: 'url(' + Background + ')',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },

    button: {
        width: 200,
        fontWeight: 'bold',
    },
};

export default StartPage;