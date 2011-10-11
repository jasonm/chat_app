ChatApp::Application.routes.draw do
  root to: "homes#show"

  resource :sessions, only: %w(new create destroy)
  match 'login' => 'sessions#new'
  match 'logout' => 'sessions#destroy'

  resource :chat, only: %w(show)
  resources :rooms, only: %w(create) do
    resources :messages, only: %w(index create)
  end

  if %w(development test).include? Rails.env
    mount Jasminerice::Engine => "/jasmine"
  end
end
