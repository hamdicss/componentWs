
import './App.css';
import Address from './Component/Profile/Address';
import FullName from './Component/Profile/FullName';
import Mail from './Component/Profile/Mail';
import Phone from './Component/Profile/Phone';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import Title from './Component/Profile/Title';

function App() {
  return (
    <div className="App">
      
      <div className="photo">
      <ProfilePhoto/>
      </div>
      <div className="profil">
        <Title/>
        <br></br>
        <FullName/>
        <Phone/>
        <Mail/>
        <Address/>
      </div>
      
    </div>
  );
}

export default App;
