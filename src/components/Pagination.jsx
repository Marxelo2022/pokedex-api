import React, { useState } from 'react'

const Pagination = ({ FullPokemons, offSet, limit, setOffSet }) => {

    const pageNumbers = [];
    let pokemonsPerPage = limit;

    for (let i = 1; i <= Math.ceil(FullPokemons / pokemonsPerPage); i++) {
        pageNumbers.push(i)
    }

    const segmentation = [];
    const longitudeSegmentation = 5;
    for (let i = 0; i < pageNumbers.length; i += longitudeSegmentation) {
        let segment = pageNumbers.slice(i, i + longitudeSegmentation);
        segmentation.push(segment)
    }

    const segmentationTopIndex = segmentation.length;
    const [currentSegment, setCurrentSegment] = useState(0);

    const handleClickPlus = () => {
        if (currentSegment < segmentationTopIndex - 1) {
            setCurrentSegment(currentSegment + 1)
        }
    }

    const handleClickMinus = () => {
        if (currentSegment > 0) {
            setCurrentSegment(currentSegment - 1)
        }
    }

    const handleOffset = (e) => {
        const pageNumber = Number(e.target.innerHTML);
        for (let i = 0; i < pageNumbers.length; i++) {
            if (pageNumbers[i] === pageNumber) {
                setOffSet(offSet = i * limit)
            }
        }
    }

    const firstpage = () => {
        setOffSet(offSet = 0)
        setCurrentSegment(0)
    }

    const lastpage = () => {
        setOffSet(offSet = (pageNumbers.length - 1) * limit)
        setCurrentSegment(segmentationTopIndex - 1)
    }

    if (FullPokemons) {
        return (
            <section className='Pagination__section'>
                <div className={currentSegment > 0 ? "Pagination__btn" : "btn__off"} onClick={firstpage}><i className="fa-solid fa-angles-left both"></i></div>
                <div className={currentSegment > 0 ? "Pagination__next" : "btn__off"} onClick={handleClickMinus}>...</div>
                {
                    segmentation[currentSegment]?.map((segment) => (
                        <li key={segment}><button className='Pagination__numbers' type='submit' onClick={handleOffset}>{segment}</button></li>
                    ))

                }
                <div className={currentSegment == segmentationTopIndex - 1 ? "btn__off" : "Pagination__next"} onClick={handleClickPlus}>...</div>
                <div className={currentSegment == segmentationTopIndex - 1 ? "btn__off" : "Pagination__btn"} onClick={lastpage}><i className="fa-solid fa-angles-right both"></i></div>
            </section>
        )
    }else{
        return('')
    }
}

export default Pagination