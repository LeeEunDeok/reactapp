function App(props){
	return(
		<div>
			<h2>{props.title}</h2>
            {props.comment}
		</div>
	);
}

export default App ;