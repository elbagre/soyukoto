class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def log_in!(user)
    user.reset_session_token!
    session.session_token = user.session_token
    @current_user = user
  end

  def log_out!
    current_user.reset_session_token!
    session.session_token = nil
    @current_user = nil
  end

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session.session_token)
  end

  def logged_in?
    !!current_user
  end

  def require_log_in
    render json:  {base: ['invalid credentials']}, status: 401 if !current_user
  end
end
