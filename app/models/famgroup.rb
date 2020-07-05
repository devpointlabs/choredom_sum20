class Famgroup < ApplicationRecord
  belongs_to :fam
  belongs_to :user

  validates :last_name, presence: true
end
