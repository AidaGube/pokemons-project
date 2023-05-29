import React from 'react'
import './pagination.css';

const Pagination = ({ page, changeOffset }) => {
    // let pages = []
    // for (let i = 1; i <= totalPosts / page; i++) {
    //     pages.push(i)
    // }
    return (
        <div className='pagination'>
            <button className='active' onClick={() => changeOffset('prev')}>
                Prev
            </button>
            {page}
            {/* /
            {pageCount} */}
            <button className='active' onClick={() => changeOffset('next')}
            >Next
            </button>
            {/* {
                pages.map((pag, index) => {
                    return <button  onClick={() => setOffset(pag)} key={index}>{pag}</button>
                })
            } */}
        </div>
    )
}

export default Pagination