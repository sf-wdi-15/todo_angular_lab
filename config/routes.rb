Rails.application.routes.draw do
  root to: 'todos#index'
  get '/', to: 'todos#index'

  resources :todos
end
