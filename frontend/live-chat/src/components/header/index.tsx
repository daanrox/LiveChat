import { StyledHeader } from "./styles"
import logo from '../../assets/live-chat-logo.png'
import { Button } from "../button"


export const Header = () =>{

    const redirectToDonate = () =>{
        window.open('https://www.paypal.com/donate/?business=PKNYQZKB7TZQG&no_recurring=0&item_name=Sua+doa%C3%A7%C3%A3o+ser%C3%A1+convertida+em+recursos+para+manter+o+LiveChat+funcionando%2C+e+futuramente+ser%C3%A1+implementado+o+App+Mobile&currency_code=BRL');
    }

    return (
        <>
        <StyledHeader>
            <div>
                <img src={logo} alt="Live Chat Logo" />
                <Button text='Doação' onClick={redirectToDonate}/>
            </div>
        </StyledHeader>
        </>

    )
}