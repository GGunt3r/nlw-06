import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import '../styles/auth.scss';
import { Button  } from '../components/Button';

export function NewRoom(){
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Leatmeask" />
                    <h2>Criar uma nova sala</h2>
                    <form action="">
                        <input 
                        type="text" 
                        placeholder="Nome da sala"
                        />
                    </form>
                    <Button type="submit">
                        Criar sala
                    </Button>
                    <p>
                        Quer entrar em uma sala existente? <a href="#">Clique aqui</a>
                    </p>
                </div>
            </main>
        </div>
    )
}