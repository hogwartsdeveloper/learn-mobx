import { observer } from 'mobx-react-lite';
import './App.css';
import counter from './store/counter';

const Counter = observer(() => {
    return (
        <div className="counter">
            {"Count = " + counter.count}
            <div className="btns">
                <button className="btn left" onClick={() => counter.increment()}>+</button>
                <button className="btn" onClick={() => counter.decrement()}>-</button>
            </div>
        </div>
    );
})

export default Counter;