class TodosController < ApplicationController
  respond_to :json
  def index
  	@todos = Todo.all
  	respond_to do | format |
  		format.html
  		format.json { render json: @todos}
  	end
  end

  def create
  	todo_params = params.require(:todo).permit(:content, :complete)
  	@todo = Todo.create(todo_params)
  	respond_to do | format |
  		format.json { render json: @todo}
  	end
  end
end
