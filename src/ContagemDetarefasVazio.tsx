import style from './ContagemDetarefasVazio.module.css';


export function ContagemDeTarefaVazio() {
    return (
        
        <div className={style.boxTarefa}>
            <header>
                <strong>Tarefa criadas <p>0</p></strong>
                <span>Concluídas <p>0</p></span>
            </header>
        </div>
    )
}