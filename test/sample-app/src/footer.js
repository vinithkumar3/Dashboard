
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';const Footer = ({footer}) => {
  const valueCounter = useSelector(state => state.counterReducer.valueCounter)
    return <div class="footer">
            <div>
            Dashboard  {valueCounter}
            </div>
          <div> Coded with<img src="../images/heart.png" alt="heart" class="heart"/> by <d>Cristi Jora</d>,Disgned by <d>Creative Dim</d>
            </div>
        </div>
        
}
export default Footer;
