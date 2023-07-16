import { useNavigate } from 'react-router-dom';

function Navigation({ navigation }) {
  const navigate = useNavigate();
  return <div class="navigation">
    <ul class="menu">
      <li> <img src="../images/vue.png"alt="vue" class="vae" /> VUE LBD </li>
      <li><div class="hr2"><hr /></div>
        <button>
          <img src="../images/piechart.png"alt="pie" class="dash_icon" /><c>Dashboard </c>
        </button></li>
      <li class="active"><button  >
        <img src="../images/profile.png"alt="user profile" class="dash_icon" /><c>user profile</c>
      </button></li>
      <li><button><img src="../images/clipboard.png"alt="table list" class="dash_icon" /><c>table list</c>
      </button></li>

      <li><button><img src="../images/table.jpeg"alt="typography" class="dash_icon" /><c>typography</c>
      </button></li>
      <li><button><img src="../images/react.jpg" alt="icons"class="dash_icon" /><c>icons</c>
      </button></li>
      <li><button><img src="../images/map.jpeg" alt="maps" class="dash_icon" /><c>maps</c></button></li>
      <li><button><img src="../images/notification.png"alt="notifications" class="dash_icon" /><c>notifications</c>
      </button></li>
    </ul>
  </div>;



}

        export default Navigation;