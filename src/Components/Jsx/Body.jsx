import {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Posts from './Posts';
import Dashboard from './Dashboard';

class Body extends Component {
  constructor(props){
    super(props)
    const token = localStorage.getItem("token")
    let loggedIn = true
    if(token == null){
      loggedIn = false
    }
    this.state = {
      loggedIn
    }
  }
  render(){
    if(this.state.loggedIn === false){
        return <Redirect to="/" />
    }
	return(
		<div className="Body">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/body/" } component={ Dashboard } />
          <Route path={process.env.PUBLIC_URL + "/body/posts" } component={ Posts } />
        </Switch>
        <Footer />
      </BrowserRouter>
		</div>
	)
}
}

export default Body;
