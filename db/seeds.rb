# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([
  {first_name: 'Aaron', last_name: 'Rodgers', email: 'arodgers@goat.com', height_feet: 6, height_inches: 2, weight: 220},
  {first_name: 'Drew', last_name: 'Brees', email: 'drew@brees.com', height_feet: 6, height_inches: 0, weight: 200},
  {first_name: 'Philip', last_name: 'Rivers', email: 'philip@rivers.com', height_feet: 6, height_inches: 6, weight: 240},
  {first_name: 'Matthew', last_name: 'Stafford', email: 'matthew@stafford.com', height_feet: 6, height_inches: 5, weight: 230}
  ])
