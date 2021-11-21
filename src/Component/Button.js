import React from 'react';
import styled from 'styled-components';

const ArticleWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 20rem;
    border: 3px solid #251282;
    background: white;
    margin: 1rem;
`;

const Link = styled.a`
    text-decoration: none;
    width: inherit;
`;

const ArticleImg = styled.img`
    width: inherit;
    max-height: 15rem;
    overflow: hidden;
    border-bottom: 3px solid #251282;
`;

const ArticleText = styled.div`
    text-align: left;
    padding: 0rem 1rem;
    color: #251282;
`;

const Title = styled.p`
    font-weight: bold;
    font-size: 1.25rem;
`;

const Author = styled.p`
`;

const ArticleBox = ( { article } ) => {
    return (
        <ArticleWrap>
            <Link href={article.article_link} target="_blank" rel="noreferrer">
                <ArticleImg src={article.image_url} />
                <ArticleText>
                    <Title>{article.article_title}</Title>
                    <Author>{article.article_authors}</Author>
                </ArticleText>
            </Link>
        </ArticleWrap>
    );
};

export default ArticleBox;