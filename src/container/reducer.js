export default function reducer(state,action ) {
    switch (action.type) {
        case 'ADD':
        console.log('got it add ');
        
            return {data:"cool man"} ;
            break;
        case "MY_THUNK":
         console.log('got the request');
         console.log(action.payload);
         
         return {data:action.payload.title};
         break;
        
    
        default:
        return {data:'this is default'};
            break;
    } 
}