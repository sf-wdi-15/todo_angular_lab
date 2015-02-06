class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.boolean :completed
      t.string :content

      t.timestamps null: false
    end
  end
end
