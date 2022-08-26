import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'
import './courseDetails.css'

export default function CourseDetails(props) {
    const id = useParams().id;
    const [course, setCourse] = useState({});
    const courses = useSelector(state => state.courseInfo.body)

    useEffect(() => {
        const result = courses.filter((course) => {
            return course.idCourse === id;
        })
        setCourse(result);
    }, [courses])


    return (
        <div className='courseDetailsBody'>
            {
                course[0] &&
                <>
                    <div className='courseDetailPart1'>
                        <div className='courseImage'>
                            <img url={course[0].imageUrl} alt='course image' />
                        </div>
                        <div className='courseAbout'>
                            <div className='courseTitle'>
                                <div className='courseSubtitle'>
                                    <p>{course[0].name}</p>
                                </div>
                                <div className='courseMainTitle'>
                                    <p>{course[0].subjectName}</p>
                                </div>
                            </div>
                            <div className='courseDescription' >
                                <p>{course[0].info}</p>
                            </div>


                        </div>
                        <div className='courseAmount'>
                            <div className='INR'>
                                <p>&#x20B9; {course[0].amount}</p>
                            </div>
                            <div className='USD'>
                                &#36;{course[0].amountUsd}
                            </div>
                        </div>
                    </div>
                    <div className='courseDetailPart2'>
                        <div className='duration'>
                            <h4>Duration</h4>
                            <p>{course[0].duration}</p>
                        </div>
                        <div className='liveSessionCount'>
                            <h4>Live Session Count</h4>
                            <p>{course[0].liveSessionCount}</p>
                        </div>
                        <div className='milestoneCount'>
                            <h4>Milestone Count</h4>
                            <p>{course[0].milestoneCount}</p>
                        </div>
                        <div className='sessionCount'>
                            <h4>Session Count</h4>
                            <p>{course[0].sessionCount}</p>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
