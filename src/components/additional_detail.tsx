export const AdditionalDetailComp = (props: {title: string, values: string[]}) => {
    const { title, values  } = props;

    return (
        <div className="bg-transparent text-yellow-300 border-4 border-yellow-300 rounded-xl p-4 my-2">
            <div>
                <h1 className="text-2xl mb-3">{title}</h1>
            </div>
            {
                values.length > 0 
                ? <ul>
                {
                    values.map(value => <AdditionalDetailItem key={value} text={value} /> )
                }
                </ul> 
                : <p>N/A</p>
            }
        </div>
    )
}

const AdditionalDetailItem = (props: {text: string}) => {
    
    return (
        <li>{props.text}</li>
    )
}

export default AdditionalDetailItem;