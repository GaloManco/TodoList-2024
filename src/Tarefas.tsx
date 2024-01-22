import {Trash} from 'phosphor-react';
import style from './Tarefas.module.css';
import { ChangeEvent } from 'react';



interface  TypeTarefa {
    NovaTarefa: string;
    handleDeletarTarefa: (tarefa:string) => void;
    onTarafaConcluida: (event:ChangeEvent<HTMLInputElement>) => void;
    
}

export function Tarefas({NovaTarefa, handleDeletarTarefa, onTarafaConcluida}:TypeTarefa){

    function handleDeletar():void {

        handleDeletarTarefa(NovaTarefa)
        
    }

    
    
    
    

  

 



    
    return (
        <> 

                <div className={style.tarefas}>
                    <input type='checkbox' title='Tarefa Conclída' onChange={(event) => onTarafaConcluida(event)} />
                    <p>
                        {NovaTarefa}
                    </p>
                    <button title='Deletar' onClick={handleDeletar}>
                        <Trash />
                        
                    </button>

                </div>
        </>
    )
}