import Button from './Controls/Buttons/Button/Button';

type Props = { message :  string}

const DemoPage = (props: Props) => {
    return (
        <>
            <div className="text-center">{props.message}</div>
            <div>
                <Button label="Click"/>
            </div>
        </>
    )
}

export default DemoPage;