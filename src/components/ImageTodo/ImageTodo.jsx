import React, {useState} from 'react'
import styled from 'styled-components'

function ImageTodo({text, image}) {
	const [isComplete, setIsComplete] = useState(false)
  return (
	<Wrapper>
		<h3>{text}</h3>
		{image && <img src={image} alt="Todo" />}
		<button onClick={() => setIsComplete(!isComplete)} className={isComplete && 'complete'}>{isComplete ? 'Mark incomplete' : 'Mark complete'}</button>
	</Wrapper>
  )
}

export default ImageTodo

const Wrapper = styled.div`
	height: 200px;
	width: 200px;
	display: flex;
	flex-flow: column nowrap;
	border: 1px solid blue;
	justify-content: center;
	align-content: center;
	align-items: center;

	img {
		max-width: 180px;
	}

	h3 {
		width: 100%;
		text-align: center;
	}

	button {
		width: auto;
		&.complete {
			background-color: green;
		}
	}
	
`
