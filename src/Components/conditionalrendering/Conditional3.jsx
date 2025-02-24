import React from 'react'
import "./conditional3.css"
function Conditional3() {
    const isLoggedIn = true;
    const hasContent = true;
    // let content;

    // if (isLoggedIn) {
    //     if (hasContent) {
    //         content = <h1>Thanks for visiting again</h1>;
    //     } else {
    //         content = <h1>Please reload to visit!</h1>;
    //     }
    // } else {
    //     content = <button>Login</button>;
    // }

  return (
    <div>
          {isLoggedIn ? (
                hasContent ? (
                    <h1>Thanks for visiting again!</h1>
                ) : (
                    <h1>Please reload to visit!</h1>
                )
            ) : (
                <button>Login</button>
            )}

            {/* {content} */}
    </div>
  )
}

export default Conditional3
