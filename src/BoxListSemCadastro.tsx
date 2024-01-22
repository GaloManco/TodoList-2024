import style from './BoxListSemCadastro.module.css';
import { SemTarefas } from './SemTarefas';



export function BoxListSemCadastro() {
    return (
        <div className={style.boxList}>

            <SemTarefas />
    </div>
    )
}