Rails.application.routes.draw do
  root to: "todo#index"
  resources :todo
end
