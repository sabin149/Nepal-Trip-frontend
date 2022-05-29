export const GLOBALTYPES = {
    AUTH: 'AUTH', 
    ALERT: 'ALERT', 
    HOTEL: 'HOTEL',  
    }
    
    export const DeleteData = (data, id) => {
        const newData = data.filter(item => item._id !== id)
        return newData;
    }
    export const PatchData = (data, id) => {
        const newData = data.filter(item => item._id !== id)
        return newData;
    }

    export const EditData = (data, id, post) => {
        const newData = data.map(item => 
            (item._id === id ? post : item)
        )
        return newData;
    }
    
