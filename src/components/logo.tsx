import logo from '../assets/logo.svg'

type LogoProps = {
    size: "small" | "big"
}

const Logo = (props: LogoProps) => {
    const { size } = props;
    var sizeClass: string;
    switch (size) {
        case "small":
            sizeClass = "w-24";
            break;
        case "big":
            sizeClass = "w-96";
            break;
    }

    return (
        <div className="mb-4">
            <img src={logo} alt="Star Wars logo" className={`${sizeClass}`} />
        </div>
    )
}

export default Logo;