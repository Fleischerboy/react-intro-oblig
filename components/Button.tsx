const Button = (props: any) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log("Clicked", event.currentTarget)

    }
    if(props.href) { 
       return <button><a href={props.href}>
            {props.children} 
        </a></button>
    }
    return <button onClick={handleClick}>
    {props.children}
    </button>

}

export default Button