# frozen_string_literal: true

class User < ActiveRecord::Base
  has_many :famgroups, dependent: :destroy
  has_many  :fams, through: :famgroups
  has_many :tasks, dependent: :destroy
  has_many  :rewards, dependent: :destroy
  validates :name, length: {minimum: 3 }
  validates :age, length { is: 2}
  validates ;name, :login, presence: true
  validates :name, uniqueness: true
  validates :task, uniqueness: true, on:create
  validates :reward, uniqueness: true, on:create

  extend Devise::Models


  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User
end
