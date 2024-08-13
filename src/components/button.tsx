type ButtonProps = {
    label: string
    onClick?: () => void
    isVisible?: boolean
}

const Button = (props: ButtonProps) => {
    const { label, onClick, isVisible = true } = props;
    return (
        <div className={`${isVisible? "visible text-yellow-300 bg-black hover:text-black hover:bg-yellow-300 rounded-full px-4 py-2" : "invisible"}`}>
            <button onClick={onClick}>
                <p className="text-sm">{label}</p>
            </button>
        </div>
    )
}

export default Button;