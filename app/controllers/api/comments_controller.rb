class Api::CommentsController < ApplicationController
  before_action :set_comment, only: [:update, :destroy]

  def index
    render json: Comment.all
  end

  def create
    comment = Comment.create(comment_params)
      if comment.save
        render: json: comment
      else
        render json: { errors: comment.errors.full_messages.join(',') }, status: 442
      end
  end

  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: { errors: comment.errors.full_messages.join(',') }, status: 442
    end
  end

  def destroy
    @comment.destroy
  end

private

  def set_comment
    @comment=Comment.find(params[:id])
  end

  def comment_params
    params.require(:comment).permit(:title, :body)
  end
end
