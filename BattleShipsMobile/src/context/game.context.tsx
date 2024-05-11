import { createContext, useState } from "react";

const GameContext = createContext({});

function GameProvider(props) {
    //const [game, setGame] = useState<GameType | null>(null)
    const joinGame = async (gameId: number) => {
        
    }
}

export { GameContext }
export default GameProvider