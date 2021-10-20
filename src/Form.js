import React, {useState} from 'react';

function Form(){
  const [totalSiteLogins, setTotalSiteLogins] = useState(0);
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  let logIn = isAdminLogin ? "ADMIN Log In" : "Log In";
return (
  <div>
    <h1>{logIn}</h1>
    <form >
    <div className='input-container'>
      <label id="name-label" for="userName">User Name*</label>
      <input type="text" name="name" id="name" placeholder="Enter your  user name" />
    </div>
    <div className='input-container'>
      <label id="name-label" for="name">Password*</label>
      <input type="password" name="password" id="password" placeholder="Password" />
    </div>
    <label>
        <input type="checkbox" value='Admin' name="Admin" onClick={()=> setIsCheck(!isCheck)} />
        Admin
      </label>
    <input type="submit" value="Log In" onClick={(evt) => { evt.preventDefault(); setTotalSiteLogins(totalSiteLogins + 1);
   if(isCheck){
     setIsAdminLogin(true)
    }else if(isCheck === false){setIsAdminLogin(false)}}}/>
    </form>
    <p>Total site logins {totalSiteLogins}</p>
  </div>
)
};

export default Form;