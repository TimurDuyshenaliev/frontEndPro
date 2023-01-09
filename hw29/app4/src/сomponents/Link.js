
import { NavLink } from "react-router-dom";

export function Link(props) {
    const { children, href, to } = props;
    return to !== undefined
        ? <NavLink to={to} >{children}</NavLink>
        : <a href={href} >{children}</a>
}
