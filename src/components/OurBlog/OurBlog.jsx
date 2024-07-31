import React, { useEffect, useRef } from 'react';
import './OurBlog.scss';

import spinachImage from '../../images/blog-bg.png';
import farmer from '../../images/farmer.png';
import strawberries from '../../images/strawberries.png';
import clock from '../../images/icons/clock.svg';

const blogPosts = [
  {
    date: '12.09.2021',
    title: 'How to plant spinach correctly in winter',
    description: 'In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...',
    imageUrl: spinachImage,
    altText: 'Spinach',
    style: 'our-blog__image--spinach',
  },
  {
    date: '12.09.2021',
    title: 'How to plant spinach correctly in winter',
    description: 'In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...',
    imageUrl: farmer,
    altText: 'Farmer',
    style: 'our-blog__image--farmer',
  },
  {
    date: '12.09.2021',
    title: 'How to plant spinach correctly in winter',
    imageUrl: strawberries,
    altText: 'Spinach',
    style: 'our-blog__image--strawberries',
  },
  {
    date: '12.09.2021',
    title: 'How to plant spinach correctly in winter',
    imageUrl: strawberries,
    altText: 'Spinach',
    style: 'our-blog__image--strawberries',
  }
];

const OurBlog = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    if (scrollContainer) {
      const scrollInterval = setInterval(() => {
        scrollContainer.scrollBy({
          left: 1,
          behavior: 'smooth',
        });

        if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
          scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }, 10);

      return () => clearInterval(scrollInterval);
    }
  }, []);

  return (
    <section id="our-blog" className="our-blog">
      <div className="our-blog__header">
        <h2 className="our-blog__title">Our blog.</h2>
        <a href="/blog" className="our-blog__link">Go to our blog</a>
      </div>
      <div className="our-blog__posts-wrapper" ref={scrollRef}>
        <div className="our-blog__posts">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className={`our-blog__post ${
                index === 0 ? 'our-blog__post--large' : ''
              } ${index === 1 ? 'our-blog__post--tall' : ''} ${
                index === 0 ? 'our-blog__post--first' : 'our-blog__post--other'
              }`}
            >
              <img
                src={post.imageUrl}
                alt={post.altText}
                className={`our-blog__image ${post.style}`}
              />
              <div
                className={`our-blog__content ${
                  index === 0
                    ? 'our-blog__content--spinach'
                    : index === 1
                    ? 'our-blog__content--farmer'
                    : 'our-blog__content--strawberries'
                }`}
              >
                <time className="our-blog__date">
                  <img src={clock} alt="Clock" className="our-blog__clock-icon" />{' '}
                  {post.date}
                </time>
                <h3 className="our-blog__post-title">{post.title}</h3>
                <p className="our-blog__description">{post.description}</p>
                <a href="/read-more" className="our-blog__read-more">Read</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBlog;