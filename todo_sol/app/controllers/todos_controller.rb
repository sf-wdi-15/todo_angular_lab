class TodosController < ApplicationController
  
  def index
    @todos = Todo.all
    respond_to do |f|
      f.html 
      f.json {render json: @todos}
    end
  end

  def create
    todo_params = params.require(:todo).permit(:content, :completed)
    @todo = Todo.create(todo_params)
    respond_to do |f|
      f.json {render json: @todo}
    end
  end

  def update 
    todo_params = params.require(:todo).permit(:content, :completed)
    @todo = Todo.find(params[:id])
    @todo.update(todo_params)
    respond_to do |f|
      f.json {render json: @todo}
    end
  end
end