// import React , {useReduce}from "react";
//
//
// const initialValue = {
//
//
// }
//
//
// function formReduce(state,action)
// {
//      switch(state.type)
//      {
//       case "UPDATE_FILED":
//             return {...state , [action.field] : action.value}
//      }
// }
//
//
//
//
// export default FormReducer()
// {
//
//   function handleInput(e)
//   {
//     const {name ,email} = e.target
//     dispatch
//   }
//
//
//   function handleSubmit(e)
//   {
//     e.preventDefault();
//
//   }
//
//    const [state , dispatch] = useReduce(formReduce , initialValue)
//    return (
//       <form onSubmit={handleSubmit}>
//             <div>
//                <label>name : </label>
//                <input type="text" placeholder="enter name .." value={state.name} onChange={handleInput}/>
//             </div>
//
//              <div>
//                  <label>email :</label>
//                  <input type="text" placeholder="enter email .." value={state.email} onChange={handleInput} />
//              </div>
//
//              <div>
//                 <label>age : </label>
//                 <input type="text" placeholder="enter age .." value={state.age} onChange={handleInput}/>
//              </div>
//
//              <button type="submit">submit</button>
//
//       ></form>
//    )
// }