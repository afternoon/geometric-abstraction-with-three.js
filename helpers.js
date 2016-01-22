"use strict";

var randomInRange = function (min, max) {
  return Math.random() * (max - min) + min;
}

var randomLocation = function (minX, maxX, minY, maxY) {
  return {
    x: randomInRange(minX, maxX),
    y: randomInRange(minY, maxY),
    z: 0
  };
}

var randomLocationInScene = function function_name() {
  return randomLocation(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2);
};

var randomPick = function (items) {
  var i = Math.floor(Math.random() * (items.length - 1));
  return items[i];
};

var range = function (start, count) {
  return Array.apply(0, Array(count)).map(function (el, i) {
    return i + start;
  });
}

var mesh = function (origin, geometry, colour) {
  var material = new THREE.MeshBasicMaterial({color: colour});
  var mesh = new THREE.Mesh(geometry, material);
  mesh.translateX(origin.x);
  mesh.translateY(origin.y);
  mesh.translateZ(origin.z);
  return mesh;
};

var box = function (origin, size, colour) {
  var geometry = new THREE.BoxGeometry(size, size, size);
  return mesh(origin, geometry, colour);
};

var rect = function (origin, w, h, colour) {
  var geometry = new THREE.BoxGeometry(w, h, 1);
  return mesh(origin, geometry, colour);
};

var circle = function (origin, size, colour) {
  var geometry = new THREE.CircleGeometry(size, 256);
  return mesh(origin, geometry, colour);
};

var line = function (points, colour) {
  var pv,
      geometry = new THREE.Geometry();
  points.forEach(function (p) {
    pv = new THREE.Vector3(p.x, p.y, p.z);
    geometry.vertices.push(pv);
  });

  var material = new THREE.LineBasicMaterial({
    color: colour,
    linewidth: 10
  });

  return new THREE.Line(geometry, material);
};

var distance = function (x1, y1, x2, y2) {
  return Math.hypot(x2 - x1, y2 - y1);
};

var overlapsCircle = function (circle1, circle2) {
  var combinedRadii = circle1.geometry.parameters.radius + circle2.geometry.parameters.radius,
      d = distance(circle1.position.x, circle1.position.y, circle2.position.x, circle2.position.y);
  if (d < combinedRadii) return true;
  else return false;
};

var overlapsCircles = function (circle, otherCircles) {
  return otherCircles.some(function (otherCircle) {
    return overlapsCircle(circle, otherCircle);
  });
};
