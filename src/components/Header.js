import {NavLink} from 'react-router-dom';

export function Header(){
return (
    <div>
     <h1>React App</h1>
     <h1>My Mail Box</h1>
     <ul>
      <li><NavLink to="/inbox">Inbox</NavLink></li>
      <li><NavLink to="/sent">Sent </NavLink></li>
     </ul>

    </div>
)
}