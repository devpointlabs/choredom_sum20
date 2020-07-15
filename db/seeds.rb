10.times do
  fam = Fam.create(
    fam_name: Faker::Food.dish, 
    fam_admins: "Admin", 
    fam_members: "CoolKids"
  )  
  user = User.create(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    password:"password",
    points: Faker::Number.non_zero_digit,
    admin: Faker::Boolean
  )  
  Task.create(
    task_name:"task name",
    task_description:"task description",
    task_value: Faker::Number.non_zero_digit,
    task_complete: Faker::Boolean,
    user_id: user.id
  )  
  Reward.create(
    reward_name: "reward name",
    reward_description: "reward description",
    reward_cost: Faker::Number.non_zero_digit,
    reward_claimed: Faker::Boolean,
    reward_used: Faker::Boolean,
    user_id: user.id
  )  
  FamGroup = Famgroup.create(
    last_name: Faker::Food.dish,
    fam_id: fam.id,
    user_id: user.id
  )
end
puts "Data Seeded."