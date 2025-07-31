import { get, onValue, ref, set } from "firebase/database";
import { database } from "../config/firebaseConfig";

export const DBFunctions = {
    getValue: (ubication) => {
        return get(ref(database, `${ubication}`))
    },
    // Initialize
    startTimer: (id, value) => {
        console.log(id, value)
        try {
            set(ref(database, `${id}`), { startTime: value })
            console.log("llego!")
            set(ref(database, `${id}/lastStatus`), { status: 1, timestamp: value, progress: 0 })
        } catch (err) { console.log(err) }
    },
    // Momento de inicio (ms)
    setStartTime: (id, value) => {
        set(ref(database, `${id}/startTime`, value))
    },
    // Progreso (ms)
    setProgress: (id, value) => {
        set(ref(database, `${id}/lastStatus/progress`), value)
    },
    // Timestamp (Unix)
    setTimestamp: (id, value) => {
        set(ref(database, `${id}/lastStatus/timestamp`), value)
    },
    setStatus: (id, value) => {
        set(ref(database, `${id}/lastStatus/status`), value)
    },
    // Status (0 Pausado | 1 En progreso | 2 Finalizado)
    changeStatus: (id, status, timestamp, progress) => {
        try {
            set(ref(database,`${id}/lastStatus`),{progress,timestamp,status})
            /*set(ref(database, `${id}/lastStatus/progress`), progress)
            set(ref(database, `${id}/lastStatus/timestamp`), timestamp)
            set(ref(database, `${id}/lastStatus/status`), status)*/
        } catch (err) {
            console.log(err)
        }
        /*
        Can't access undefined 
        this.setStatus(id,status)
        this.setTimestamp(id,timestamp)
        this.setProgress(id,progress)
        */
    },


}



