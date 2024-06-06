# MyTodo

**Description**   
&emsp;This project is to Note down our daily activities and seggregate them using a Name and maintaining a Status whether it is completed or not.   
&nbsp;We have a feature to enable new set of Todods and each Todod are designed with Name, Description, Status and additional Features to Edit or Delete the Todos

**Implmentation**   
    - *useState* 
        a. to maintain individual Status in Overall Filter and in each Todos   
        b. Todo Form entries   
        c. FormIds selection during Todo Edit, Todo Delete, Todo Status change    
        d. Color changes maintaines based on the value selection (All-Orange/Completed-Green/Not Completed-Yellow)   
    - *Context API* (Methods and Variables)   
        a. to render the entire TodoList based on State changes   
        b. to ADD New Todos   
        c. to DELETE selected Todos   
        d. to Track the selection of FormIds [to edit/delete/status change in individual Todos]   
        e. To maintain the Overall Status and individual Todo Status   
        f. Tracking of latest Todo Name/Description of to re-load for EDITING existing Todo Name/Description   

***Outcome***   
    1. Addition of *NEW* Todos.   
    2. Restricts *EMPTY* Todos.   
    3. *Modification* of existing Todos.   
    4. Modification of *Completed* and *Not Completed* status from individual Todos.   
    5. Tracking of Overall Status to filter **All/Completed/Not Completed** Todos.   
    6. *Removal* of Todos which are not required   

***Sample Image***   
<img width="773" alt="image" src="https://github.com/Tharani-Kasiselvam/react-todo/assets/162134346/7bdadfd5-601d-44c8-b8df-a6d1044f6763">


***Author:Tharani K***
