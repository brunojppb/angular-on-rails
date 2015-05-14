class CommentsController < ApplicationController

  before_filter :authenticate_user!, only: [:create, :upvote]

  def create
    post = Post.find(params[:post_id])
    comment = post.comments.create(comments_params)
    render json: comment, status: 201
  end

  def upvote
    post = Post.find(params[:post_id])
    comment = post.comments.find(params[:id])
    comment.increment!(:upvotes)
    render json: comment, status: 202
  end


  private
    def comments_params
      params.require(:comment).permit(:body)
    end

end
