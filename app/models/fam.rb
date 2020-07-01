class Fam < ApplicationRecord
  has_many :famgroups, dependent: :destroy
  has_many  :users, through: :famgroups
end
