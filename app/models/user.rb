class User < ActiveRecord::Base
  has_many :famgroups, dependent: :destroy
  has_many  :fams, through: :famgroups
  has_many :tasks, dependent: :destroy
  has_many  :rewards, dependent: :destroy

  extend Devise::Models

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User
end
