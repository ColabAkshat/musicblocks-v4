import * as sketchP5 from './sketchP5';
import { updatePosition, updateHeading } from './view/sprite';

import { radToDeg } from './utils';

// -- private variables ----------------------------------------------------------------------------

/** Sprite state parameters. */
const _stateObj = {
    position: {
        x: 0,
        y: 0,
    },
    heading: 90,
};

/** Proxy to the sprite state parameters. */
const _state = new Proxy(_stateObj, {
    set: (_, key, value) => {
        if (key === 'position') {
            _stateObj.position = value;
            updatePosition(value.x, value.y);
        } else if (key === 'heading') {
            _stateObj.heading = value;
            updateHeading(value);
        }
        return true;
    },
});

// -- public variables -----------------------------------------------------------------------------

/** Artboard canvas object. */
export const sketch = sketchP5;

// -- private functions ----------------------------------------------------------------------------

/**
 * Moves the sprite forward (positive distance) or backward (negative distance).
 * @param distance - distance to move
 */
function move(distance: number): void {
    const [x1, y1, x2, y2] = [
        _state.position.x,
        _state.position.y,
        _state.position.x + distance * Math.cos(radToDeg(_state.heading)),
        _state.position.y + distance * Math.sin(radToDeg(_state.heading)),
    ];

    _state.position = { x: x2, y: y2 };

    sketch.drawLine(x1, y1, x2, y2);
}

/**
 * Turns the head of the sprite right (positive angle) or left (negative angle).
 * @param angle - delta angle
 */
function turn(angle: number): void {
    _state.heading += angle;
}

// -- public functions -----------------------------------------------------------------------------

/**
 * Moves the sprite forward
 * @param distance - distance to move
 */
export function moveForward(distance: number): void {
    move(distance);
}

/**
 * Moves the sprite backward
 * @param distance - distance to move
 */
export function moveBackward(distance: number): void {
    move(-distance);
}

/**
 * Turns the head of the sprite right.
 * @param angle - delta angle
 */
export function turnRight(angle: number): void {
    turn(angle);
}

/**
 * Turns the head of the sprite left.
 * @param angle - delta angle
 */
export function turnleft(angle: number): void {
    turn(-angle);
}

export function setup(container: HTMLElement): void {
    sketch.setup(container);
}

export function reset(): void {
    _state.position = { x: 0, y: 0 };
    _state.heading = 90;

    sketch.clear();
}

export function run(): void {
    reset();

    window.dispatchEvent(new Event('runevent'));

    // _sketch.setBackground(127);
    // _sketch.setBackground(255, 255, 0);
    // _sketch.setThickness(4);
    // _sketch.setColor(255, 0, 0);

    // setTimeout(() => moveForward(200), 0);
    // setTimeout(() => turnRight(90), 500);
    // setTimeout(() => moveBackward(400), 1000);
    // setTimeout(() => turnleft(270), 1500);
    // setTimeout(() => moveForward(200), 2000);
}
