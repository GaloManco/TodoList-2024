import style from './ContagemDeTarefas.module.css';

interface TypeContagemDeTarefa {
    TarefaCriada: number;
    ContageDeTarefa:number;
}

export function ContagemDetarefa({TarefaCriada, ContageDeTarefa}:TypeContagemDeTarefa) {
    return (
        <div className={style.boxTarefa}>
            <header>
                <strong>Tarefa criadas <p>{TarefaCriada}</p></strong>
                <span>Concluídas <p>{ContageDeTarefa} de {TarefaCriada}</p></span>
            </header>
        </div>
    )
}