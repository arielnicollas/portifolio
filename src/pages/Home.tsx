import illustrantionImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';


export function Home(){
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrantionImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&Samp; A ao vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>

            <main>
                <div>
                    <img src={logoImg} alt="Letmask" />
                    <button>
                        <img src={googleIconImg} alt="" />
                        Crie sua conta com o Google
                    </button>

                <div>ou entre em uma sala</div>

                    <form action="">
                        <button>
                            <input type="text"
                             placeholder="Digite o código da sala"   
                            />
                            
                            
                        </button>

                    </form>
                </div>
            </main>
        </div>
    )
}