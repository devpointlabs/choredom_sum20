class CreateFams < ActiveRecord::Migration[6.0]
  def change
    create_table :fams do |t|
      t.string :fam_name
      t.string :fam_admins
      t.string :fam_members

      t.timestamps
    end
  end
end
