import Title from "./Title";

type MyComponentProps = {
    title: string
}


export default function MyComponent(props: MyComponentProps) {
    const { title } = props;
    return <Title title={title} />
}