import { connect } from 'react-redux'
// import { toggleTodo } from '../actions'
import ImgsList from '../components/ImgsList'

const getVisibleImages = (images) => {
  // switch (filter) {
  //   case 'SHOW_ALL':
  //     return todos
  //   case 'SHOW_COMPLETED':
  //     return todos.filter(t => t.completed)
  //   case 'SHOW_ACTIVE':
  //     return todos.filter(t => !t.completed)
  // }
  return images
}

const mapStateToProps = (state) => {
  return {
    images: getVisibleImages(state.images)
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onTodoClick: (id) => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }

//connect dispatcher (dispatchers)(PresentationComponenet)
const VisibleImagesList = connect(
  mapStateToProps,
  // mapDispatchToProps
)(ImgsList)

export default VisibleImagesList
