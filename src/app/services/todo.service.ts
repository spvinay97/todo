import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../model/todo';

@Injectable()
export class TodoService {

    public todos: Todo[] = [];
    constructor() { }
  
    getAllTodos(): Todo[] {

        if(localStorage.getItem('localData') !== null){ 
            this.todos = JSON.parse(localStorage.getItem('localData'));
            console.log('Second');
        } else {
            var todoArrayData = [
                {
                    id: 1,
                    title: 'Prof.',
                    salution: 'Mr.',
                    firstName: 'Vinay Kumar',
                    middleName: 'Kumar',
                    lastName: 'Sangareddy Peta',
                    phone: '1234567890',
                    email: 'sp.vinay.k97@gmail.com'
                },
                {
                    id: 2,
                    title: 'Dr.',
                    salution: 'Mr.',
                    firstName: 'Sidhartha',
                    middleName: 'Sidhartha',
                    lastName: 'Sidhartha',
                    phone: '1234567890',
                    email: 'sidhartha@gmail.com'
                }
            ];
            localStorage.setItem('localData', JSON.stringify(todoArrayData));
            this.todos = JSON.parse(localStorage.getItem('localData'));
            console.log('First');
        }       
        return this.todos;
    }
    
    getTodoById(id: number): Todo {
        var todoArray = JSON.parse(localStorage.getItem('localData'));       
        console.log(todoArray);
        return todoArray
          .filter(todo => todo.id === id)
          .pop();
    }
  
    updateTodoById(todo): Todo {
        if (todo.id === 0) {                    
            var todoArray = JSON.parse(localStorage.getItem('localData'));
            var todoid = todoArray.length;
                todo.id = ++todoid;
                todoArray.push(todo);
            localStorage.setItem('localData', JSON.stringify(todoArray));
        } else {
            var todoSaveArray = JSON.parse(localStorage.getItem('localData'));
            for (var i in todoSaveArray) {
                if (todoSaveArray[i].id === todo.id) {
                    todoSaveArray[i] = todo;
                    localStorage.setItem('localData', JSON.stringify(todoSaveArray));
                }
            }
        }
        return todo;
    }
    
    deleteTodoDetail(id) {
       var todoArray = JSON.parse(localStorage.getItem('localData'));
        for (var i in todoArray) {
            if (todoArray[i].id === id) {
                todoArray.splice(i, 1);
                localStorage.setItem('localData', JSON.stringify(todoArray));  
            }
        }    
    };    
}
