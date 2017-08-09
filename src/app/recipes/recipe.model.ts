// a blueprint for objects we create
export class Recipe {
    // public because want to access outside of instatiating this
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, desc: string, imagePath: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}
