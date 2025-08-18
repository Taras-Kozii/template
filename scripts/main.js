'use strict';

import { initNavigation } from './menu.js';
import { initHeader } from './header.js';
// import { watcherAnim, watcherToggle, countAnimate } from './animation.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initHeader();
  // watcherToggle('.hero .scroll-anim', 0.3);
  // watcherAnim('[data-counter]', 0.2, countAnimate, false);
});
