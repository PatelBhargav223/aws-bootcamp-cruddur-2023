import './ProfileInfo.css';
import {ReactComponent as ElipsesIcon} from './svg/elipses.svg';
import React from "react";

// [TODO] Authenication
// import Cookies from 'js-cookie'
import { Amplify } from 'aws-amplify';

export default function ProfileInfo(props) {
  const [popped, setPopped] = React.useState(false);

  const click_pop = (event) => {
    setPopped(!popped)
  }

  // old code 
  // const signOut = async () => {
  //   console.log('signOut')
  //   // [TODO] Authenication
  //   Cookies.remove('user.logged_in')
  //   //Cookies.remove('user.name')
  //   //Cookies.remove('user.username')
  //   //Cookies.remove('user.email')
  //   //Cookies.remove('user.password')
  //   //Cookies.remove('user.confirmation_code')
  //   window.location.href = "/"
  // }
  // new code 
  const signOut = async()=>{
    try {
      await Amplify.Auth.signOut({global: true})
      window.location.href = '/'
    } catch (error) {
      console.log('error signing out:', error);
    }
  }

  const classes = () => {
    let classes = ["profile-info-wrapper"];
    if (popped == true){
      classes.push('popped');
    }
    return classes.join(' ');
  }

  return (
    <div className={classes()}>
      <div className="profile-dialog">
        <button onClick={signOut}>Sign Out</button> 
      </div>
      <div className="profile-info" onClick={click_pop}>
        <div className="profile-avatar"></div>
        <div className="profile-desc">
          <div className="profile-display-name">{props.user.display_name || "My Name" }</div>
          <div className="profile-username">@{props.user.handle || "handle"}</div>
        </div>
        <ElipsesIcon className='icon' />
      </div>
    </div>
  )
}