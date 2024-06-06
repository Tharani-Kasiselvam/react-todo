# MyTodo

**Description**   
&emsp;&emsp;-This project is to Note down our daily activities and seggregate them using a Name and maintaining a Status whether it is completed or not.   
&emsp;&emsp;-We have a feature to enable new set of Todos and each Todo are designed with Name, Description, Status and additional Features to Edit or Delete the Todos

**Implmentation**   
&emsp;&emsp;- **useState**   
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;a. to maintain individual Status in Overall Filter and in each Todos   
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;b. Todo Form entries   
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;c. FormIds selection during Todo Edit, Todo Delete, Todo Status change    
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;d. Color changes maintaines based on the value selection (All-Orange/Completed-Green/Not Completed-Yellow)   
&emsp;&emsp;- **Context API** (Methods and Variables)   
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;a. to render the entire TodoList based on State changes   
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;b. to ADD New Todos   
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;c. to DELETE selected Todos   
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;d. to Track the selection of FormIds [to edit/delete/status change in individual Todos]   
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;e. To maintain the Overall Status and individual Todo Status   
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;f. Tracking of latest Todo Name/Description of to re-load for EDITING existing Todo Name/Description   

***Outcome***   
    &emsp;&emsp;1. Addition of *NEW* Todos.   
    &emsp;&emsp;2. Restricts *EMPTY* Todos.   
    &emsp;&emsp;3. *Modification* of existing Todos.   
    &emsp;&emsp;4. Modification of *Completed* and *Not Completed* status from individual Todos.   
    &emsp;&emsp;5. Tracking of Overall Status to filter **All/Completed/Not Completed** Todos.   
   &emsp;&emsp;6. *Removal* of Todos which are not required   

***Sample Image***   
<img width="773" alt="image" src="https://github.com/Tharani-Kasiselvam/react-todo/assets/162134346/7bdadfd5-601d-44c8-b8df-a6d1044f6763">


***Author:Tharani K***
