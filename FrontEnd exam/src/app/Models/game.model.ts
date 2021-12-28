export class Game {
    constructor(public playerName: string,
        public date: Date,
        public score: number) {
            this.playerName = playerName;
            this.date = date;
            this.score = score;
        }
}