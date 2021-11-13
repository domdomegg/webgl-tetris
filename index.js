const BOARD_HEIGHT = 23;
const BOARD_WIDTH = 10;

const randomColor = () => {
    const h = 360 * Math.random();
    const s = 0.8 + 0.2 * Math.random();
    const l = 0.65 + 0.1 * Math.random();

    let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs((h / 60) % 2 - 1)),
        m = l - c / 2,
        r = 0,
        g = 0,
        b = 0;

    if (0 <= h && h < 60) {
        r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
        r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
        r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
        r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
        r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
        r = c; g = 0; b = x;
    }
    r = (r + m);
    g = (g + m);
    b = (b + m);

    return [r, g, b]
}


const L1g = (shape) => [
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 2 },
];
const L1r = (shape) => { shape.getCoordinates = L2g; shape.rotate = L2r; return shape; };

const L2g = (shape) => [
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x + 2, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 1 },
];
const L2r = (shape) => { shape.getCoordinates = L3g; shape.rotate = L3r; return shape; };

const L3g = (shape) => [
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y - 2 },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 2 },
];
const L3r = (shape) => { shape.getCoordinates = L4g; shape.rotate = L4r; return shape; };

const L4g = (shape) => [
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 2, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 2, y: shape.bottomLeft.y - 1 },
];
const L4r = (shape) => { shape.getCoordinates = L1g; shape.rotate = L1r; return shape; };

const R1g = (shape) => [
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y - 2 },
];
const R1r = (shape) => { shape.getCoordinates = R2g; shape.rotate = R2r; return shape; };

const R2g = (shape) => [
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 2, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y },
];
const R2r = (shape) => { shape.getCoordinates = R3g; shape.rotate = R3r; return shape; };

const R3g = (shape) => [
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y - 2 },
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 2 },
];
const R3r = (shape) => { shape.getCoordinates = R4g; shape.rotate = R4r; return shape; };

const R4g = (shape) => [
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x + 2, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 2, y: shape.bottomLeft.y - 1 },
];
const R4r = (shape) => { shape.getCoordinates = R1g; shape.rotate = R1r; return shape; };

const Og = (shape) => [
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y - 1 },
];
const Or = (shape) => { return shape; };

const I1g = (shape) => [
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 2 },
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 3 },
];
const I1r = (shape) => { shape.getCoordinates = I2g; shape.rotate = I2r; return shape; };

const I2g = (shape) => [
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 2, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 3, y: shape.bottomLeft.y },
];
const I2r = (shape) => { shape.getCoordinates = I1g; shape.rotate = I1r; return shape; };

// S, Z, T

const S1g = (shape) => [
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x + 2, y: shape.bottomLeft.y - 1 },
];
const S1r = (shape) => { shape.getCoordinates = S2g; shape.rotate = S2r; return shape; };

const S2g = (shape) => [
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 2 },
];
const S2r = (shape) => { shape.getCoordinates = S1g; shape.rotate = S1r; return shape; };

const Z1g = (shape) => [
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 2, y: shape.bottomLeft.y },
];
const Z1r = (shape) => { shape.getCoordinates = Z2g; shape.rotate = Z2r; return shape; };

const Z2g = (shape) => [
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y - 2 },
];
const Z2r = (shape) => { shape.getCoordinates = Z1g; shape.rotate = Z1r; return shape; };

const T1g = (shape) => [
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 2, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y - 1 },
];
const T1r = (shape) => { shape.getCoordinates = T2g; shape.rotate = T2r; return shape; };

const T2g = (shape) => [
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 2},
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y - 1 },
];
const T2r = (shape) => { shape.getCoordinates = T3g; shape.rotate = T3r; return shape; };

const T3g = (shape) => [
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x + 2, y: shape.bottomLeft.y - 1},
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y },
];
const T3r = (shape) => { shape.getCoordinates = T4g; shape.rotate = T4r; return shape; };

const T4g = (shape) => [
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y - 2 },
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 1 },
];
const T4r = (shape) => { shape.getCoordinates = T1g; shape.rotate = T1r; return shape; };


const shapeFunctions = [
    { getCoordinates: L1g, rotate: L1r },
    { getCoordinates: R1g, rotate: R1r },
    { getCoordinates: Og, rotate: Or },
    { getCoordinates: I1g, rotate: I1r },
    { getCoordinates: S1g, rotate: S1r },
    { getCoordinates: Z1g, rotate: Z1r },
    { getCoordinates: T1g, rotate: T1r },
]

const newShape = () => {
    const { getCoordinates, rotate } = shapeFunctions[Math.floor(Math.random() * shapeFunctions.length)];

    return {
        bottomLeft: { x: 4, y: 3 },
        color: randomColor(),
        getCoordinates,
        rotate,
    }
}

const mod = (x, board = gameState.board) => ((x % board[0].length) + board[0].length) % board[0].length;

const draw = (board, coordinates, color) => {
    for (const coordinate of coordinates) {
        if (color && board[coordinate.y][mod(coordinate.x)]) {
            // throw new Error('Tried to draw shape where already present!')
        }
        board[coordinate.y][mod(coordinate.x)] = color;
    }
}

const drawShape = (board, shape, color) => draw(board, shape.getCoordinates(shape), color);

const collides = (board, shape) => {
    if (shape.bottomLeft.y >= board.length) {
        return true;
    }

    const coords = shape.getCoordinates(shape);
    if (coords.some(({ x, y }) => board[y][mod(x)])) {
        return true;
    }

    return false;
}

