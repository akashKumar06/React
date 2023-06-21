import React from 'react';
// const Header = (props) => {
//     return React.createElement('header',{},
//         React.createElement('img',{alt: "Medal badge with a star", src:{props.img}}),
//         React.createElement('h1',{},"Key React Concepts"),
//         React.createElement('p',{},"Selected key React concepts you should know about")
//     );
// }
const Header = (props) => {
    return (
        <header>
            <img src={props.image} alt="Medal badge with a star"></img>
            <h1>Key React Concepts</h1>
            <p>Selected key React concepts you should know about</p>
        </header>
    )
}
export default Header