export const GLOBALTYPES = {
    AUTH: 'AUTH', 
    ALERT: 'ALERT', 
    HOTEL: 'HOTEL',  
    STATUS: 'STATUS',
    }
    
    export const DeleteData = (data, id) => {
        const newData = data.filter(item => item._id !== id)
        return newData;
    }

    export const EditData = (data, id, hotel) => {
        const newData = data.map(item => 
            (item._id === id ? hotel : item)
        )
        return newData;
    }
    
