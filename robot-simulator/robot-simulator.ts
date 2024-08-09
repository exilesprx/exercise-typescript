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
    const allDirections = this.getAllDirections();
    let index = allDirections.indexOf(this.direction);
    if (index - 1 < 0) {
      this.direction = allDirections[allDirections.length - 1];
      return;
    }

    this.direction = allDirections[index - 1];
  }

  private turnRight(): void {
    const allDirections = this.getAllDirections();
    let index = allDirections.indexOf(this.direction);
    if (index + 1 >= allDirections.length) {
      this.direction = allDirections[0];
      return;
    }

    this.direction = allDirections[index + 1];
  }
}
