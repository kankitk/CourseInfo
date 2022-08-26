import React from 'react'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from './UI/Card';
import './CourseList.css'
import {useNavigate} from 'react-router-dom';

export default function CourseList() {
    const [courses,setCourses] = useState([]);
    const store = useSelector(state=>state.courseInfo.body)
    useEffect(()=>{
        setCourses(store);
    },[])

    const history = useNavigate()
    const toCourseDetail = (path)=>{
        history(path)
    }
  return (
    <div className='courseList' >
        {store && store.map(item => {
        console.log(store[0])
        return <div  className='course' onClick={()=>toCourseDetail(`/courseDetail/${item.idCourse}`)}>
            <Card title={item.subjectName} imageUrl={item.imageUrl} subtitle={item.name} />
        </div>
      })}
    </div>
  )
}
