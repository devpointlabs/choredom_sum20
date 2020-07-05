class Task < ApplicationRecord
  belongs_to :user

  validates :task_name, :task_description, :task_value, presence: true
  validates :task_value, numericality: { only_integer: true, greater_than_or_equal_to: 1 }
end