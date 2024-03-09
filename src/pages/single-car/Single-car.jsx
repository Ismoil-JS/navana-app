import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import c from './Car.style.module.scss';
import { FiCheck } from 'react-icons/fi';

const SingleCar = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');


  useEffect(() => {
    axios.get(`https://api.tasksforwork.uz/api/car/${id}`)
      .then((res) => {
        setCar(res.data[0]);
      })
      .catch((err) => {
        setError(err);
      });
  }, [id]);

  useEffect(() => {
    axios.get(`https://api.tasksforwork.uz/api/comment/${id}`)
      .then((res) => {
        console.log(res.data);
        setComments(res.data);
      })
      .catch((err) => {
        setError(err);
      });
  });

  const handleSubmit = (e) => {
    e.preventDefault(); 
    axios.post(`https://api.tasksforwork.uz/api/comment`, {
        content: newComment,
        car_id: id,
      })
      .then(() => {
        setNewComment('');
      })
      .catch((err) => {
        setError(err);
      });
  };
  


  if (error) {
    return <div>Error: {error.message}</div>;
  }

  function formatDate(isoDate) {
    const date = new Date(isoDate);
    return date.toLocaleString(); // Adjust the format according to your preference
  }


  return (
    <div className={c.container}>
      {car ? (
        <>
          <div className={c.car_details}>
            <div className={c.image_div}>
              <img src={car.image_url} alt={car.model} className={c.image} />
              <p className={c.car_price}> {car.price} USD</p>
            </div>
            <h2 className={c.title}>{car.model}</h2>

            <div className={c.details}>
              <p><b>Yili:</b> {car.year}</p>
              <p><b>Rangi:</b>
                {car.color.map((color, index) => (
                  <span key={index}>
                    {color}
                    {index < car.color.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>
              <p><b>Turi:</b> {car.type}</p>
              <p>{car.description}</p>
            </div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
      <div className={c.comments}>
        <div className={c.comment_title}>
          <h3>Fikrlar</h3>
          <form>
            <input type="text" placeholder="Sizning fikringiz" value={newComment} onChange={(e) => setNewComment(e.target.value)} />
            <button onClick={handleSubmit}><FiCheck/></button>
          </form>

        </div>
        <div className={c.comments_wrapper}>
          {comments.map((comment) => (
            <div key={comment.id} className={c.comment}>
              <p className={c.comment_content}>{comment.content}</p>
              <div className={c.comment_footer}>
                <p className={c.comment_author}>{comment.id}</p>
                <p className={c.comment_date}>{formatDate(comment.created_at)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default SingleCar;
