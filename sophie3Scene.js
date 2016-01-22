"use strict";

var sophie3Colours = [
  0x222222,
  0xffee00,
  0x007733,
  0xcc0000,
  0x776655,
  0x002277,
  0x333333
];

/* Reproduce this piece by Sophie Taueber-Arp
 * https://inspirationlab.files.wordpress.com/2012/05/sophie3.jpg
 */
class Sophie3Scene extends Scene {
  backgroundColour() { return 0xeeddaa; }

  createSomeHotSceneElementsToGazeUpon(scene) {
    // place a large rectangle in the centre of the screen
    // place some more large rectangles adjacent to the edges of the previous boxes
    // place some smaller rectangles adjacent to the edges of the previous boxes
    // place some small squares adjacent to the edges of the previous boxes

    var loc = randomLocationInScene(),
        colour = sophie3Colours[0],
        elem = rect([0 - loc.y / 2, 0 - loc.x / 2, 0], loc.y, loc.x, colour),
        sceneElements = [elem];

    // for (var i = 0; i < 20; i++) {
    //   var buddy = randomPick(sceneElements),
    //       side = randomPick(["top", "left", "bottom", "right"]);

      // for the side, 

    //   loc = randomLocation(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2)
    //   size = randomInRange(5, 400);
    //   colour = randomPick(colours);

    //   elem = box(loc, size, colour)
    //   sceneElements.push(elem);
    // }

    return sceneElements;
  }
}
