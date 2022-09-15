
type FoodProps = {
    foodList: any
}

const Food = (props: FoodProps) => {
    const { foodList } = props;
    return foodList.map((item: any, index: any)=> {
        return (
        <li key={index}>{item}</li>
        )
    })
}

export default Food;