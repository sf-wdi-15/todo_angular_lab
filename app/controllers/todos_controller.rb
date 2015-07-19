class TodosController < ApplicationController
  def index
      @todos = Todo.all
      respond_to do |f|
        f.html
        f.json {render json: @todos}
      end
  end

  def create
      @todo = Todo.create(todo_params)
      respond_to do |f|
        f.json {render json: @todo}
      end
  end


    private
        def todo_params
          params.require(:todo).permit(:content, :complete)
        end
end
