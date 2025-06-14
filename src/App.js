import React, {useState} from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {
    const [sortedArticles, setSortedArticles] = useState(
        sortArticlesByUpvotes(articles)
    );
    const handleMostUpvoted = () =>
        setSortedArticles([...sortArticlesByUpvotes(sortedArticles)]);

    const handleMostRecent = () => {
        setSortedArticles([...sortArticlesByDate(sortedArticles)]);
    };

    function sortArticlesByUpvotes(articles) {
        console.log('handleMostUpvoted clicked');
        return articles.sort((a, b) => {
            if (a.upvotes > b.upvotes) {
                return -1;
            }
            if (a.upvotes < b.upvotes) {
                return 1;
            }
            return 0;
        });
    }

    function sortArticlesByDate(articles) {
        console.log('handleMostRecent clicked');
        return articles.sort((a, b) => {
            const aDate = new Date(a.date);
            const bDate = new Date(b.date);
            if (aDate > bDate) {
                return -1;
            }
            if (aDate < bDate) {
                return 1;
            }
            return 0;
        });
    }

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={()=>handleMostUpvoted(articles)}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick={()=>handleMostRecent(articles)}>Most Recent</button>
            </div>
            <Articles articles={sortedArticles}/>
        </div>
    );

}

export default App;
