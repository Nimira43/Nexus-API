### Patch, Put, Delete
###### These decorators are used to handle different types of HTTP requests:

#### @Patch('/:id'): 
###### Used for partial updates to a resource.

#### @Put('/:id'): 
###### Used for full updates to a resource.

#### @Delete('/:id'): 
###### Used to delete a resource.

### Query and Body
###### These decorators help you extract query parameters and request body data:

#### @Query(): 
###### Extracts query parameters from the URL.

#### @Body(): 
###### Extracts data sent in the body of the request.

#### In this example:

###### The @Body() decorator is used to extract data from the request body.

###### The @Query() decorator is used to extract query parameters.

###### The @Param('id') decorator is used to extract the id from the URL.

```
import { Controller, Get, Post, Patch, Put, Delete, Param, Query, Body } from '@nestjs/common'

@Controller('users')
export class UsersController {
  @Get('/:id')
  public getUsers(@Param() params: any) {
    console.log(params)
    return 'You sent a get request to users endpoint'
  }

  @Post()
  public createUsers(@Body() body: any) {
    console.log(body)
    return 'You sent a post request to users endpoint'
  }

  @Patch('/:id')
  public updateUsers(@Param('id') id: string, @Body() body: any) {
    console.log(`Updating user with id: ${id}`)
    console.log(body)
    return 'You sent a patch request to users endpoint'
  }

  @Put('/:id')
  public replaceUsers(@Param('id') id: string, @Body() body: any) {
    console.log(`Replacing user with id: ${id}`)
    console.log(body)
    return 'You sent a put request to users endpoint'
  }

  @Delete('/:id')
  public deleteUsers(@Param('id') id: string) {
    console.log(`Deleting user with id: ${id}`)
    return 'You sent a delete request to users endpoint'
  }

  @Get()
  public getUsersWithQuery(@Query() query: any) {
    console.log(query)
    return 'You sent a get request with query parameters to users endpoint'
  }
}
```

