export class InvalidInputError extends Error {
  constructor(message: string) {
    super();
    this.message = message || "Invalid Input";
  }
}

type Direction = "north" | "east" | "south" | "west";
type Coordinates = [number, number];

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
    if (! this.isValidDirection(direction)) {
      throw new InvalidInputError("Invalid coordinates");
    }

    this.coords = [x, y];
    this.direction = direction;
  }

  evaluate(instructions: string) {
    throw new Error("Remove this statement and implement this function");
  }

  private isValidDirection(value: any): value is Direction {
    return ['north', 'east', 'south', 'west'].includes(value);
  }
}
