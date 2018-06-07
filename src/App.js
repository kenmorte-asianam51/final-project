import React, { Component } from 'react';
import Sound from 'react-sound';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ZanarkandMP3 from './zanarkand.mp3';
import StoryPage from './StoryPage';
import StartPage from './StartPage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      points: [{deportee: 0, refugee: 0, mother: 0}],
      page: 'start',
      soundUrl: ZanarkandMP3,
      name: 'Tidus',
      nameDialogOpen: false,
      tarot: null,
    };
  }

  handleQuit = () => {
    this.setState({
      page: 'start',
      points: [{deportee: 0, refugee: 0, mother: 0}],
      soundUrl: ZanarkandMP3,
      tarot: null,
    });
  }

  handleAddPoints = (points) => {
    const prevPoints = this.state.points[this.state.points.length - 1];
    let currentPoints = {...prevPoints};
    currentPoints.deportee += points.deportee;
    currentPoints.refugee += points.refugee;
    currentPoints.mother += points.mother;
    this.setState({points: this.state.points.concat([currentPoints])}, () => console.log(this.state.points));
  }

  handleChangeMusic = soundUrl => {
    this.setState({soundUrl});
  }

  handleRemovePoints = (points) => {
    this.state.points.pop();
    this.setState({points: this.state.points});
  }

  handleStartClick = () => {
    this.setState({nameDialogOpen: true});
  }

  handleStartClose = () => {
    this.setState({nameDialogOpen: false});
  }

  handleNameChange = event => {
    let name = event.target.value.trim();
    if (!name) name = 'Tidus';
    this.setState({name});
  }

  handleStartProceed = () => {
    this.setState({page: 'story', nameDialogOpen: false});
  }

  handleFinish = () => {
    const points = this.state.points[this.state.points.length - 1];
    const max = Math.max(points.deportee, points.mother, points.refugee);
    let tarot;
    if (points.deportee === max) 
      tarot = { 
        name: 'The Deportee',  
        text: 'Based on your responses, you are The Deportee. You are able to handle situations even though things feel "irreversible and unredeemable," and are able to persevere through tough times. Examples include racism, displacement, poverty, and failed immigration and criminal justice systems. Your choices say that through community effort, you can overcome systemic oppression. "The Deportee reminds people of the need to be loved, accountable, and ultimately forgiven while making difficult choices under structures of violence."',
      };
    else if (points.mother === max)
      tarot = { 
        name: 'The Mother',  
        text: 'Based on your responses, you are The Mother. Your answers say that your balance of both self-love and self-sacrifice is excellent. You are able to find a good balance between these, and thus can take care of others as well as yourself. You learn from your past mistakes, but also look forward to the future by setting what your ultimate goal is for life, keeping in mind "brave love" and "fruitful growth."',
      };
    else
      tarot = { 
        name: 'The Refugee',  
        text: 'Based on your responses, you are The Refugee. You are able to stay strong although the future looks very uncertain. Deep in your heart, you value your treasured previous homes, but are flexible and accustomed to new beginnings. Although desires may seem tempting to have, it is the struggles that you go through to reach those desires that ultimately define who you are and how you have flourished.',
      };
    this.setState({tarot});
  }

  render() {
    return (
      <div>
        {/* Background Music */}
        <Sound
          url={this.state.soundUrl}
          playStatus={Sound.status.PLAYING}
          autoLoad
          loop
        />

        {/* Name Dialog */}
        <Dialog
          open={this.state.nameDialogOpen}
          onClose={this.handleStartClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Enter Your Character's Name</DialogTitle>
          <DialogContent>
            <DialogContentText>
              You will begin your journey as a character in a refugee family. Please enter your character's name.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              placeholder="Tidus"
              fullWidth
              onChange={this.handleNameChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleStartClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleStartProceed} color="primary">
              Accept
            </Button>
          </DialogActions>
        </Dialog>


      {
        this.state.page === 'start' ? <StartPage onStartClick={this.handleStartClick} /> :
        this.state.page === 'story' ? <StoryPage name={this.state.name} tarot={this.state.tarot} onAddPoints={this.handleAddPoints} onRemovePoints={this.handleRemovePoints} onFinish={this.handleFinish} onQuit={this.handleQuit} onChangeMusic={this.handleChangeMusic} />
        : null
      }
      </div>
    );
  }
}

export default App;
