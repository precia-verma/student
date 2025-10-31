// To build GameLevels, each contains GameObjects from below imports
import GameEnvBackground from './GameEngine/GameEnvBackground.js';
import Player from './GameEngine/Player.js';

class MansionLevel2 {
  constructor(gameEnv) {
    let width = gameEnv.innerWidth;
    let height = gameEnv.innerHeight;
    let path = gameEnv.path;

    // Background data (customize as needed)
  const image_background = path + "/assets/images/mansion-untitled.jpeg"; // Updated background path
    const image_data_background = {
      name: 'background',
      greeting: "Welcome to the Graveyard Level!",
      src: image_background,
      pixels: {height: 1280, width: 720},
      mode: 'stretch'
    };

    // Player using multiple frames (character_frame_*.png)
    const player_frames = [
      path + "/assets/images/gamify/character_frame_1.png",
      path + "/assets/images/gamify/character_frame_2.png",
      path + "/assets/images/gamify/character_frame_3.png",
      path + "/assets/images/gamify/character_frame_4.png",
      path + "/assets/images/gamify/character_frame_5.png",
      path + "/assets/images/gamify/character_frame_6.png",
      // Add more frames as needed
    ];
    const player_scale_factor = 5;
    const sprite_data_player = {
      id: 'Player',
      greeting: "This is You!",
      src: player_frames, // Pass array of frames
      SCALE_FACTOR: player_scale_factor,
      STEP_FACTOR: 800,
      ANIMATION_RATE: 10,
      INIT_POSITION: { x: 0, y: 0 },
      pixels: {height: 2400, width: 3600},
      orientation: {rows: 1, columns: player_frames.length},
      // ...other movement configs as needed
      hitbox: {widthPercentage: 0.45, heightPercentage: 0.2},
      keypress: {up: 87, left: 65, down: 83, right: 68}
    };

    this.classes = [
      { class: GameEnvBackground, data: image_data_background },
      { class: Player, data: sprite_data_player },
    ];
  }
}

export default MansionLevel2;
