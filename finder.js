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
    const maxIterations = options.maxIterations || 256;
    const sync = Object.keys(options).includes("sync") ? options.sync : true;
    let iterations = 0;
    const pathList = [];

    /**
     * @param {number} x
     * @param {number} y
     * @param {{x: number, y: number}[]} back
     * @param {boolean} main
     * @returns {{x: number, y: number}[] | null}
     */
    function f(x, y, back = [], main = false) {
        back = JSON.parse(JSON.stringify(back));
        if (!grid[y] || !grid[y][x] || back.some(b => b.x === x && b.y === y)) return null;
        if (iterations++ > maxIterations) return null;
        let res = [];
        if (end.x === x && end.y === y) {
            pathList.push([...back, {x, y}]);
            return null;
        }
        const poses = [[0, 1], [1, 0], [0, -1], [-1, 0], ...(diagonal ? [[1, 1], [-1, 1], [1, -1], [-1, -1]] : [])];
        for (let i = 0; i < poses.length; i++) {
            const pos = poses[i];
            const r = f(x + pos[0], y + pos[1], [...back, {x, y}]);
            if (r) res.push(...r);
        }
        if (res.length > 0) console.log(res)
        return res;
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