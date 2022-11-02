// import {Authenticator} from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify';

import {withAuthenticator} from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

function PremiumPage2({ signOut }) {
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

export default withAuthenticator(PremiumPage2);