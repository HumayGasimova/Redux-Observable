import * as actionTypes from '../constants/actionTypes';

export function makePaperclip() {
    return {
        type: actionTypes.MAKE_PAPERCLIP
    }
};

export function startSelling() {
    return { 
        type: actionTypes.START_SELLING
    };
};

export function updateFunds(value) {
    return { 
        type: actionTypes.UPDATE_FUNDS,
        value: value
    };
};

export function updateUnsoldInventory() {
    return { 
        type: actionTypes.UPDATE_UNSOLD_INVENTORY
    };
};



export function sellPaperclips(paperclipsInStock, priceOfPaperclip, funds) {
    return dispatch => {
        dispatch(startSelling());
        dispatch(makePaperclip());
    
        setTimeout(() => {
            let newFunds = funds + priceOfPaperclip;
            dispatch(updateFunds(newFunds));

            dispatch(updateUnsoldInventory());
                
        }, 1000)
     
        dispatch(updateUnsoldInventory());
           

            // if(currentInventory === 0){
            //     clearInterval(a);
            // }
        


    //    let a = setInterval(() => {
    //         let paperclips = paperclipsInStock;
    //         if(paperclipsInStock === 0){
    //             return paperclips = 1;
    //         }
            
    //         let newFunds = funds + priceOfPaperclip;
    //         dispatch(updateFunds(newFunds));

    //         let currentInventory = paperclips - 1;
    //         dispatch(updateUnsoldInventory(currentInventory));
    //         // debugger
    //         if(currentInventory === 0){
    //             // debugger
    //             clearInterval(a);
    //         }
            
    //     }, 1000)
       
    }
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {

        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    };
}
