// link ramda no html 
(new Elem('div')
  .addClass('css-class')
  .addClass('another-class')
  .append(new Text('content to display'));

append(new Text('content to display'),
  addClass('another-class',
    addClass('clss-class',
      elem)))
//utilizando randam
//
compose(
  append(new Text('content to display'), elem),
  addClass('another-class', elem),
  addClass('css-class', elem)
)(elem);

pipe(
  addClass('css-class', elem),
  addClass('another-class', elem),
  append(new Text('content to display'))
)(elem)

) (elem);

// Compose :
