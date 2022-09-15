
type FoodProps = {
    foodList: any
}

const Food = (props: FoodProps) => {
    const { foodList } = props;
    return (<>
        <h3>passing food List as prop to component Food:</h3>
        <ul>
            {foodList.map((item: any) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </>
    );
}

export default Food;