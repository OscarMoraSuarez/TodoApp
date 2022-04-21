import { Todo } from "./todo.class";

export class TodoList{

    constructor(){

        /* this.todos=[]; */
        this.cargarLocalStorage();


    }


    nuevoTodo(todo){

        this.todos.push(todo);
        this.guardarLocalStorage();

    }

    eliminarTodo(id){

        this.todos=this.todos.filter(todo=> todo.id!=id )/* regresare un nuevo arreglo excluyendo el todo del id */
        this.guardarLocalStorage();
    }

    marcarCompletado(id){

        for(const todo of this.todos){

            console.log(id,todo.id);
            if(todo.id==id){

                todo.completado =! todo.completado;
                this.guardarLocalStorage();
                break;/* Suponiendo que ya encontrado el id del todo no habrà 
                otro igual salimos del ciclo el ciclo */

            }

        }


    }


    eliminarCompletados(){/*barrer el arreglo y eliminar los que tengan true  */


        this.todos = this.todos.filter(todo => !todo.completado)
        this.guardarLocalStorage();


    }

    guardarLocalStorage(){


        localStorage.setItem('todo', JSON.stringify(this.todos) );


    }

    cargarLocalStorage(){
        this.todos = (localStorage.getItem('todo')) ? JSON.parse(localStorage.getItem('todo')):[];
        this.todos=this.todos.map(obj=>Todo.fromJason(obj));/* map permite barrer el arreglo y retornar su elementos mutados */ 
    }







}





