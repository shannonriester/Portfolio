import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import router from './router';

ReactDOM.render(router, document.getElementById('container'));

var authorization = btoa('kid_H1o3YfRo:10234b95ae9244c1bfebf784d8c512cf');

$(document).ajaxSend(function(evt, xhrAjax, jqueryAjax) {
    xhrAjax.setRequestHeader('Authorization', 'Basic ' + authorization);
});
