export class Player {
    constructor(public name: string,
        public currentScores: number,
        public scoresHistory: number[],
        public isOnGame: boolean,
        public bestScore: number) {
        this.name = name;
        this.currentScores = currentScores;
        this.scoresHistory = scoresHistory;
        this.isOnGame = isOnGame;
        this.bestScore = bestScore;
    }
}