import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import StartBackground from './start-background.jpg';
import CampBackground from './Camp.jpg';
import BoatBackground from './boat.jpg';
import BoatBattle from './boat-battle.png';
import InsomniaBackground from './insomnia.jpg';
import SchoolBackground from './school.jpg';
import FireBackground from './fire.jpg';
import Dock from './dock.jpg';
import Fang from './fang.jpg';
import Hope from './hope.jpg';
import Cid from './cid.jpg';
import Sazh from './sazh.jpg';
import Vanille from './vanille.jpg';
import Snow from './snow.jpg';
import Zell from './zell.jpg';
import BoatNightMusic from './boat-night.mp3';
import ZanarkandMP3 from './zanarkand.mp3';
import BoatBattleMusic from './boat-battle.mp3';
import SchoolMusic from './school.mp3';
import FireMusic from './fire.mp3';
import './App.css';

const TYPES = {
    CHAPTER_CHANGE: 0,
    SCENE_CHANGE: 0.5,
    QUOTE_DIALOG: 1,
    NARRATOR_DIALOG: 2,
    CHOICE: 3,
    CHOICE_QUOTE_DIALOG: 4,
    CHOICE_NARRATOR_DIALOG: 5,
};

const STORY = [
    /*
    { type: TYPES.CHAPTER_CHANGE, text: '', background: StartBackground },
    { type: TYPES.SCENE_CHANGE, text: '', background: StartBackground },
    { type: TYPES.QUOTE_DIALOG, text: '', speaker: '' },
    { type: TYPES.NARRATOR_DIALOG, text: '' },
    { 
        type: TYPES.CHOICE, 
        text: '', 
        choice1: '', 
        choice2: '', 
        choice1Dialog: [], 
        choice2Dialog: [],
        choice1Points: { deportee: 0, refugee: 0, mother: 0 },
        choice2Points: { deportee: 0, refugee: 0, mother: 0 },
    },
    { type: TYPES.CHOICE_QUOTE_DIALOG, text: '', speaker: '' },
    { type: TYPES.CHOICE_NARRATOR_DIALOG, text: '' },
    */


    { type: TYPES.CHAPTER_CHANGE, text: 'Background', background: StartBackground },
    { type: TYPES.NARRATOR_DIALOG, text: 'I am a the child of a refugee family of 7 who is struggling to escape the wartorn country of Zanarkand.' },
    { type: TYPES.NARRATOR_DIALOG, text: 'My family consists of Mama Yuna, Pa Auron, 2 younger siblings Wakka and Lulu, and grandparents.' },
    { type: TYPES.NARRATOR_DIALOG, text: 'The house I lived in was burned to the ground by the opposing army in attempts to to purge the town.' },
    { type: TYPES.NARRATOR_DIALOG, text: 'Luckily, my family managed to escape the day beforehand with the knowledge of local townspeople.', background: StartBackground },

    { type: TYPES.CHAPTER_CHANGE, text: 'Zanarkand', background: StartBackground },
    { type: TYPES.SCENE_CHANGE, text: 'Dinner at the Camp', background: CampBackground },
    { type: TYPES.NARRATOR_DIALOG, text: 'Currently, we are staying in a camp away from the battlefield at night with everyone but Pa, who is away discussing matters with another man. A fire started by Pa earlier keeps us warm as we surround it in a circle.' },
    { type: TYPES.NARRATOR_DIALOG, text: 'Mama took out some rice to split with the family to eat for dinner. Each person receives a small handful.' },
    { type: TYPES.QUOTE_DIALOG, text: 'Here Wakka, eat some rice.', speaker: 'Mama' },
    { type: TYPES.NARRATOR_DIALOG, text: 'Wakka excitedly grabs his portion from Mama and gobbles the rice at his hand.' },
    { type: TYPES.NARRATOR_DIALOG, text: 'Mama hands out some more rice to grandma, grandpa, and Lulu.' },
    { type: TYPES.QUOTE_DIALOG, text: 'Here\'s your share _.', speaker: 'Mama' },
    { type: TYPES.NARRATOR_DIALOG, text: 'Mama hands me my portion. I didn’t get as much as Lulu or Wakka, and my stomach was growling the whole time.' },
    { type: TYPES.QUOTE_DIALOG, text: 'Thanks Mama.', speaker: 'You' },
    { type: TYPES.NARRATOR_DIALOG, text: 'I grab the rice off of Mama’s hands and proceed to eat nibbles to maximize the amount of time I can spend eating.' },
    { type: TYPES.QUOTE_DIALOG, text: 'I\'m still hungry! I\'m still hungry!', speaker: 'Wakka' },
    { type: TYPES.QUOTE_DIALOG, text: 'You ate it so fast of course you\'re still hungry!', speaker: 'Lulu' },
    { type: TYPES.QUOTE_DIALOG, text: 'Now, now Wakka. These ones are for your father. We\'ll make more tomorrow.', speaker: 'Mama' },
    { type: TYPES.NARRATOR_DIALOG, text: 'Wakka laid there pouting afterwards. This wasn’t his usual stubborn, spoiled kind of tantrum. He was legitimately hungry. I don’t blame him since we haven’t eaten a full meal since we left home.' },
    { type: TYPES.NARRATOR_DIALOG, text: 'I continue nibbling at my rice as I watch Wakka stare at the fire. I can hear the grumbling of his stomach, as well as my own, and his face gradually get worse with each passing moment.' },
    { 
        type: TYPES.CHOICE, 
        text: 'Wakka still appears to be hungry. What should I do?', 
        choice1: 'Give Wakka your portion of rice to make him feel better.', 
        choice2: 'Continue eating your share since Wakka will eventually fall asleep.', 
        choice1Dialog: [
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'Here Mama, I can give him my piece.', speaker: 'You' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'Are you sure? You haven’t eaten all day and we need as much energy for the next few days.', speaker: 'Mama' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'Wakka\'s eyes lit up as he proceeds to excitedly near himself to my hand with the rice.' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'Yeah. I\'ll be fine.', speaker: 'You' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'Wakka grabs the the rest of my unfinished rice and gobbles it up in the same manner he ate his original portion.' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'I give a slight smile towards him as he enjoys filling his stomach with the food, and I stare back at the fire in the sounds of guns firing, wind howling, and my own stomach grumbling amidst the mess.' },
        ], 
        choice2Dialog: [
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'I continue eating my share of rice, waiting for Wakka to eventually calm down and sleep.' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'Mama proceeds to comfort Wakka by putting his head on her lap and hum a melody.' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'I contemplated of giving my share to Wakka, but I know that in the midst of all this mess that we need to learn to manage our own health in order to survive the ongoing struggles.' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'Mama, when are we gonna eat again?', speaker: 'Wakka' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'Tomorrow night, baby.', speaker: 'Mama' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'Wakka groans in discomfort as I pick off the last pieces of rice in my hand and realize, that even after these last few pieces, I was still hungry.' },
        ],
        choice1Points: { deportee: 1, refugee: 0, mother: 3 },
        choice2Points: { deportee: 1, refugee: 0, mother: 0 },
    },
    { type: TYPES.SCENE_CHANGE, text: 'Before the Boat', background: CampBackground },
    { type: TYPES.NARRATOR_DIALOG, text: 'After “dinner,” we all fell asleep around the fire except Pa, who was still out with the other man.' },
    { type: TYPES.NARRATOR_DIALOG, text: 'Ma wrapped all of us around Grandma’s blankets she made back home, but it became cramped trying to stuff me, Wakka, and Lulu in one sheet.' },
    { type: TYPES.NARRATOR_DIALOG, text: 'I awaken to the sounds of Pa shaking me, Mama, Wakka, and Lulu in a rushed manner.' },
    { type: TYPES.QUOTE_DIALOG, speaker: 'Pa', text: 'Quick _, Lulu, Wakka get up. We got a boat out of here!' },
    { type: TYPES.QUOTE_DIALOG, speaker: 'Mama', text: 'Really! Oh that’s great! All of us to fit?' },
    { type: TYPES.NARRATOR_DIALOG, text: 'Pa halts and walks to Mama in a gloomy fashion.' },
    { type: TYPES.QUOTE_DIALOG, speaker: 'Pa', text: 'I’m sorry Yuna. The boat can only fit five more people. I’m afraid your parents will have to stay..' },
    { type: TYPES.QUOTE_DIALOG, speaker: 'Mama', text: 'What?! What do you mean? We have to take them! We can’t just leave them here!' },
    { type: TYPES.QUOTE_DIALOG, speaker: 'Pa', text: 'Well, we can’t just stay here either! We have no choice!' },
    { type: TYPES.QUOTE_DIALOG, speaker: 'Mama', text: 'But who’s going to take care of them?!' },
    { type: TYPES.QUOTE_DIALOG, speaker: 'Pa', text: 'I asked our neighbors to watch over them in the meantime and care for them while we figure out how to bring them over.' },
    { type: TYPES.NARRATOR_DIALOG, text: 'I hear Mama and Pa continually argue over how to handle my grandparents. I stopped listening after the realization that I may never see them again if we get on this boat. Feelings of sorrow start rushing in my mind.' },
    { type: TYPES.NARRATOR_DIALOG, text: 'I’m quickly interrupted by Pa’s hand grabbing me up and leading all of us but my grandparents away from the camp.' },
    { type: TYPES.QUOTE_DIALOG, speaker: 'You', text: 'Wait Pa! What about grandpa and grandma!' },
    { type: TYPES.QUOTE_DIALOG, speaker: 'Pa', text: 'I’m sorry _, the boat is leaving soon and they’re going to have to stay here for now!' },
    { 
        type: TYPES.CHOICE, 
        text: 'I am about to board the boat with your family minus your grandparents. What should I do?', 
        choice1: 'Go back and stay with your grandparents.', 
        choice2: 'Continue following your family to the boat.', 
        choice1Dialog: [
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'No, Pa! We can’t just leave them behind! I’ll stay behind with them!', speaker: 'You' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'Are you crazy?! You want to stay here and die in the war?', speaker: 'Pa' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'No!', speaker: 'You' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'Then you’re coming with us!', speaker: 'Pa' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'Pa grabs my wrist and drags me along with the rest of my siblings and Mama. I turn back towards the camp where my grandparents still lay fast asleep, unaware of what they won’t see tomorrow.', background: CampBackground, music: ZanarkandMP3 },
        ], 
        choice2Dialog: [
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'Grandma.. Grandpa..', speaker: 'You' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'I know it’s hard, _. We’ll see them again. I promise.', speaker: 'Pa' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'I don’t want to leave them, but I know that this is what we need to do for our future.', background: CampBackground, music: ZanarkandMP3 },
        ],
        choice1Points: { deportee: 1, refugee: 1, mother: 1 },
        choice2Points: { deportee: 1, refugee: 2, mother: 0 },
    },

    { type: TYPES.SCENE_CHANGE, text: 'Boarding the Boat', background: Dock, music: BoatNightMusic },
    { type: TYPES.NARRATOR_DIALOG, text: 'I’m not sure why, but instincts told me to go back and at least get a remembrance of my grandparents before we leave. I run back to the camp to where my grandparents sleep.' },
    { type: TYPES.QUOTE_DIALOG, text: 'Where are you going?!', speaker: 'Pa' },
    { type: TYPES.QUOTE_DIALOG, text: 'Hold on! I forgot something important!', speaker: 'You' },
    { type: TYPES.NARRATOR_DIALOG, text: 'I pick up the blanket my grandma made that I slept with my siblings, and give one last kisses to grandpa and grandma, who are both still asleep.' },
    { type: TYPES.NARRATOR_DIALOG, text: 'I arrive back to where my family waited for me, Pa sees the blankets wrapped around my shoulders and gives a stern nod as we proceed down to the dock and board to the boat labeled “Freedom Boat.”', background: Dock },


    { type: TYPES.CHAPTER_CHANGE, text: 'Freedom Boat', background: BoatBackground },
    { type: TYPES.SCENE_CHANGE, text: 'Night Time', background: BoatBackground },
    { type: TYPES.NARRATOR_DIALOG, text: 'It’s still the middle of the night as the boat sails across the endless dark ocean.' },
    { type: TYPES.NARRATOR_DIALOG, text: 'All the families were placed inside a tightly cramped area downstairs. ' },
    { type: TYPES.NARRATOR_DIALOG, text: 'Pa and Ma surround me and my siblings on both sides in the small corner where we lay.' },
    { type: TYPES.NARRATOR_DIALOG, text: 'The rocking of the boat prevents me from being able to fall asleep. Meanwhile, Wakka and Lulu are snoring their butts off.' },
    { type: TYPES.QUOTE_DIALOG, text: 'I’m going to go check on the status with the captain.', speaker: 'Pa' },
    { type: TYPES.QUOTE_DIALOG, text: 'Okay, I’ll stay with the kids. Don’t take too long.', speaker: 'Mama' },
    { type: TYPES.QUOTE_DIALOG, text: 'I won’t.', speaker: 'Pa' },
    { type: TYPES.QUOTE_DIALOG, text: 'I want to go up with you!', speaker: 'You' },
    { type: TYPES.QUOTE_DIALOG, text: 'No, you must stay here. It can be dangerous up there.', speaker: 'Pa' },
    { type: TYPES.QUOTE_DIALOG, text: 'But I want to stare at the night sky with you and hear the sounds of the ocean!', speaker: 'You' },
    { type: TYPES.NARRATOR_DIALOG, text: 'I begged Pa to be able to join him, but he shook his head, hugged me tightly in his arms, and got up from the floor.' },
    { type: TYPES.NARRATOR_DIALOG, text: 'Pa kisses Mama and quietly walks over to the stairs leading to the deck of the boat. He is careful stepping over some of the families laying down, making sure not to wake them.' },
    { type: TYPES.NARRATOR_DIALOG, text: '* an hour later *' },
    { type: TYPES.NARRATOR_DIALOG, text: 'Mama has also started to doze off a bit, but I still can’t find my way to start dreaming.' },
    { type: TYPES.NARRATOR_DIALOG, text: 'Restlessness starts taking over my body as I can’t seem to find the right position to comfortably sleep.' },
    { type: TYPES.NARRATOR_DIALOG, text: 'I think about what Pa is doing, probably staring at his small compass and looking at the sky to find the North star to guide our direction. I always admired his way of taking over situations like these.' },
    { type: TYPES.NARRATOR_DIALOG, text: 'As I look around the dark indoors, I notice a line of light shining its way toward the middle of the room. It’s the door that Pa came out of that was left open before he left.' },
    { 
        type: TYPES.CHOICE, 
        text: 'I could use this opportunity to go outside. Should I?', 
        choice1: 'Disobey Pa and head outside to the deck to watch the scenery.', 
        choice2: 'Stay indoors with Mama, Wakka, and Lulu and try to fall asleep.', 
        choice1Dialog: [
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'As quietly as I could, I decide to get up from my place and move in the same silent manner that Pa had when heading outside.' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'Using my feet to feel my surroundings, I pick my feet up over a dozen people until I get to the stairs leading to the outside of the boat.' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'As I noiselessly lift the door open, I hear the sounds of peaceful waves crashing onto the base of the boat, and looking up I see hundreds of glistening stars with the moon right in the center to illuminate the night sky.' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'I adore the beauty surrounding me amidst the uncertainty of what’s to come for me and my family’s future.' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'To further enjoy the view, I find a spot to lay down and stare at the sky.' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'It feels refreshing to breathe the fresh air and heave room to move my arms and legs without bumping into Wakka and Lulu. I don’t even feel the irritating rocking of the boat that prevented me from sleeping.' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'After several minutes, I am able to doze off into a deep sleep.' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'Little did I know, Pa saw me moments after laying down, and waited for me to fall asleep.' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'Instead of shaking me awake, he lifted me up like a child and lay me back down to the indoors of the boat where I continue dozing.', music: BoatNightMusic, background: BoatBackground  },
        ], 
        choice2Dialog: [
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'Temptations first arose to go outside and watch the night sky, but I decided to stay inside and attempt to sleep. I try to stare at the direction where Ma is, but it was too dark to vividly see her face.' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'I imagine what the night sky looks like, with hundreds of stars lighting up to create the dark blue color. I imagine the moon lighting up the center of the sky , with its crescent shape that I had seen earlier at the camp. ' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'The imagery I create in my head helped calm me down and forget the rocking of the boat that prevented me from falling asleep. Eventually, I am able to doze off but the sounds of waves of rocking the boat base.', music: BoatNightMusic, background: BoatBackground  },

        ],
        choice1Points: { deportee: 0, refugee: 1, mother: 0 },
        choice2Points: { deportee: 1, refugee: 0, mother: 2 },
    },

    { type: TYPES.SCENE_CHANGE, text: 'Daytime Struggle', background: BoatBattle, music: BoatBattleMusic },
    { type: TYPES.NARRATOR_DIALOG, text: 'Suddenly, I awaken to the sounds of yelling by some people outside the boat.' },
    { type: TYPES.NARRATOR_DIALOG, text: 'I look around and see that my father has still not come back to us.' },
    { type: TYPES.QUOTE_DIALOG, text: 'We need to turn the boat away from those ships! Those are pirates!', speaker: 'Captain' },
    { type: TYPES.QUOTE_DIALOG, text: 'Quick! Open the sails so we can steer away from them!', speaker: 'Crewman' },
    { type: TYPES.QUOTE_DIALOG, text: 'I’ll handle that! Let the families know and see if we can grab some help from some of the passengers!', speaker: 'Pa' },
    { type: TYPES.NARRATOR_DIALOG, text: 'The crewman realizes this order and runs from the front of the deck all the way to the indoors where all the families stay.' },
    { type: TYPES.NARRATOR_DIALOG, text: 'The door leading outside opens and the crewman informs everyone of the situation.' },
    { type: TYPES.QUOTE_DIALOG, text: 'Mama, will we be okay? Are there bad people?', speaker: 'Lulu' },
    { type: TYPES.QUOTE_DIALOG, text: 'Hush, baby. We’ll be fine.', speaker: 'Mama' },
    { type: TYPES.QUOTE_DIALOG, text: 'We need help in opening the sails! Is there anyone here that can help.', speaker: 'Crewman' },
    { type: TYPES.NARRATOR_DIALOG, text: 'Despite some pretty physically built individuals in the room, no one bothered to raise their hand and help.' },
    { type: TYPES.QUOTE_DIALOG, text: 'Mama, I’m scared!', speaker: 'Lulu' },
    { type: TYPES.QUOTE_DIALOG, text: 'Don’t worry baby, things will be okay.', speaker: 'Mama' },
    { type: TYPES.QUOTE_DIALOG, text: 'Can I help??', speaker: 'Wakka' },
    { type: TYPES.QUOTE_DIALOG, text: 'Absolutely not! You need to stay here where it’s safe.', speaker: 'Mama' },
    { type: TYPES.NARRATOR_DIALOG, text: 'In this urgent situation, we need someone to step up and take control of the situation. I think back to my father and what he does in these situations.' },
    { 
        type: TYPES.CHOICE, 
        text: 'Someone needs to step up and help save the boat! What should I do?', 
        choice1: 'Volunteer to help and save the boat from danger.', 
        choice2: 'Stay and watch over Wakka and Lulu to comfort them.', 
        choice1Dialog: [
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'Mama, I’m gonna go out and help Pa.', speaker: 'You' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'What? Are you sure you’ll be able to even do that?', speaker: 'Mama' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'Even if I can’t, it’s better than just staying here and doing nothing!', speaker: 'You' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'Quick, we need at least one extra body for help!', speaker: 'Crewman' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'I immediately raise my hand and step forward to where the crewman stands.' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'Thank you so much! Come, the sail is over this way!', speaker: 'Crewman' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'Be careful and stay with your father!', speaker: 'Mama' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'I give one last glance back to Mama and the kids, not knowing if this can be the last time I see them.' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'As I head outside, the bright sun flashes down on my eyes before I am able to assess the situation. I look to my right and see my father pulling down a rope to lift the sail up.' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'Over here. Auron is trying to pull the sail up and he needs help!', speaker: 'Crewman' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'I walk over to Pa and as soon as his eyes crosses mine, he gives a look of surprise.' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: '_! What are you doing here!', speaker: 'Pa' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'Is that your kid?', speaker: 'Crewman' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'Yeah! No time, come help me lift the sail up!', speaker: 'Pa' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'The crewman and I run over behind Pa and tightly grip the end of the rope. We start pulling the rope to get the sail up.' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'At first, we struggle to make any progress in having the sail fully lifted, but after several moments of pulling, I see the sail start to get to the right position.' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'We did it! Good job _.', speaker: 'Pa' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'Thanks Pa.', speaker: 'You' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'What about me?!', speaker: 'Crewman', background: BoatBattle, music: BoatBattleMusic  },
        ], 
        choice2Dialog: [
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: '_, do you think you can stay behind and watch over the kids? I need to help your father.', speaker: 'Mama' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'Okay, Mama.', speaker: 'You' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'No don’t go! I’m scared!', speaker: 'Lulu' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'Don’t worry, _ will be here to keep you guys safe. It’ll only be just a second.', speaker: 'Mama' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'Mama gets up and starts to walk over to the crewman waiting by the door.' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'I give her a nod to acknowledge her bravery and a sign to uphold my responsibility that she assigned me.' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'Although I wasn’t able to directly help in the situation to save the ship, I know that I was indirectly helping by following Mama’s orders and keeping Wakka and Lulu calm.' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'Will Mama be okay?', speaker: 'Wakka' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'Yeah, Mama and Papa are the strongest people I know.', speaker: 'You' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'After thirty minutes, we feel the boat turning as a sigh of relief is experienced by everyone on the boat. Some cheers can be heard by people in the room.' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'See guys, Mama told you everything will be alright!', speaker: 'You' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'Although these words used were to comfort the kids, I know that they also gave me some comfort not only because the kids and I were safe, but because Mama and Pa were safe and helped save the boat.', background: BoatBattle, music: BoatBattleMusic  },
        ],
        choice1Points: { deportee: 2, refugee: 2, mother: 0 },
        choice2Points: { deportee: 0, refugee: 0, mother: 2 },
    },


    { type: TYPES.CHAPTER_CHANGE, text: 'Pulse', background: InsomniaBackground, music: SchoolMusic },
    { type: TYPES.SCENE_CHANGE, text: 'Schoolyard', background: SchoolBackground },
    { type: TYPES.NARRATOR_DIALOG, text: 'Once our boat landed on the free land of Pulse, Pa and Mama took quick measures to ensure our new lives would be better.' },
    { type: TYPES.NARRATOR_DIALOG, text: 'Mama and Pa rented a 1-bedroom apartment in a large complex where other people who were on the boat with us also stayed.' },
    { type: TYPES.NARRATOR_DIALOG, text: 'Pa took a job as a factory worker and made minimum wage.' },
    { type: TYPES.NARRATOR_DIALOG, text: 'Mama worked part-time  as a maid, and we would be thrilled when she would bring home food from the house that she worked in.' },
    { type: TYPES.NARRATOR_DIALOG, text: 'Wakka, Lulu, and I both attended the local public school, where we were initially celebrated and introduced along with other children that rode with us on the Freedom Boat.' },
    { type: TYPES.NARRATOR_DIALOG, text: 'Mama and Pa both stressed the importance of doing well in school, so we all made sure to get good grades, make a good impression on our teachers, and most importantly, don’t disturb and be respectful to the other children.' },
    { type: TYPES.NARRATOR_DIALOG, text: 'One day, however, this last point was challenged in a situation I was placed in.' },
    { type: TYPES.NARRATOR_DIALOG, text: 'One kid approached Wakka during morning break and started pestering him. I can tell that Wakka didn’t like the treatment because of his irritated facial expressions and pouting.' },
    { type: TYPES.QUOTE_DIALOG, text: 'Hey, so how was it like getting off the boat?', speaker: 'Kid' },
    { type: TYPES.QUOTE_DIALOG, text: 'I don’t know...', speaker: 'Wakka' },
    { type: TYPES.QUOTE_DIALOG, text: 'What do you mean you don’t know? You see any pirates? Are YOU a pirate?', speaker: 'Kid' },
    { type: TYPES.QUOTE_DIALOG, text: 'No I’m not!', speaker: 'Wakka' },
    { type: TYPES.QUOTE_DIALOG, text: 'You kinda look like a pirate. Your clothes don’t look very nice.', speaker: 'Kid' },
    { type: TYPES.NARRATOR_DIALOG, text: 'I knew Wakka could not properly defend himself because of his limited English skills and timidness around new people.' },
    { type: TYPES.NARRATOR_DIALOG, text: 'I approached Wakka and the kid to step up for my little brother.' },
    { type: TYPES.QUOTE_DIALOG, text: '_!', speaker: 'Wakka' },
    { type: TYPES.QUOTE_DIALOG, text: 'Hey, kid. Leave him alone. He didn’t do anything to you.', speaker: 'You' },
    { type: TYPES.QUOTE_DIALOG, text: 'Oh yeah? What are you gonna do about it?', speaker: 'Kid' },
    { type: TYPES.NARRATOR_DIALOG, text: 'The kid shoved me with his right arm, making me move backward. I keep my ground and stare back up at the kid. The nerve of these people.' },
    { 
        type: TYPES.CHOICE, 
        text: 'This kid just pushed me down! What should I do?', 
        choice1: 'Ignore the kid and walk away with Wakka.', 
        choice2: 'Shove the kid back.', 
        choice1Dialog: [
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'Let’s go Wakka. This kid is nothing.', speaker: 'You' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'I grab hold of Wakka’s hand and walk away from where the kid stands. Wakka starts sobbing and wipes his tears with the collar of his shirt.' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'Thank you, _.', speaker: 'Wakka' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'When something like that happens, tell me and I’ll make sure it won’t happen again.', speaker: 'You' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'The kid continues pestering from afar, but Wakka and I ignore it.' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'Boat people! Boat people!', speaker: 'Kid' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'When we arrive back home at the end of the day, Mama asks how our day was, as she usually does.' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'Wakka and I look at each other for a brief moment, and both of us say “Okay.”' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'We know that the it would be a tough situation to explain to Mama, so the only way to get through these is to have each others back as family.', background: SchoolBackground, music: SchoolMusic },
        ], 
        choice2Dialog: [
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'I walk towards the kid and instantly shove him back. One thing I’ve been taught is to never let someone punch you without punching them back. I chose this lesson over the advice my parents gave me of not disturbing others.' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'The kid falls down on the ground and starts crying.' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'I look at Wakka, who emitted a face of disbelief, and grab him by the hand and take him away from the situation.' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'Several children start gathering around the spot where the kid is crying, as well as teachers who are assessing what just happened.' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'You are gonna be so busted from Mama.', speaker: 'Wakka' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'I ignore his words, but I know I’ll be screwed when I get back home.' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'Even though I disobeyed my parents in this situation, I know that I have to be there to stand up for my siblings. In these settings, we are the only ones who can have each other’s back.' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'When we arrive home, Mama asks us how our day was, as she usually does.' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'Wakka and I both look at each other with a smirk, and simultaneously say “It was okay.”' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'Suddenly, the phone rings and Mama picks it up.' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'Hello, this is the school principal.', speaker: 'Phone', background: SchoolBackground, music: SchoolMusic },
        ],
        choice1Points: { deportee: 2, refugee: 2, mother: 1 },
        choice2Points: { deportee: 2, refugee: 2, mother: 0 },
    },

    { type: TYPES.SCENE_CHANGE, text: 'House Fire', background: FireBackground, music: FireMusic },
    { type: TYPES.NARRATOR_DIALOG, text: 'Of all the things my parents keep during our time in Pulse, the most important things they treasure are the documents that help identify the members of our family. These include greencards, school IDs, social security numbers, and other things.' },
    { type: TYPES.NARRATOR_DIALOG, text: 'At the time, I didn’t really get why they treasured these documents so much. But they always taught me that in the case of an emergency, never forget to bring these papers with you.' },
    { type: TYPES.NARRATOR_DIALOG, text: 'I didn’t realize how much those words would hit me until the day we almost lost our home.' },
    { type: TYPES.NARRATOR_DIALOG, text: 'It was a quiet summer weekend, a boring day with Pa trying to read the newspaper (though he was still learning English), and Ma playing with Wakka and Lulu. I was doing some reading assigned from school.' },
    { type: TYPES.NARRATOR_DIALOG, text: 'Suddenly, we hear a loud slam from the upstairs. We hear the sounds of muffled voices coming from the apartment room right above our room.' },
    { type: TYPES.QUOTE_DIALOG, text: 'Oh crap! Quick, honey get the kids out! Go, go, go!', speaker: 'Man Upstairs' },
    { type: TYPES.QUOTE_DIALOG, text: 'What was that?', speaker: 'Mama' },
    { type: TYPES.NARRATOR_DIALOG, text: 'Pa spends a few moments quiet and looking around our house. He starts sniffing the air around, and then makes a face of urgency.' },
    { type: TYPES.QUOTE_DIALOG, text: 'Yuna, get the kids now. There’s a fire upstairs. We gotta get out!', speaker: 'Pa' },
    { type: TYPES.NARRATOR_DIALOG, text: 'Mama rushes to lead Wakka, Lulu, and I out the door, and Pa starts to get some of the opium we took back from Zanarkand.' },
    { type: TYPES.NARRATOR_DIALOG, text: 'As I am about to walk out the door with Mama and the kids, something pops up in my head. My refugee instincts start kicking in. It was as if I had forgot something terribly important that I know I could not lose. When I look back towards the apartment, I see exactly what I was thinking about.' },
    { 
        type: TYPES.CHOICE, 
        text: 'I have to get it. I can\'t leave without it.', 
        choice1: 'Grab the important documents of our family.', 
        choice2: 'Grab grandma’s blanket that I got from Zanarkand before I left.', 
        choice1Dialog: [
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'I knew it. This was the moment that my parents had been preparing me for since we arrived in Pulse. I needed to get the documents that allowed us our freedom here.' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'I rushed quickly back into the apartment to retrieve the folder containing our documents. Pa sees me get them from across the room and gives me a nod. He signals me to start leaving the apartment.' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'Lets go, _!', speaker: 'Pa' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'Okay!', speaker: 'You' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'By the way, here’s your grandma’s blanket.', speaker: 'Pa' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'Grandma\'s blanket. I was almost about to forget this one. A big sigh of relief comes over me as I realize that I almost forgot to bring this along with me. ' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'Thanks, Pa!', speaker: 'You' },
        ], 
        choice2Dialog: [
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'Grandma’s blanket. It was the only remembrance I have of back home in Zanarkand before we left Grandma and Grandpa. I don’t want to forget about them, and this was my way of carrying on their legacy.' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'I rushed quickly back to the apartment and find where the blanket was.' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'What are you doing! Where’s your mom!', speaker: 'Pa' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'I forgot Grandma’s blanket. I have to get it!', speaker: 'You' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'I have it here!', speaker: 'Pa' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'A big sigh of relief comes over me as I grab it from my father’s shoulder and wrap it around myself.' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: 'Get the documents! Quickly, now!', speaker: 'Pa' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'Oh crap. I forgot about the documents. The one thing that identifies our family and gives us our freedom here. A sense of guilt floods me as I almost failed my parents, my siblings, myself' },
            { type: TYPES.CHOICE_QUOTE_DIALOG, text: '_?! Hurry we have to go!', speaker: 'Pa' },
            { type: TYPES.CHOICE_NARRATOR_DIALOG, text: 'I grab the documents and run out with Pa outside our apartment. ' },
        ],
        choice1Points: { deportee: 2, refugee: 3, mother: 0 },
        choice2Points: { deportee: 0, refugee: 1, mother: 2 },
    },

    { type: TYPES.SCENE_CHANGE, text: 'Post-House Fire', background: FireBackground, music: FireMusic },
    { type: TYPES.NARRATOR_DIALOG, text: 'Pa and I both leave the apartment together and lock the door. We start frantically running down the way outside.' },
    { type: TYPES.NARRATOR_DIALOG, text: 'Smoke starts filling the way outside of the complex, so we cover our mouths. Pa and I return back to where Mama, Wakka, and Lulu all wait outside the complex.' },
    { type: TYPES.QUOTE_DIALOG, text: 'Oh thank goodness you were able to save the documents! I thought you almost forgot about them.', speaker: 'Mama' },
    { type: TYPES.NARRATOR_DIALOG, text: 'I give Ma the documents and we proceed to stand by the parking lot outside the apartment.' },
    { type: TYPES.NARRATOR_DIALOG, text: 'Firemen start arriving at the scene and rescuing people in the house.' },
    { type: TYPES.NARRATOR_DIALOG, text: 'During these situations, I realize that however much I try to adjust to life on Pulse and become like the people here, I will always have that part in me that identifies with being a refugee of Zanarkand. ' },
    { type: TYPES.NARRATOR_DIALOG, text: 'For normal folks, their most prized possessions can be awards or personal belongings they’ve accumulated in their life. However, for me, my family, and all the refugees that arrived here in Pulse, the most important things are the documents that identify us and keep us here in Pulse.' },
    { type: TYPES.NARRATOR_DIALOG, text: 'I know this is something that will always be with me growing up. Instead of trying to run away from it, I feel that being a refugee is something that I need to accept and live with. ' },
    { type: TYPES.NARRATOR_DIALOG, text: 'It’s been instilled by my parents, who helped us get to where we are now. They saved us from the ravage of war, and gave us a new opportunity for our futures. And that is something I can never pay back.' },
];

class StoryPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            story: STORY,
            background: StartBackground,
        };
    }

    componentWillMount(){
        document.addEventListener("keydown", this.handleKeyDown.bind(this));
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown.bind(this));
    }

    handlePrevious = () => {
        if (this.state.index <= 0 || this.props.tarot) return;
        this.setState({index: this.state.index - 1}, () => {
            const data = this.state.story[this.state.index];
            if (data.background) this.setState({background: data.background});
            if (data.music) this.props.onChangeMusic(data.music);
            if (data.type === TYPES.CHOICE) {
                this.props.onRemovePoints();

                let firstHalf = this.state.story.slice(0, this.state.index + 1);
                let secondHalf = this.state.story.slice(this.state.index + 1)
                    .filter(dialogData => dialogData.type !== TYPES.CHOICE_NARRATOR_DIALOG && dialogData.type !== TYPES.CHOICE_QUOTE_DIALOG);
                this.setState({story: firstHalf.concat(secondHalf)});
            }
        });
    }

    handleForward = (fromChoice) => {
        if (this.state.index === this.state.story.length || this.props.tarot || (!fromChoice && this.state.story[this.state.index].type === TYPES.CHOICE)) return;
        if (this.state.index === this.state.story.length - 1 && this.state.story[this.state.index].type !== TYPES.CHOICE) {
            this.props.onFinish();
            return;
        }

        this.setState({index: this.state.index + 1}, () => {
            const data = this.state.story[this.state.index];
            if (data.background) this.setState({background: data.background});
            if (data.music) this.props.onChangeMusic(data.music);
        });
    }

    handleChoice = (choice) => {
        const data = this.state.story[this.state.index];
        const dialog = data['choice' + choice + 'Dialog'];
        const points = data['choice' + choice + 'Points'];
        let firstHalf = this.state.story.slice(0, this.state.index + 1);
        let secondHalf = this.state.story.slice(this.state.index + 1);
        let story = firstHalf.concat(dialog).concat(secondHalf);
        this.props.onAddPoints(points);
        this.setState({story});
        this.handleForward(true);
    }

    handleKeyDown = event => {
        switch (event.keyCode) {
            case 39:    // arrow right
                this.handleForward();
                break;
            case 37:    // arrow left
                this.handlePrevious();
                break;
            default: break;
        }
    }

    renderAvatar = (speaker) => {
        switch (speaker) {
            case 'Mama': return Fang;
            case 'Wakka': return Hope;
            case 'Lulu': return Vanille;
            case 'Pa': return Snow;
            case 'Captain': return Cid;
            case 'Crewman': return Sazh;
            case 'Kid': return Zell;
            default: return;
        }
    }

    render() {
        if (this.state.index >= this.state.story.length) return null;

        const containerStyle = Object.assign(
            {},
            { background: 'url(' + this.state.background + ') center center / cover no-repeat', },
            styles.container,
        );

        if (this.props.tarot) {
            return (
                <div className="container" style={containerStyle}>
                    <Button variant="raised" color="primary" style={styles.quitButton} onClick={this.props.onQuit}>
                        Quit
                    </Button>

                    <Card style={Object.assign({}, {width: 600}, styles.card)}>
                        <CardHeader title={'Your matching Tarot Card: ' + this.props.tarot.name} style={styles.cardHeader} />
                        <CardContent>
                            <Typography paragraph component="p">
                                {this.props.tarot.text}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            );
        }

        const data = this.state.story[this.state.index];
        const type = data.type;

        return (
            <div className="container" style={containerStyle} onKeyDown={this.handleKeyDown}>
                <Button variant="raised" color="primary" style={styles.quitButton} onClick={this.props.onQuit}>
                    Quit
                </Button>

                <Tooltip title="You can also use arrow keys!">
                    <Button variant="fab" color="primary" onClick={this.handlePrevious} disabled={this.state.index === 0}>
                        <ChevronLeft />
                    </Button>
                </Tooltip>

                {
                    type === TYPES.CHAPTER_CHANGE ?
                        <Card style={styles.card}>
                            <CardHeader title={'Chapter: ' + data.text} style={styles.cardHeader} />
                        </Card> :
                    type === TYPES.SCENE_CHANGE ?
                        <Card style={styles.card}>
                            <CardHeader title={'Scene: ' + data.text} style={styles.cardHeader} />
                        </Card> :
                    type === TYPES.NARRATOR_DIALOG || type === TYPES.CHOICE_NARRATOR_DIALOG ?
                        <Card style={styles.card}>
                            <CardContent>
                                <Typography color="textSecondary">
                                    You (Narrator)
                                </Typography>
                                <Typography align="center" paragraph component="p">
                                    {data.text}
                                </Typography>
                            </CardContent>
                        </Card> :
                    type === TYPES.QUOTE_DIALOG || type === TYPES.CHOICE_QUOTE_DIALOG ?
                        <Card style={styles.card}>
                            <CardContent>
                                <div style={styles.row}>
                                    <Avatar alt={data.speaker} src={this.renderAvatar(data.speaker)} style={{marginRight: 10}} />
                                    <Typography color="textSecondary">
                                        {data.speaker}
                                    </Typography>
                                </div>
                                <Typography align="center" paragraph component="p">
                                    "{data.text.replace('_', this.props.name)}"
                                </Typography>
                            </CardContent>
                        </Card> :
                    type === TYPES.CHOICE ?
                        <Card style={styles.card}>
                            <CardContent>
                                <Typography color="textSecondary">
                                    {data.text}
                                </Typography>
                                <div style={styles.row}>
                                <Button onClick={() => this.handleChoice(1)}>
                                    {data.choice1}
                                </Button>
                                <Button onClick={() => this.handleChoice(2)}>
                                    {data.choice2}
                                </Button>
                                </div>
                            </CardContent>
                        </Card> :
                    null
                }

                <Tooltip title="You can also use arrow keys!">
                    <Button variant="fab" color="primary" onClick={this.handleForward} disabled={type === TYPES.CHOICE || this.state.index === this.state.story.length}>
                        <ChevronRight />
                    </Button>
                </Tooltip>
            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        position: 'absolute',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },

    row: {
        display: 'flex',
        flexDirection: 'row',
    },

    card: {
        background: 'rgba(255,255,255,0.8)',
        width: 400,
    },

    cardHeader: {
        textAlign: 'center',
    },

    quitButton: {
        position: 'absolute',
        left: 5,
        top: 5,
    },
};

export default StoryPage;