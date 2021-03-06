import { Repeat } from 'immutable';
import { BLOCK_SIZE, FIELD_BLOCK_SIZE, N_MAP } from 'utils/consts';
import { EagleRecord, MapRecord } from 'types';

function parseBrickBits(str: string) {
  if (str.length === 1) {
    const short = parseInt(str, 16);
    let long = 0;
    if (0b0001 & short) {
      long += 0xf000;
    }
    if (0b0010 & short) {
      long += 0x0f00;
    }
    if (0b0100 & short) {
      long += 0x00f0;
    }
    if (0b1000 & short) {
      long += 0x000f;
    }
    return long;
  } else if (str.length === 4) {
    return parseInt(str, 16);
  }
}

// empty XX
// brick  B<n>
// river  R
// snow   S
// forest F
// steel  T<n>
// eagle  E
export default function parseStageMap(map: StageConfig['map']) {
  const bricks = new Set<number>();
  const steels = new Set<number>();
  const rivers = new Set<number>();
  const snows = new Set<number>();
  const forests = new Set<number>();
  let eaglePos: Point = null;
  for (let row = 0; row < FIELD_BLOCK_SIZE; row += 1) {
    const line = map[row].toLowerCase().split(/ +/);
    for (let col = 0; col < FIELD_BLOCK_SIZE; col += 1) {
      const item = line[col].trim();
      if (item[0] === 'b') {
        // brick
        const bits = parseBrickBits(item.substring(1));
        const rowrow = 4 * row;
        const colcol = 4 * col;
        const N = 52;

        const part0 = (bits >> 12) & 0xf;
        part0 & 0b0001 && bricks.add(rowrow * N + colcol + 0);
        part0 & 0b0010 && bricks.add(rowrow * N + colcol + 1);
        part0 & 0b0100 && bricks.add(rowrow * N + colcol + N);
        part0 & 0b1000 && bricks.add(rowrow * N + colcol + N + 1);

        const part1 = (bits >> 8) & 0xf;
        part1 & 0b0001 && bricks.add(rowrow * N + colcol + 2 + 0);
        part1 & 0b0010 && bricks.add(rowrow * N + colcol + 2 + 1);
        part1 & 0b0100 && bricks.add(rowrow * N + colcol + 2 + N);
        part1 & 0b1000 && bricks.add(rowrow * N + colcol + 2 + N + 1);

        const part2 = (bits >> 4) & 0xf;
        part2 & 0b0001 && bricks.add((rowrow + 2) * N + colcol + 0);
        part2 & 0b0010 && bricks.add((rowrow + 2) * N + colcol + 1);
        part2 & 0b0100 && bricks.add((rowrow + 2) * N + colcol + N);
        part2 & 0b1000 && bricks.add((rowrow + 2) * N + colcol + N + 1);

        const part3 = (bits >> 0) & 0xf;
        part3 & 0b0001 && bricks.add((rowrow + 2) * N + colcol + 2 + 0);
        part3 & 0b0010 && bricks.add((rowrow + 2) * N + colcol + 2 + 1);
        part3 & 0b0100 && bricks.add((rowrow + 2) * N + colcol + 2 + N);
        part3 & 0b1000 && bricks.add((rowrow + 2) * N + colcol + 2 + N + 1);
      } else if (item[0] === 't') {
        const bits = parseInt(item[1], 16);
        // console.assert(0 < bits && bits < 16)
        if (bits & 0b0001) {
          steels.add(2 * row * 26 + 2 * col);
        }
        if (bits & 0b0010) {
          steels.add(2 * row * 26 + 2 * col + 1);
        }
        if (bits & 0b0100) {
          steels.add((2 * row + 1) * 26 + 2 * col);
        }
        if (bits & 0b1000) {
          steels.add((2 * row + 1) * 26 + 2 * col + 1);
        }
      } else if (item[0] === 'r') {
        rivers.add(row * FIELD_BLOCK_SIZE + col);
      } else if (item[0] === 'f') {
        forests.add(row * FIELD_BLOCK_SIZE + col);
      } else if (item[0] === 's') {
        snows.add(row * FIELD_BLOCK_SIZE + col);
      } else if (item[0] === 'e') {
        if (eaglePos != null) {
          throw new Error('Eagle appears more than once');
        } else {
          eaglePos = {
            x: col * BLOCK_SIZE,
            y: row * BLOCK_SIZE
          };
        }
      } else if (item[0] !== 'x') {
        throw new Error('Invalid map');
      }
    }
  }

  return MapRecord({
    eagle: eaglePos
      ? EagleRecord({
          x: eaglePos.x,
          y: eaglePos.y,
          broken: false
        })
      : null,
    bricks: Repeat(false, N_MAP.BRICK ** 2)
      .map((set, index) => bricks.has(index))
      .toList(),
    steels: Repeat(false, N_MAP.STEEL ** 2)
      .map((set, index) => steels.has(index))
      .toList(),
    rivers: Repeat(false, N_MAP.RIVER ** 2)
      .map((set, index) => rivers.has(index))
      .toList(),
    snows: Repeat(false, N_MAP.SNOW ** 2)
      .map((set, index) => snows.has(index))
      .toList(),
    forests: Repeat(false, N_MAP.FOREST ** 2)
      .map((set, index) => forests.has(index))
      .toList()
  });
}
