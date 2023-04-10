import { Button} from "react-bootstrap";

export default (props) => {
    const {variant,type,message} = props
    return (
        <Button variant={variant} type={type}>
        {message}
        </Button>
    )
}

