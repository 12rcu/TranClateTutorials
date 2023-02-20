import {makeProject} from '@motion-canvas/core/lib';

import addon from './scenes/addon?scene'
import entity from './scenes/entity?scene'

export default makeProject({
  scenes: [addon, entity],
  background: '#141414',
});
