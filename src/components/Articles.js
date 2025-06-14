import React from 'react';

function Articles({articles}) {

    return (
        <div className="card w-50 mx-auto">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Upvotes</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {articles.map(row => (
                <tr data-testid="article" key="article-index">
                    <td data-testid="article-title">{row.title}</td>
                    <td data-testid="article-upvotes">{row.upvotes}</td>
                    <td data-testid="article-date">{row.date}</td>
                </tr>

                ))}

                </tbody>
            </table>
        </div>
    );

}

export default Articles;
