import { Game } from './game/game';

const JsonGames = [{
    id: 1,
    naam: 'Stratego',
    minSpelers: 2,
    maxSpelers: 2,
    tags: []
},
{
    id: 2,
    naam: 'Runebound',
    minSpelers: 1,
    maxSpelers: 4,
    tags: []
},
{
    id: 3,
    naam: 'Roll Through The Ages',
    minSpelers: 2,
    maxSpelers: 4,
    tags: []
},
{
    id: 4,
    naam: 'Grand Austria Hotel',
    minSpelers: 2,
    maxSpelers: 4,
    tags: ['dobbelen', 'leuk']
}
];

export const GAMES: Game[] = JsonGames.map(Game.fromJSON);