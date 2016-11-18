class ApplicationController < ActionController::Base
  # reset captcha code after each request for security
  after_filter :reset_last_captcha_code!

  #before_action :authenticate_user!, :except => [:index, :show]
  protect_from_forgery with: :exception

  def authenticate_user!
    if user_signed_in?
      super
    else
      #redirect_to '/users/sign_in', :notice => 'Please login first'
      ## if you want render 404 page
      render :file => File.join(Rails.root, 'public/404'), :formats => [:html], :status => 404, :layout => false
    end
  end
  def after_sign_in_path_for(resource)
    case resource
      when User then
        if request.referrer.to_s.include? "sign_up"
          new_reg_path

        else
          root_path
        end
      when Admin::Admin then root_path
    end
  end
  def after_sign_out_path_for(resource_or_scope)
    root_path
  end
end