class Fam < ApplicationRecord
  has_many :famgroups, dependent: :destroy
  has_many  :users, through: :famgroups

  validates :fam_name, :fam_members, :fam_admins, presence: true
  validates: :fam_name, length { minimum: 2}
end