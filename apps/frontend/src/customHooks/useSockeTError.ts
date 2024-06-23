import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {  MessageEvent } from 'ws'

 enum ErrorType {
    Error = 'Error',
    NotFoundError = 'NotFoundError',
    ValidationError = 'ValidationError',
    UnknownError = 'UnknownError',
    ForbiddenError = 'ForbiddenError',
  }
  
type SocketMessage = {
    type: ErrorType,
    message: string,
    httpStatusCode: string
}

type WT = typeof window.WebSocket.prototype

export function useSocketError(socket: null | string | boolean | WT) {
    const navigate = useNavigate()
    const [error, setError] = useState<boolean | string>(false)
    
    const handleError = useCallback((errorMessage:string | true) => {
        return new Promise((resolve, reject) => {
          try {
            
              navigate("/login");
            
            setTimeout(() => {
              setError(false);
              resolve(true);
            }, 2000);
            setError(errorMessage);
          } catch (err) {
            reject(err);
          }
        });
      }, [navigate]);
    
    


    useEffect(() => {
        if (socket == null || typeof socket == "boolean" || typeof socket == "string") {
            setError(false)
        } else if (socket.url) {
            socket.onmessage = function (message: any) {
                const actualMessage = convertToActualMessage<SocketMessage>(message)
                if (actualMessage.type === ErrorType.Error) {
                    setError(actualMessage.message)
                }
            }
        }

    }, [socket]);
    return {
        error,
        handleError
    }
}

export function convertToActualMessage<T>(messageEvent: MessageEvent): T {
    return JSON.parse(messageEvent.data.toString())
}



