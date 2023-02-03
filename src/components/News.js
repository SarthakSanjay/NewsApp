import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    // document.title = `${this.capitalizeFirstLetter(props.category)} - Shark News`
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    const updateNews = async () => {
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`

        setLoading(true)
        let data = await fetch(url)
        props.setProgress(30)
        let parsedData = await data.json()
        // console.log(parsedData)
        props.setProgress(70)

        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100)
    }

    useEffect(() => {
        updateNews();
    }, [])



    //   const  handleNextClick = async () => {
    //         setPage(page+1)
    //         updateNews()

    //     }
    //     const  handlePreviousClick = async () => {
    //         setPage(page-1)
    //         updateNews()
    //     }
    const fetchMoreData = async () => {
        setPage(page+1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`
        // {this.setState({loading:true})}
        let data = await fetch(url)
        let parsedData = await data.json()
        // console.log(parsedData)
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setLoading(false)
       
    };
    return (
        <>
            {/* // <div className='container my-3'> */}
            <h1>SharkNews - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            {loading && <Spinner />}


            {/* !loading &&*/}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className='container'>
                    <div className='row'>
                        {articles.map((element) => {
                            return <div className='col-md-4' key={element.url}>
                                <Newsitem title={element.title} discription={element.description} imgurl={element.urlToImage}
                                    newsUrl={element.url}
                                    author={element.author}
                                    date={element.publishedAt}
                                    source={element.source.name}

                                />

                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>

    )

}

{/* <div className='container d-flex justify-content-between'>
                    <button disabled={page <= 1} className='btn btn-success btn-sm' onClick={this.handlePreviousClick}>&larr; Pevious</button>
                    <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} className='btn btn-success btn-sm' onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}

{/* </div> */ }

News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: "general"
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News