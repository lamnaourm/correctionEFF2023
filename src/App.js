import logo from './logo.svg';
import './App.css';
import Composant1 from './components/Composant1';
import Composant2 from './components/Composant2';
import Composant3 from './components/Composant3';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const [salaries, setSalaries] = useState([])

    useEffect(() => {
        const getData = async () =>{
            const res = await axios.get('http://localhost:8000/salaries')
            return  res.data
        }

        getData().then((sales) => setSalaries(sales) )
    }, [])
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/q2' element={<Composant2 salaries={salaries} />} />
          <Route path='/q3' element={<Composant3 salaries={salaries} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
