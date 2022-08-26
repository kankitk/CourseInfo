
import {useEffect} from 'react';
import './App.css'
import { fetchData } from './store/courseInfoSlice';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import CourseDetails from './components/CourseDetails';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Header from './components/Header';
import CourseList from './components/CourseList';
const App = () => {

  const state = useSelector(state => state.courseInfo.body);

  let dispatch = useDispatch()
  useEffect(() => {
    axios.get("https://api.bricketc.com/bricketc-backend-php/get_all_courses.php").then(result => {
      const data = result.data;
      dispatch(fetchData(data));
    })
  }, [])






  return (
    <div className='container'>
      <Header>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Navigate replace to="/courses"/>} />
          <Route exact path="/courses" element={<CourseList/>} />
          <Route exact path="/courseDetail/:id" element={state && <CourseDetails/>} />
        </Routes>
      </BrowserRouter>
      </Header>
      {/* {state && console.log(state[0])} */}
      {/* <CourseList/>  */}
      {/* {state && <CourseDetails courseId={state[0].idCourse}/>} */}
    </div>
  );
}

export default App;
