import React, { useEffect, useState } from 'react';
import c from './News.module.scss';
import axios from 'axios';
import { IoMdArrowDropdownCircle } from 'react-icons/io';
import { CiBookmarkCheck } from "react-icons/ci";

const News = () => {
    const [news, setNews] = useState([]);
    const [expandedNews, setExpandedNews] = useState(null);

    useEffect(() => {
        axios.get('https://api.tasksforwork.uz/api/news')
            .then((res) => {
                setNews(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleNewsClick = (index) => {
        if (expandedNews === index) {
            setExpandedNews(null); 
        } else {
            setExpandedNews(index); 
        }
    };

    return (
        <div id='news' className={c.news_container}>
            <h2>Yangiliklar <CiBookmarkCheck style={{color: "rgb(119, 231, 243)"}} /></h2>
            <div className={c.news_list}>
                {news.map((item, index) => (
                    <div className={c.news_item} key={index} onClick={() => handleNewsClick(index)}>
                        <div className={c.news_title} >
                            {item.title}
                        </div>
                        {expandedNews === index && (
                            <div className={c.news_description}>
                                {item.description}
                            </div>
                        )}
                        <IoMdArrowDropdownCircle className={c.dropdown} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default News;
