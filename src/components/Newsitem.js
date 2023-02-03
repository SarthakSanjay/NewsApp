import React from 'react'

const Newsitem = (props) => {

        let { title, discription, imgurl, newsUrl, date, author, source } = props
        return (
            <div className="card my-4" style={{ backgroundColor: "rgb(122, 0, 152)" }}>
                <img src={!imgurl ? "https://www.shutterstock.com/image-photo/black-alphabet-letter-word-null-260nw-1968602836.jpg" : imgurl} className="card-img-top" alt="..." />
                <div style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    position: "absolute",
                    right: '0'
                }}>

                    <span className="badge rounded-pill bg-danger" >{source}</span>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{discription}</p>
                    <a href={newsUrl} target="_blank" className="btn btn-success btn-sm">Read more..</a>
                    <p className="card-text" ><small className="text-light" style={{ color: "white" }}>By {author ? author : "unknown"} on {new Date(date).toUTCString()} </small></p>
                </div>
            </div>
        )
    
}

export default Newsitem