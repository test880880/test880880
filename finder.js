/**
 * @param {(0 | 1)[][]} grid
 * @param {{x: number, y: number}} start
 * @param {{x: number, y: number}} end
 * @param {{diagonal?: boolean, maxIterations?: number, sync?: boolean}?} options
 * @returns {{best: {x: number, y: number}[] | null, worst: {x: number, y: number}[] | null, all: {x: number, y: number}[][], grid: (0 | 1)[][], start: {x: number, y: number}, end: {x: number, y: number}}}
 */
function search(grid, start, end, options) {
    options = options || {};
    const diagonal = !!options.diagonal;
    const maxIterations = options.maxIterations || 5096;
    const sync = Object.keys(options).includes("sync") ? options.sync : true;
    let iterations = 0;
    const pathList = [];

    /**
     * @param {number} x
     * @param {number} y
     * @param {{x: number, y: number}[]} back
     * @param {boolean} main
     */
    function f(x, y, back = [], main = false) {
        back = JSON.parse(JSON.stringify(back));
        if (x === 3 && y === 3 && back.length === 2) console.log("c", back, pathList)
        if (back.length > 1 && pathList.some(i => JSON.stringify(i).startsWith(JSON.stringify(back).replace("]", "")))) return;
        if (!grid[y] || !grid[y][x] || back.some(b => b.x === x && b.y === y)) return;
        if (iterations++ > maxIterations) return;
        if (end.x === x && end.y === y) return pathList.push([...back, {x, y}]);
        const poses = [[0, 1], [1, 0], [0, -1], [-1, 0], ...(diagonal ? [[1, 1], [-1, 1], [1, -1], [-1, -1]] : [])];
        for (let i = 0; i < poses.length; i++) {
            const pos = poses[i];
            if (x + pos[0] === 3 && y + pos[y] === 3) console.log("s")
            f(x + pos[0], y + pos[1], [...back, {x, y}]);
        }
    }

    f(start.x, start.y, [], true);
    return {
        best: pathList.sort((a, b) => a.length - b.length)[0],
        worst: pathList.sort((a, b) => b.length - a.length)[0],
        all: pathList,
        grid,
        start,
        end
    };
}