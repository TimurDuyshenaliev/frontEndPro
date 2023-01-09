
import {Link} from "./Link";

export function Header() {
    return (
        <header>
            <ul>
                <li><Link to="/"><span>Технологии</span></Link></li>
                <li><Link to="/contact"><span>Контакты</span></Link></li>
            </ul>
        </header>
    )
}
