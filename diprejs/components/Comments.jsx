import axios from 'axios';

const comment = (newComment) => {
  axios
    .post('comments.create', '/:id', {
      id: newComment.id,
      text: newComment.text,
    })
    .then(() => {
      console.log('comentario hecho');
    });
};

const comments = () => {
  axios
    .get('comments.list', '/')
    .then(() => {
      console.log('todos los comentarios');
    });
};

export default { comment, comments };
// 'comments.create', '/:id'
