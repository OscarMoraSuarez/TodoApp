import './styles.css';

import{Todo,TodoList} from './classes';//clases
import { crearTodoHtml } from './js/componentes';//metodo


// instancial la calse todolist para usar su metodo
 export const todoList= new TodoList(); 
// crear tarea manualmente
/* const tarea= new Todo('Aprender JavaScript!!'); */

// inyectar en el arreglo
/* todoList.nuevoTodo(tarea); */
/* console.log(todoList); */

/* crearTodoHtml(tarea); */

/* localStorage.setItem('mi-key','ABC124');
sessionStorage.setItem('mi-key','ABC123'); */
//  const newTodo1='barrer la casa';

/* setTimeout(() => {

    localStorage.removeItem('mi-key');

}, 1500); */
todoList.todos.forEach(crearTodoHtml);
console.log(todoList.todos)
const newTodo= new Todo('estudiar python');
/* todoList.nuevoTodo(newTodo); */
newTodo.imprimirClase();