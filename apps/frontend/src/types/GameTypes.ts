import { Chess } from "chess.js"

type payloadType = {
    gameId?: string,
    whitePlayer?: {
       name: string,
       id: number,
    },
    blackPlayer?: {
       name: string,
       id: number,
    },
    fen: string,
       moves: Array<string>,
 }

 export type PayloadT = {
    type: string,
    message: string,
    payload:payloadType
 }

 export enum GameStatusT {
    NOT_CREATED = "NOT_CREATED",
    CREATED = "CREATED",
    STARTED = "STARTED",
    JOINED = "JOINED",
    ENDED = "ENDED",
    PAUSED = "PAUSED",
    ERROR = "ERROR"
 }

 export type GAME_META_TYPE={
    whitePlayer: {
        name: string,
        id: number,
     },
     blackPlayer: {
        name: string,
        id: number,
     },
 }


 export type PLAYER_INDICATOR_T_PROPS={
    chess:Chess;
    Metadata:GAME_META_TYPE
 }