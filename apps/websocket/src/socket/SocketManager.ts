import { User } from '../Game/User'
export class SocketManager {
    public gameSockets: Map<string, User[]>;
    public userRoomMapping: Map<string, string>;
    private static instance:SocketManager

    constructor() {
        this.gameSockets = new Map<string, User[]>()
        this.userRoomMapping = new Map<string, string>()
    }

    static getInstance(){
        if(this.instance){
            return this.instance
        }
        this.instance= new SocketManager()
        return this.instance;
    }

    addUser(user: User, roomId: string) {
        this.gameSockets.set(roomId, [
            ...(this.gameSockets.get(roomId) || []),
            user
        ])

        this.userRoomMapping.set(user.userId, roomId)
    }

    broadcast(gameId: string, message: any) {
        const users = this.gameSockets.get(gameId)
        if (!users?.length) {
            return "No users in Room"
        }
        users.forEach((eachUser: User) => {
            eachUser.socket.send(message)
        })
    }

    removeUser(user:User){
        //find roomId from Userid
        const roomId=this.userRoomMapping.get(user.userId)

        if(!roomId) return "Not Connect with any Room Yet"
        const usersInRoom=this.gameSockets.get(roomId)
        const filteredUsers=usersInRoom?.filter((userData:User)=> user.userId !== userData.userId )

        if(filteredUsers?.length){
            this.gameSockets.set(roomId,filteredUsers)
        }else{
           this.gameSockets.delete(roomId) 
        }
        this.userRoomMapping.delete(user.userId)
    }
}