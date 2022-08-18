import { BehaviorSubject, Observable } from "rxjs";
import { Task } from "./task";
import { map } from "rxjs/operators";

export interface State {
    todolist: Task[];
}

const state: State = {
    todolist: []
}

export class Store {
    private subject = new BehaviorSubject<State>(state);
    private store = this.subject.asObservable();

    get value() {
        return this.subject.value;
    }

    public getTodoList(): Observable<Task[]> {
        return this.store
            .pipe(
                map(store => store.todolist)
            )
    }

    set(name: string, state: any) {
        this.subject.next({
            ...this.value, [name]: state
        })
    }
}



    //tipado com o 'State'
    //e setar com o valor da constante 'state', que tem uma coleção vazia

    //O QUE É O 'BehaviorSubject'?
    //o propagador do estado atual da STORE
    //fornece o comportamento atraves de uma 'subscription'

    //então, ele foi oferecido com uma Observable, para que ele possa ver utilizado com as vantagens da 'Observable' que nos já conhecemos

    //meio de obter o valor do 'subject'

    //o 'set' vai atualizar o estado atual da 'STORE'



    //a STORE é alimentada atraves do SERVICE
    //o SERVICE chama a STORE