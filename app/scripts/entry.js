import React from 'react';
import ReactDOM from 'react-dom';
import router from './router';
import $ from 'jquery';

ReactDOM.render(router, document.getElementById('container'));


// let basicAuth = btoa('kid_H1o3YfRo:10234b95ae9244c1bfebf784d8c512cf');
//
// login() {
//   this.save({
//     username: 'location',
//     password: 'passwordpw',
//   }, {
//     url: `https://baas.kinvey.com/user/kid_H1o3YfRo/login`,
//     type: 'POST',
//     success: (model, response) => {
//       localStorage.setItem('authtoken', response._kmd.authtoken);
//       this.unset('password');
//     },
//   });
// }
// retrieve() {
//   this.fetch({
//     url: `https://baas.kinvey.com/user/kid_H1o3YfRo/_me`,
//     success: (model, response) => {
//       console.log('RETRIEVED USER');
//     },
//   });
// }

// $(document).ajaxSend(function(evt, xhrAjax, jqueryAjax) {
//   if (localStorage.authtoken) {
//     retrieve()
//     // xhrAjax.setRequestHeader('Authorization', `Kinvey ${'f5b1b13a-7860-4d0b-9c0e-41aa50ad3c6c.fZqFhKmrDiWkGIhgPYiw/lKcya2rxRG+eT0LxNjrQ5M='}`);
//   } else {
//     xhrAjax.setRequestHeader('Authorization', `Basic ${authorization}`);
//   }
// });
