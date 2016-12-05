class MediaContentsController < ApplicationController
 # before_action :set_program
  before_filter :check_role ,except: :index
  def check_role
    if user_signed_in? && current_user.role_id ==nil
      redirect_to new_reg_path

    end
  end
  def index
    @media_contents = Media.all
  end

  def create
    @media = Media.new(media_params)

    if @media.save!
      render json: @media
    else
      puts 'Hello'
      render json: { error: 'Failed to process' }, status: 422
    end
  end

  def delete_media
    Media.where(id: params[:media_contents]).destroy_all
    redirect_to root_url
  end

  def delete_all
    Media.delete_all
    redirect_to root_url
  end
private
  def set_program
    @media = Media.find(params[:id])
  end
  def media_params
    params.require(:media_contents).permit(:file_name)

  end
end
