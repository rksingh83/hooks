// component wide  "behind the scenes " state storage
// react context api
import React from "react";
const Context = React.createContext({ useName: "", isLoggedIn: false });
//  return an object contain component(consumer, provider )
/* IF We need this context into whole app the wrap into app through context if 
it need it  into login and its Children then wrap to Login component only
<Context.Provider value = { default sate}>
Component 
</Context.Provider>
*/

/* after wrapping the component we can listen by .consumer or rect hook but mainly we use hook
 */
/*<Context.Consumer>
      {(ctx) =>{
          return (component jsx code where "ctx" is our global state )
      }}
 </Context.Consumer>
 */

/*limitations
     1. React Context is not optimized for high frequency changes(state changes very frequently ) 
     2 . React Context also is not replacement for props

 */
export default Context;
