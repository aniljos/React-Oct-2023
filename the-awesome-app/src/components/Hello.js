function Hello(props){
    return (
        <div>
            <h4>Hello Component</h4>
            <p>This is a simple component: {props.message}</p>
            <p>Generated At {new Date().toString()}</p>
        </div>
    )
}

export default Hello;

