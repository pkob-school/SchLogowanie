import { requestFormReset } from "react-dom";

function Form({sessionArr, userArr}) {

    
    function login(ev) {
        if (document.getElementById("pass_log").value === userArr[0].password && document.getElementById("user_log").value === userArr[0].username) {
            localStorage.setItem("logged_in", "true");
            
        }
    }
    function register(ev) {
        
    }
    return (<form>
        <h2>Zaloguj się</h2>
        <input type="text" placeholder="Nazwa użytkownika" id="user_log"></input>
        <input type="password" placeholder="Hasło" id="pass_log"></input>
        <input type="submit" value="Zaloguj" onClick={login}/>
        <h2>Zarejestruj się</h2>
        <input type="text" placeholder="Nazwa użytkownika" id="user_reg"></input>
        <input type="password" placeholder="Hasło" id="pass_reg"></input>
        <input type="submit" value="Zarejestruj" onClick={register}/>
    </form>)
}

export default Form;