import React, { useState } from 'react'
import './QA.css'
import Paragraph from '../Paragraph/Paragraph'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { HiOutlineArrowRight } from 'react-icons/hi'


function QA({ qqwe, link = '../Contact' }) {
    const QAs = qqwe.QAs;
    
    const Block = ({ question, answer }) => {
        const [isFold, setIsFold] = useState(true);
        const handleClick = () => {
            setIsFold(!isFold);
        }
        return (
            <div className="block">
                <div className="question">
                    <span className="fold_Btn" onClick={handleClick}>{isFold ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}</span>
                    {question}
                </div>
                <div className="answer" style={{ display: isFold ? 'none' : 'flex' }}>
                    <Paragraph json={answer} />
                </div>
            </div>
        );
    }
    return (
        <div className='qA'>
            <h1>{qqwe.h0}</h1>
            {Object.keys(QAs ? QAs : {}).map((key) => (<Block question={QAs[key].question} answer={QAs[key].answer} key={key} />))}
            <h2>{qqwe.link}
                <a href={link} style={{ color: 'var(--primary)', position: 'relative', left: '30px', top: '5px' }}><HiOutlineArrowRight /></a>
            </h2>
        </div>
    )
}

export default QA
