
import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,useLocation, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import List from './pages/List';

export const stateContext=React.createContext();

const serviceKey = '659ddc43bc80652442010d2ff2b99b7dcfb60c4221f4200fd9e678898d580229';

const busanUrl = `http://apis.data.go.kr/6260000/RecommendedService/getRecommendedKr?serviceKey=${serviceKey}&pageNo=1&numOfRows=10&resultType=json`;

const gyeongnamUrl = `http://apis.data.go.kr/6480000/gyeongnamtourculture/gyeongnamtourculturelist?serviceKey=${serviceKey}&pageNo=1&numOfRows=10&resultType=json`;

const App=()=>{
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [result, setResult] = useState([]);

  const [isRowsLoaded, setIsRowsLoaded]=useState(false);
  const [rows,setRows]=useState([]);

  const location=useLocation();

  useEffect(()=>{
    fetch(busanUrl)
    .then(response=>response.json())
    .then(data=>{
      setResult(data.getRecommendedKr.item);
      setIsDataLoaded(true);
    })
    .catch(error=>console.log(error));

    fetch(gyeongnamUrl)
    .then(response=>response.json())
    .then(data=>{
      setRows(data.gyeongnamtourculturelist.body.items.item);
      setIsRowsLoaded(true)
    })
    .catch(error=>console.log(error));
  },[]);

  const value=location.pathname==="/list" ? rows:result;
  if(!isDataLoaded && !isRowsLoaded){
    return <div>데이터를 불러오는 중입니다</div>
  }

  return (
    <stateContext.Provider value={value}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:UC_SEQ" element={<Detail />} />
        <Route path="/List" element={<List />} />

      </Routes>
      
    </stateContext.Provider>
  )
}
export default App;
