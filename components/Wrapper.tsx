import Title from "./Title"



const Wrapper = (props: any) => {
    const { children } = props;
    return <section className="flex">{children}</section>
}


export default Wrapper