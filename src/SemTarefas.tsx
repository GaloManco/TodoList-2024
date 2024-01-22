import style from './SemTarefas.module.css';
import agenda from './assets/agenda.svg'



export function SemTarefas() {
    return (
        <div className={style.semTarefa}>
            <img src={agenda} alt="" />
            <strong>Você ainda não tem tarefa cadastradas</strong>
            <span>Crie tarefa e organize seus itens a fazer</span>
        </div>
    )
}
        
        