import {TRUE,FALSE} from '../action/type';
const initContinue =[{id:0,value:true},
                     {id:1,value:false},
                     {id:2,value:false},
                     {id:3,value:false}]
const Continuereducer= (state =initContinue , action) => {
  switch (action.type) {
    case TRUE:
    return state.map(item=>{
        if(item.id===action.id)
        return{...item,value:true};
        return item;
    })

    case FALSE:
            return state.map(item=>{
                if(item.id===action.id)
                return{...item,value:false};
                return item;
            })

    default:
      return state;
  }
}
export default Continuereducer;