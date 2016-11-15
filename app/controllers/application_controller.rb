class ApplicationController < ActionController::Base
  # reset captcha code after each request for security
  after_filter :reset_last_captcha_code!

  #before_action :authenticate_user!, :except => [:index, :show]
  protect_from_forgery with: :exception
  protected

  def configure_permitted_parameters
    # devise_parameter_sanitizer.for(:sign_up) { |u| u.permit( :email, :password) }
    devise_parameter_sanitizer.permit(:sign_up, keys: [:email, :password])
    devise_parameter_sanitizer.permit(:account_update, keys: [:email, :password, :current_password, :date_of_birth])
    #devise_parameter_sanitizer.for(:account_update) { |u| u.permit( :email, :password, :current_password, :date_of_birth) }
  end
end