var gameState = {
    board: new Array(BOARD_HEIGHT).fill(new Array(BOARD_WIDTH).fill(undefined)).map(row => row.slice()),
    current: newShape(),
    frameNumber: 0,
    ended: false
}
const gameLoop = () => {
    if (gameState.ended) return;

    // Erase shape from last frame
    drawShape(gameState.board, gameState.current, undefined);

    // If we moved down a square, would we collide?
    gameState.current.bottomLeft.y++;
    if (collides(gameState.board, gameState.current)) {
        gameState.current.bottomLeft.y--;
        drawShape(gameState.board, gameState.current, gameState.current.color);
        gameState.current = newShape();

        // We have any complete rows
        if (gameState.board.filter(row => row.every(sq => sq !== undefined)).length > 0) {
            // Remove any complete rows
            gameState.board = gameState.board.filter(row => row.some(sq => sq === undefined))
            // Insert new rows as necessary
            gameState.board = new Array(BOARD_HEIGHT - gameState.board.length).fill(new Array(BOARD_WIDTH).fill(undefined)).map(row => row.slice()).concat(gameState.board);
        }

        if (collides(gameState.board, gameState.current)) {
            gameState.ended = true;
            gameState.frameNumber++;
            if (gameState.onFrame) gameState.onFrame(gameState.frameNumber)
            return;
        }
    }

    // Draw shape
    drawShape(gameState.board, gameState.current, gameState.current.color);

    gameState.frameNumber++;
    if (gameState.onFrame) gameState.onFrame(gameState.frameNumber)
}

gameLoop();
setInterval(gameLoop, 500);

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        gameState.board = new Array(BOARD_HEIGHT).fill(new Array(BOARD_WIDTH).fill(undefined)).map(row => row.slice());
        gameState.current = newShape();
        gameState.ended = false;
        gameState.frameNumber++;
        if (gameState.onFrame) gameState.onFrame(gameState.frameNumber)
    }
    if (gameState.ended) return;

    if (event.key === 'ArrowRight') {
        event.preventDefault();
        drawShape(gameState.board, gameState.current, undefined);
        gameState.current.bottomLeft.x++;
        if (collides(gameState.board, gameState.current)) {
            gameState.current.bottomLeft.x--;
        }
        drawShape(gameState.board, gameState.current, gameState.current.color);
    }
    if (event.key === 'ArrowLeft') {
        event.preventDefault();
        drawShape(gameState.board, gameState.current, undefined);
        gameState.current.bottomLeft.x--;
        if (collides(gameState.board, gameState.current)) {
            gameState.current.bottomLeft.x++;
        }
        drawShape(gameState.board, gameState.current, gameState.current.color);
    }
    if (event.key === 'ArrowUp') {
        event.preventDefault();
        drawShape(gameState.board, gameState.current, undefined);
        gameState.current.rotate(gameState.current);
        if (collides(gameState.board, gameState.current)) {
            gameState.current.rotate(gameState.current);
            gameState.current.rotate(gameState.current);
            gameState.current.rotate(gameState.current);
        }
        drawShape(gameState.board, gameState.current, gameState.current.color);
    }
    if (event.key === 'ArrowDown') {
        event.preventDefault();
        gameLoop();
    }
    gameState.frameNumber++;
    if (gameState.onFrame) gameState.onFrame(gameState.frameNumber)
});

var colorLoc;
const main = () => {
    /** @type {HTMLCanvasElement} */
    const canvas = document.getElementById('glCanvas');
    const gl = canvas.getContext('webgl');

    gl.viewport(0, 0, canvas.width, canvas.height);

    const vertShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertShader, 'attribute vec3 p;void main(void){gl_Position=vec4(p, 1.0);}');
    gl.compileShader(vertShader);

    const fragShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragShader, 'precision mediump float;uniform vec3 c;void main(void){gl_FragColor=vec4(c, 1.0);}');
    gl.compileShader(fragShader);
    const prog = gl.createProgram();
    gl.attachShader(prog, vertShader);
    gl.attachShader(prog, fragShader);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const vertexBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuf);

    const coordsLoc = gl.getAttribLocation(prog, 'p');
    gl.vertexAttribPointer(coordsLoc, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coordsLoc);

    colorLoc = gl.getUniformLocation(prog, 'c');

    gameState.onFrame = () => render(gl);
}

/**
 * @param {WebGLRenderingContext} gl
 */
const render = (gl) => {
    gl.clearColor(0.1, 0.1, 0.1, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    for (let row = 0; row < gameState.board.length; row++) {
        for (let col = 0; col < gameState.board[row].length; col++) {
            if (gameState.board[row][col]) square(gl, gameState.board[row][col], getWebGLSquare({ x: col, y: row }));
        }
    }
}

/**
 * @param {{ x: number, y: number }} indexes 
 */
const getWebGLSquare = (indexes) => {
    const squareWidth = 2 / BOARD_WIDTH;
    const squareHeight = 2 / BOARD_HEIGHT;

    return {
        x1: (squareWidth * indexes.x) - 1,
        y1: -((squareHeight * indexes.y) - 1),
        x2: (squareWidth * (indexes.x + 1)) - 1,
        y2: -((squareHeight * (indexes.y + 1)) - 1),
    }
}

/**
 * @param {WebGLRenderingContext} gl
 * @param {number[]} color
 * @param {{ x1: number, y1: number, x2: number, y2: number }} coords
 */
const square = (gl, color, coords) => {
    gl.uniform3fv(colorLoc, color);

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        coords.x1, coords.y1, 0.0,
        coords.x2, coords.y1, 0.0,
        coords.x1, coords.y2, 0.0,
    ]), gl.STATIC_DRAW);

    gl.drawArrays(gl.TRIANGLES, 0, 3);

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        coords.x2, coords.y2, 0.0,
        coords.x2, coords.y1, 0.0,
        coords.x1, coords.y2, 0.0
    ]), gl.STATIC_DRAW);
    gl.drawArrays(gl.TRIANGLES, 0, 3);

}

main();