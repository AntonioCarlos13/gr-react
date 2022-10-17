import styles from './Home.module.css'
import porco from '../../img/porco.png'
import LinkButton from '../layout/LinkButton'

function Home(){
    return(
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>GR</span></h1>
            <p>Começe a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/novoProjeto" text="Criar Projeto" />
            <img src={porco} alt="GR"/>
        </section>
    )
}

export default Home