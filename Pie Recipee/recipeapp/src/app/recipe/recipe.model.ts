export class Recipe {
    constructor(
        private _name: string,
        private _ingredients = new Array<string>(),
        private _dateAdded = new Date()
    ) { }

    static fromJSON(json: any): Recipe {
        const rec = new Recipe(json.name, json.ingredients, json.dateAdded);
        return rec;
    }
    // [...] other getters
    get name(): string {
        return this._name;
    }

    addIngredient(name: string, amount?: number, unit?: string) {
        this._ingredients.push(`${amount || 1} ${unit || ''} ${name}`);
    }
}