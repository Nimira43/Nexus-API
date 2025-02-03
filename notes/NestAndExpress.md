#### Nest and Express

###### NestJS provides an abstraction layer over Express, making it easier to build applications using a more structured and modular approach. By default, NestJS uses Express as the underlying HTTP server framework, but you can switch to Fastify if needed.

```
import { Req } from '@nestjs/common'
import { Request } from 'express'

@Controller('users')
export class UsersController {

  @Post()
  public createUsers(@Req() request: Request) {
    console.log(request)
    return 'You sent a post request to users endpoint'
  }
}
```

###### When you bring in the Request object from Express and use the @Req() decorator, you're directly accessing the raw Express request object. This can be useful for tasks that require low-level access to the request data or when you want to use specific Express middleware.

##### @Req() Decorator: 
###### The @Req() decorator allows you to inject the raw Express request object into your route handler. This gives you access to all properties and methods available in the Express Request object.

##### Request Object: 
###### By importing Request from express, you can type your request parameter to ensure it conforms to the Express request interface. This can help with IntelliSense and type checking.

##### Logging Request: 
###### In the createUsers method, the request object is logged to the console, allowing you to see all the details of the incoming request, such as headers, body, query parameters, etc.

##### Use Cases
###### Using the raw Express request object can be helpful when:

###### You need to access request-specific data that isn't covered by NestJS decorators (e.g., raw headers).

###### You want to use or configure specific Express middleware.

###### You need low-level control over the request handling process.

```
import { Controller, Post, Req } from '@nestjs/common'
import { Request } from 'express'

@Controller('users')
export class UsersController {
  @Post()
  public createUsers(@Req() request: Request) {
    const { headers, body, query, params } = request;
    console.log('Headers:', headers);
    console.log('Body:', body);
    console.log('Query Params:', query);
    console.log('Route Params:', params);
    return 'You sent a post request to users endpoint'
  }
}
```

#### Summary

###### In many cases it is considered best practise to avoid directly accessing the raw request object using @Req() in favor of using NestJS decorators like @Param(), @Query(), @Body(), etc. These decorators not only provide a cleaner and more readable way to access request data but also leverage the power of NestJS's abstraction layer, making your code more framework-agnostic and easier to maintain.

#### Here's why using decorators is preferred:

##### Readability and Maintainability: 
###### Decorators make it clear what parts of the request are being used, improving the readability of your code.

##### Type Safety: 
###### By using decorators, you can leverage TypeScript's type system more effectively, ensuring that the data you're working with is correctly typed.

##### Validation: 
###### NestJS decorators integrate seamlessly with validation libraries like class-validator, allowing you to easily validate incoming request data.

##### Separation of Concerns: 
###### Using decorators helps to separate the concerns of extracting request data from the business logic, leading to cleaner and more modular code.
