class PostsController < ApplicationController

  def index
    respond_with Post.all
  end

  def show
    post = Post.find(params[:id])
    respond_with post
  end

  def create
    post = Post.new(post_params)
    post.save
    respond_with post
  end

  def upvote
    post = Post.find(params[:id])
    post.increment!(:upvotes)
    respond_with post
  end

  private
    def post_params
      params.require(:post).permit(:link, :title)
    end
end
