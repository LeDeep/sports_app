class CreateTeamsUsersTable < ActiveRecord::Migration[5.0]
  def change
    create_table :teams_users_tables, id: false do |t|
      t.belongs_to :user, index: true
      t.belongs_to :team, index: true
    end
  end
end
