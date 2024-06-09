import { randomUUID } from "crypto";
import { User } from "./User";
import db from '@repo/db/src/index'
import { Messages } from "../messages";
import { Chess } from "chess.js";
import { SocketManager } from "../socket/SocketManager";

export class Game {
  public gameId: string;
  public player1UserId: string;
  public player2UserId: string | null;
  public board:Chess;
  constructor(player1UserId: string, player2UserId: string | null, gameId?: string | null) {
    this.player1UserId = player1UserId;
    this.player2UserId = player2UserId;
    this.gameId = gameId ? gameId : randomUUID()
    this.board=new Chess()
  }

  async updateSecondPlayer(user: User) {
    this.player2UserId = user.userId;

    const users = await db.user.findMany({
      where: {
        id: {
          in: [Number(this.player1UserId), Number(this.player2UserId) ?? ''],
        },
      },
    });

    //we need to create the game here 
    try {
     const res= await this.createGameInDb()
     if(res.id){
      //emit a socket connection 
      SocketManager.getInstance().broadcast(this.gameId,
        JSON.stringify({
        type: Messages.INIT_GAME,
        payload: {
          gameId: this.gameId,
          whitePlayer: {
            name: users.find((user) => user?.id === +this.player1UserId)?.name,
            id: this.player1UserId,
          },
          blackPlayer: {
            name: users.find((user) => user.id === +this.player2UserId!)?.name,
            id: this.player2UserId,
          },
          fen: this.board.fen(),
          moves: [],
        },
      }))
     }
    } catch (error) {
      console.log("error happend in Game Creation ");
    }

  }

  private async createGameInDb() {
    const createGame = await db.game.create({
      data: {
        id: this.gameId,
        status: "IN_PROGRESS",
        timeControl: "CLASSICAL",
        whitePlayer: {
          connect: {
            id: Number(this.player1UserId)
          }
        },
        blackPlayer: {
          connect: {
            id: Number(this.player2UserId)
          }
        },
        currebtFen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      },
      include: {
        whitePlayer: true,
        blackPlayer: true
      }
    })
    if (createGame.id) {
      this.gameId = createGame.id
    }

    return createGame;
  }


}