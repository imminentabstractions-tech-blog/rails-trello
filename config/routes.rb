Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root "board#index"
  resources :board

  get '/board/:id/showhelper', to: 'board#showhelper'

end
