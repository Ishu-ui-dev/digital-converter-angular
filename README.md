# digital-converter-angular


Answer2: Directives are one of the most powerful features of AngularJS and directives have a scope associated with them. This scope object is used for accessing the variables and functions defined in the AngularJS controllers, and the controller. 
So there are many states of scope in directive:

scope: false = if we change the text box in directive template header template also gets change

scope: true = if it's value is true angularJs will create a  new object and assign it to directive. so any changes made in directive template will not reflect back to the parent scope. but any changes made to the parent scope will reflect the directive scope;

scope: {} // call Isolated scope 
 means create new scope without inherit from parent scope. So it is working on 3 things

{
   scope: '@'
} 

"@" :  used for text binding (One way binding)
"=" :  model binding(2 way binding)
"&" : method binding
