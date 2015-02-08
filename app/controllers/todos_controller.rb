class TodosController < ApplicationController
  # before_filter :find_todo, except: [:index, :new, :create]

  def index
  	@todos = Todo.all
  	respond_to do |format|
  		format.html
  		format.json { render json: @todos }
  	end
  end

  def create
  	# set params
  	todo_params = params.require(:todo).permit(:content, :complete)
  	# creates a todo and saves it to the db
  	@todo = Todo.create(todo_params)
  	respond_to do |format|
  		format.json { render json: @todo }
  	end
  end

  def update
  	# store params in todo_params variable
  	todo_params = params.require(:todo).permit(:content, :completed)
    # find the 'todo'
  	@todo = Todo.find(params[:id])
  	# update the todo
  	@todo.update(todo_params)
  	# respond to JSON 
  	respond_to do |format|
  		format.json { render json: @todo }
    end
  end

  # private

  # 	def find_todo
  # 		@todo = Todo.find(params[:id])
  # 	end

end
