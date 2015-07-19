Rails.application.routes.draw do
  get 'todos/index'

  root to: "todo#index"
  resources :todos
  
end


#    Prefix Verb   URI Pattern               Controller#Action
#      root GET    /                         todo#index
#     todos GET    /todos(.:format)          todos#index
#           POST   /todos(.:format)          todos#create
#  new_todo GET    /todos/new(.:format)      todos#new
# edit_todo GET    /todos/:id/edit(.:format) todos#edit
#      todo GET    /todos/:id(.:format)      todos#show
#           PATCH  /todos/:id(.:format)      todos#update
#           PUT    /todos/:id(.:format)      todos#update
#           DELETE /todos/:id(.:format)      todos#destroy