import {createStore} from 'redux';

const store = createStore((state = {count: 0}, action) => {
  switch (action.type) {
    case 'Increment':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case 'Decrement':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1 ;
      return {
        count: state.count - decrementBy
      }
    case 'Reset':
      return {
        count: 0
      }
    default:
      return state;
  }
});

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: 'Increment',
  incrementBy: 5
});

store.dispatch({
  type: 'Decrement',
  decrementBy: 10
});

store.dispatch({
  type: 'Reset'
});

store.dispatch({
  type: 'Decrement'
});


console.log(store.getState());

console.log('=================== destructuring obj ===================');

const book = {
  title: 'Ego',
  author: 'Ryan',
  publisher: {
    name: 'xman',
    date: undefined
  }
}

const {title, author} = book;
const {name: pubName, date: newDate = 'N/A'} = book.publisher;

if (newDate !== null && newDate !== undefined) {
  console.log(typeof newDate);
  console.log(`Book title is ${title} by ${pubName} on ${newDate}`);
  
}

