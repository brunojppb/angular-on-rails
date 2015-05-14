class PostsController < ApplicationController

  def index
    render json: Post.all, status: 200
  end

  def show
    post = Post.find(params[:id])
    render json: post, status: 200
  end

  def create
    post = Post.new(post_params)
    post.save
    render json: post, status: 201
  end

  def upvote
    post = Post.find(params[:id])
    post.increment!(:upvotes)
    render json: post, status: 201
  end

  private
    def post_params
      params.require(:post).permit(:link, :title)
    end
end
