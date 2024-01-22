import style from './Conteiner.module.css';
import plus from './assets/plus 2.svg';

import { Tarefas } from './Tarefas';
import { ContagemDetarefa } from './ContagemDeTarefas';
import { ContagemDeTarefaVazio } from './ContagemDetarefasVazio';
import { BoxListSemCadastro } from './BoxListSemCadastro';
import { ChangeEvent, useState } from 'react';



export function Container() {



    const [NovaTarefa, setNovaTarafa] = useState('');

    const [ListDeTarefas, SetListaDeTarefas] = useState<string[]>([]);

    
    function onEntradaDoInput(event: ChangeEvent<HTMLInputElement>) {
        setNovaTarafa(event.target.value)
        
        
    }
    
    function handleNovaTarefa() {
        SetListaDeTarefas([...ListDeTarefas, NovaTarefa ])
        
        setNovaTarafa('')
        
    }
    
    function DeletarTarefa(tarefa:string) {

        const novaListaComTarefaDeletada = ListDeTarefas.filter(item => { return item != tarefa;})
             
        SetListaDeTarefas(novaListaComTarefaDeletada)
       
    }

    const semTextoNoImput = NovaTarefa.length == 0;
  
 
   let contagemDeTarefas:number;

   contagemDeTarefas = ListDeTarefas.length

   const [cont, setCont] = useState(0);
   function onTarefaConcluida(event:ChangeEvent<HTMLInputElement>) {
    
    
       
        const handleTarefaFeita:boolean = event.target.checked;
        if(handleTarefaFeita){
            setCont((valor) => {return valor + 1})
           
        }
        else{
            setCont((valor) => {return valor - 1})
        }

   

  
   }
    


    return (
        <div className={style.container}>

            <header>
                <input type="text" placeholder='Adicione uma nova tarefa' onChange={onEntradaDoInput} name='teste' value={NovaTarefa}/>
                <button type='submit' onClick={handleNovaTarefa} disabled={semTextoNoImput}>
                    <strong>Criar</strong> 
                    <img className={style.iconPlus} src={plus}  alt="" />
                </button>
            </header>
            <div>
                {contagemDeTarefas == 0 ?
                    (
                        <ContagemDeTarefaVazio />
                    ):
                    (
                        <ContagemDetarefa TarefaCriada={contagemDeTarefas} ContageDeTarefa={cont}/>
                    )
                }
                { contagemDeTarefas == 0 ? 
                    (
                        <BoxListSemCadastro /> 
                    ): 
                    (
                        ListDeTarefas.map(item => { 
                            return (  
                                <Tarefas NovaTarefa={item} handleDeletarTarefa={DeletarTarefa} onTarafaConcluida={onTarefaConcluida}/>
                            ) } ).reverse()
                    )
                }
            </div>
        </div>
    )
}






                        

                                


    

                                
                                
          
                            

        
          