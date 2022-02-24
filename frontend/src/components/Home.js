import React from 'react';
 
function Home(props) {
 
  // handle click event of logout button
  const handleLogout = () => {    
    props.history.push('/Login.js');
  }
 
  return (
    <div>
      Welcome User!<br /><br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}
 
export default Home;