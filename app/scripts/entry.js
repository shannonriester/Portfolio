import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import router from './router';

ReactDOM.render(router, document.getElementById('container'));

var authorization = btoa('kid_H1o3YfRo:8247881bf65242e7ba1c26a027a8b4d7');

$(document).ajaxSend(function(evt, xhrAjax, jqueryAjax) {
    xhrAjax.setRequestHeader('Authorization', 'Basic ' + authorization);
});
