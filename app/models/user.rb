# frozen_string_literal: true

class User < ActiveRecord::Base
  has_many :famgroups, dependent: :destroy
  has_many  :fams, through: :famgroups
  has_many :tasks, dependent: :destroy
  has_many  :rewards, dependent: :destroy
  validates :name, length: {minimum: 1 }
  validates :age, length { is: 1}
  validates :age, numericality: { only_integer: true, greater_than_or_equal_to: 1 }
  validates :name, presence: true

  extend Devise::Models


  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User
end
