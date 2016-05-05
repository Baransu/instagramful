import React from 'react'
import { connect } from 'react-redux'
import { addMessage } from '../actions'
import { socket, img, nick } from '../chat';

let AddMessage = ({ dispatch }) => {
  let input
  const date = new Date();
  const time = (date.getHours()) + ':' + (date.getMinutes());// + ' ' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        socket.emit('message', {
          text: input.value,
          nick,
          img,
          time
        });
        dispatch(addMessage({
          text: input.value,
          nick,
          img,
          time
        }));
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button class="btn waves-effect waves-light" type="submit" name="action" placeholder="New message">
          Send
        </button>
      </form>
    </div>
  )
}
AddMessage = connect()(AddMessage)

export default AddMessage
