class Reward < ApplicationRecord
  belongs_to :user

  validates :reward_name, :reward_description, :reward_cost, presence: true
  validates :reward_cost, numericality: { only_integer: true, greater_than_or_equal_to: 1 }
end