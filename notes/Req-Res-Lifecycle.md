## The request-response lifecycle in Nest JS

#### Here's a breakdown of the lifecycle and the role each component plays:

##### Request: 
###### The client sends an HTTP request to the server.

##### Middleware: 
###### Middleware functions are executed before the request reaches the route handler. They can perform tasks like logging, authentication, and modifying the request object.

##### Filters: 
###### Exception filters catch and handle exceptions thrown during request processing, ensuring that the client receives a proper response.

##### Filters Start: 
###### Begin by setting up any necessary pre-handling logic.

##### Guards: 
###### Guards determine whether a request is allowed to proceed based on certain conditions (e.g., authentication and authorisation). They can either allow the request to continue or terminate it with an appropriate response.

##### Interceptors: 
###### Interceptors can modify incoming requests before they reach the controller, and they can also transform outgoing responses. They’re useful for tasks like logging, transformation, and caching.
###### Before Controller: Interceptors can modify the request before it reaches the controller method.
###### After Controller: Interceptors can modify the response after the controller method execution.

##### Pipes: 
###### Pipes are used for data transformation and validation. They can transform incoming request data before it reaches the controller and validate it against certain criteria.

##### Controller: 
###### The controller is where the request is handled and routed to the appropriate method, typically calling a service to perform business logic.

##### Response: 
###### The final response is sent back to the client. The response can be modified by interceptors or handled by filters if an exception was thrown.