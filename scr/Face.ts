import { Color, Position } from "./Enumerations";

export class Face3x3 { 

    private _dimension: number;
    public get dimension(): number {
        return this._dimension;
    }
    public set dimension(value: number) {
        this._dimension = value;
    }
    private _face: Color[][];
    public get face(): Color[][] {
        return this._face;
    }
    public set face(value: Color[][]) {
        if (!value) {
            throw new Error("Face is required");
        }
        this._face = value;
    }
    private _adjacentFaces: Map<Position, Face3x3>;
    public get adjacentFaces(): Map<Position, Face3x3> {
        return this._adjacentFaces;
    }
    public set adjacentFaces(value: Map<Position, Face3x3>) {
        this._adjacentFaces = value;
    }
    private _positionAdjacentFaces: Map<Position, Position>;
    public get positionAdjacentFaces(): Map<Position, Position> {
        return this._positionAdjacentFaces;
    }
    public set positionAdjacentFaces(value: Map<Position, Position>) {
        this._positionAdjacentFaces = value;
    }

    constructor(color: Color) {
        if (!color) {
            throw new Error("Color is required");
        }
        this.dimension = 3;
        this.face = []
        this.adjacentFaces = new Map();
        this.positionAdjacentFaces = new Map();

        for (let i = 0; i < this.dimension; i++) {
            for (let j = 0; j < this.dimension; j++) {
                this.face[i][j] = color;
            }
        }
    }

}