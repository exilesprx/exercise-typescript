export class InvalidInputError extends Error {
  constructor(message: string) {
    super();
    this.message = message || "Invalid Input";
  }
}

type Direction = "north" | "east" | "south" | "west";
type Coordinates = [number, number];

const movementManual = {
  north: { left: "west", right: "east", advance: [0, 1] },
  east: { left: "north", right: "south", advance: [1, 0] },
  south: { left: "east", right: "west", advance: [0, -1] },
  west: { left: "south", right: "north", advance: [-1, 0] }
};

export class Robot {
  private direction: Direction = "north";
  private coords: Coordinates = [0, 0];

  get bearing(): Direction {
    return this.direction;
  }

  get coordinates(): Coordinates {
    return this.coords;
  }

  place({ x, y, direction }: { x: number; y: number; direction: string }) {
    if (!this.isValidDirection(direction)) {
      throw new InvalidInputError("Invalid coordinates");
    }

    this.coords = [x, y];
    this.direction = direction;
  }

  evaluate(instructions: string) {
    for (const instruction of instructions) {
      switch (instruction) {
        case "L":
          this.turnLeft();
          break;
        case "R":
          this.turnRight();
          break;
        case "A":
          this.advance();
          break;
        default:
          throw new InvalidInputError("Invalid instruction");
      }
    }
  }

  private getAllDirections(): Direction[] {
    return ["north", "east", "south", "west"];
  }

  private isValidDirection(value: any): value is Direction {
    return this.getAllDirections().includes(value);
  }

  private turnLeft(): void {
    this.direction = movementManual[this.direction].left as Direction;
  }

  private turnRight(): void {
    this.direction = movementManual[this.direction].right as Direction;
  }

  private advance(): void {
    const movement = movementManual[this.direction].advance;
    this.coords[0] += movement[0];
    this.coords[1] += movement[1];
  }
}
