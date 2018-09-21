class DropTeamsUsersTable < ActiveRecord::Migration[5.0]
  def up
    drop_table :teams_users_tables
  end

  def down
    create_table :interests do |t|
      t.belongs_to :user, index: true
      t.belongs_to :sport, index: true

      t.timestamps
    end
  end
end
