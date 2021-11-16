import React, { useState } from 'react'
import './QA.css'
import Paragraph from '../Paragraph/Paragraph'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { HiOutlineArrowRight } from 'react-icons/hi'

// 'addQA' is for situation when you want to selectively display some QAs
// It uses the same data layout as qAss, and are snapped at the bottom of all QAs.
function QA({ data, link = '../Contact', addQA=null }) {
    const QAs = data.QAs;
    
    const Block = ({ question, answer }) => {
        const [isFold, setIsFold] = useState(true);
        const handleClick = () => {
            setIsFold(!isFold);
        }
        return (
            <div className="qA">
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
        <div className='qAs'>
            <h1>{data.h0}</h1>
            {Object.keys(QAs ? QAs : {}).map((key) => (<Block question={QAs[key].question} answer={QAs[key].answer} key={key} />))}
            {Object.keys(addQA ? addQA : {}).map((key) => (<Block question={addQA[key].question} answer={addQA[key].answer} key={'addQA'+key} />))}
            <h2>{data.link}
                <a href={link} style={{ color: 'var(--primary)', position: 'relative', left: '30px', top: '5px' }}><HiOutlineArrowRight /></a>
            </h2>
        </div>
    )
}

export default QA
