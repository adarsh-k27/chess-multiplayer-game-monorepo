import { Messages } from "../messages";
import { SocketManager } from "../socket/SocketManager";
import { Game } from "./Game";
import { User } from "./User";

export class GameManagement {
    public games: Game[] = []
    public users: User[] = []
    public pendingGameId: string | null = null

    constructor() {
        this.games = [];
        this.users = [];
        this.pendingGameId = null;
    }
    //what we need to do next

    addUser(user: User) {
        //here we will add users in users array with pendingUser as null 
        this.users.push(user);
        this.addHandler(user)
    }

    addHandler(user: User) {
        user.socket.on("message", async(payload) => {
            const message = JSON.parse(payload.toString())

            switch (message.type) {
                case Messages.INIT_GAME: {
                    if (this.pendingGameId) {
                        //we need to find the game from gamesArray then we will get the user1 and all details
                        const game = this.games.find((game_data: Game) => game_data.gameId === this.pendingGameId)
                        
                        if (!game) {
                            return "NO PENDING GAME AVAILABLE"
                        }
                        if (game.player1UserId == user.userId) {
                            const message=JSON.stringify({
                                type:Messages.SELF_ALERT
                            })
                            SocketManager.getInstance().broadcast(game.gameId,message)
                            user.socket.send(message)
                            return "You are Trying to play with Your self "
                        }

                        // we need to update the second user in Game 
                        const message=JSON.stringify({
                            type:Messages.JOIN_GAME
                        })
                        SocketManager.getInstance().addUser(user,game.gameId)
                        SocketManager.getInstance().broadcast(game.gameId,message)
                        await game.updateSecondPlayer(user)
                        this.pendingGameId=null
                        //start sending messges via broadcast 
                    } else {
                        //we have a first user in game 

                        const game = new Game(user.userId, null)
                        //we need to create a game with gameId 
                        if (game.gameId) {
                            this.pendingGameId = game.gameId
                        }
                        // we need to add to that gamesArray 
                        this.games.push(game)

                        // implement broadcast connection for that user 
                        SocketManager.getInstance().addUser(user, game.gameId)
                        SocketManager.getInstance().broadcast(game.gameId, JSON.stringify({
                            type: JSON.stringify({
                                type: message.GAME_ADDED,
                            }),

                        }))

                    }
                }

                default: {
                  
                }
            }
        })
    }


}