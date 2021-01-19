import "./Button.scss";

type Props = {label : string}

const Button = (props: Props) => {
    return (
        <>
            <div className="container" >
                <div className="btn btn__secondary" >
                    <p>{props.label}</p>
                </div>
            </div>
        </>
    );
}

export default Button;