import { randomUUID } from "crypto";
import { User } from "./User";
import db from '@repo/db/src/index'

export class Game {
  public gameId: string;
  public player1UserId: string;
  public player2UserId: string | null;

  constructor(player1UserId: string, player2UserId: string | null, gameId?: string | null) {
    this.player1UserId = player1UserId;
    this.player2UserId = player2UserId;
    this.gameId = gameId ? gameId : randomUUID()
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
      await this.createGameInDb()
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
  }


}