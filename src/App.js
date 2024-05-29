import logo from './logo.svg';
import './App.css';
import Composant1 from './components/Composant1';
import Composant2 from './components/Composant2';
import Composant3 from './components/Composant3';

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
      <Composant1 />
      <Composant2 salaries={salaries} />
      <Composant3 salaries={salaries} />
    </div>
  );
}

export default App;
