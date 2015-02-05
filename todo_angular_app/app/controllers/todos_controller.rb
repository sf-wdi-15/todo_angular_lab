class TodosController < ApplicationController
  
  def index
    @todos = Todo.all
    respond_to do |format|
      format.html
      format.json { render json: @todos}
    end
  end

  def create
    todo_params = params.require(:todo).permit(:content, :complete)
    @todo = Todo.create(todo_params)
    respond_to do |format|
      format.json {render json: @todo}
    end
  end

  def update
    todo_id = params[:id]
    @todo = Todo.find(todo_id)
    editedTodo = params[:complete]
    @todo.update(:complete => true)
    respond_with @todo
  end

  # def update
  #   todo_id = params[:id]
  #   todo = Todo.find(todo_id)
  #   updated_attributes = params.require(:todo).permit(:content, :complete)
  #   todo.update_attributes(updated_attributes)
  #   respond_to do |format|
  #     format.json {render json: @todo}
  #   end
  # end

end
