class PostsController < ApplicationController

  before_filter :authenticate_user!, only: [:create, :upvote]

  def index
    render json: Post.all, status: 200
  end

  def show
    post = Post.find(params[:id])
    render json: post, status: 200
  end

  def create
    post = current_user.posts.create(post_params)
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
