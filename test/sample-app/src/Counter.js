import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, updateStudent } from './redux/counterslice'

const Counter = () => {
    const valueCounter = useSelector(state => state.counterReducer.valueCounter)
    const dispatch = useDispatch()
    return <div><button onClick={() => dispatch(increase())} >Increase</button> {valueCounter} <button onClick={() => dispatch(decrease())}>Decrease</button>
    </div>

}

export default Counter;