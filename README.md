#Build a todo app using Angular and Rails

[Welcome to your life; there's no turning back.](https://www.youtube.com/watch?v=ST86JM1RPl0)
Even while we sleep we will find you acting on your best behaviour.
Turn your back on mother nature.
Everybody want's to rule the world.

You've been tasked with building a todo app using Angular and Rails.

*We've determined that you'll need the following*

##Todo Controller
* The Todo controller needs methods for `create` and `index`.
* Each method should respond to json requests

##Todo views
* There should be a single view `index.html.erb`. It should show users all current todos and have a form that allows users to create a new todo.

##Todo Model
* The Todo model needs attributes `content:string` and `complete:boolean`.

*Be sure not to forget to include *
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.11/angular-animate.js"></script>
```
in the head of your `application.html.erb` file.
To make AJAX requests using angular you'll need angulars [$http service](https://docs.angularjs.org/api/ng/service/$http).


##Bonus: Implement update
