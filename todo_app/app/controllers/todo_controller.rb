class TodoController < ApplicationController
	def index
		@todo = Todo.all 
		respond_to do |format|
		  	format.html
		  	format.json { render json: @todo }
		end
	end

  	def create
		todo_params = params.require(:todo).permit(:content, :complete)
		@todo = Todo.create(todo_params)
		respond_to do |format|
			format.json {render json: @todo}
		end
	end
end
