// import {Authenticator} from '@aws-amplify/ui-react'

import {withAuthenticator} from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

function PremiumPage({ signOut }) {
    return (
      <>
        <h1>Hello World</h1>
        <button onClick={signOut}>Sign out</button>
      </>
    );
  }



// const PremiumPage = () => {
//     return (
//         <Authenticator>
//             {( {signOut} ) => (
//                 <div>
//                     <h1>Hello World</h1>
//                     <button onClick={signOut}> Sign out</button>
//                 </div>
//             )}
            
//         </Authenticator>
//     )
// }

export default withAuthenticator(PremiumPage);