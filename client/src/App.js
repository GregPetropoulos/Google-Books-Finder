import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from'./components/Nav';
import Books from './pages/Books';
import Search from './pages/Search';
import NotFound from './pages/NotFound';



function App () {
  return(
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route exact path='/' component={Books}/>
          <Route exact path ='/books' component={Books}/>
          <Route exact path='/search/' component={Search}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}
export default App;










































// -------------------------------------
// import axios from 'axios';
// import React, { useEffect } from 'react';
// import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
// import Navbar from './components/navbar';
// import Home from './pages/home';
// import Login from './pages/login';
// import Signup from './pages/signUp';
// import { LOADING, SET_USER, UNSET_USER } from './store/actions';
// import { useStoreContext } from './store/store';

// const App = () => {
//   const history = useHistory();
//   const [state, dispatch] = useStoreContext();

//   useEffect(() => {
//     dispatch({ type: LOADING });

//     axios.get('/api/users').then((response) => {
//       if (response.data.user) {
//         dispatch({ type: SET_USER, user: response.data.user });
//         history.push('/');
//       } else {
//         dispatch({ type: UNSET_USER });
//         history.push('/login');
//       }
//     });
//   }, [dispatch, history]);

//   return (
//     <div>
//       <Navbar />

//       {state.user ? (
//         <Switch>
//           <Route exact path="/" component={Home} />
//         </Switch>
//       ) : (
//         <Switch>
//           <Route exact path="/login" component={Login} />
//           <Route exact path="/signup" component={Signup} />
//           <Redirect to="/login" />
//         </Switch>
//       )}
//     </div>
//   );
// };

// export default App;
