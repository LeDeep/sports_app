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

teams = Team.create([
  {name: "Green Bay Packers"},
  {name: "New Orleans Saints"},
  {name: "San Diego Chargers"},
  {name: "Detroit Lions"}
])

sports = Sport.create([
  {name: "Football", icon: "football-ball"},
  {name: "Soccer", icon: "futbol"},
  {name: "Basketball", icon: "basketball-ball"},
  {name: "Baseball", icon: "baseball-ball"},
  {name: "Hockey", icon: "hockey-puck"},
  {name: "Cycling", icon: "bicycle"},
  {name: "Quidditch", icon: "quidditch"}
])

memberships = Membership.create([
  {user_id: 1, team_id: 1},
  {user_id: 1, team_id: 2},
  {user_id: 2, team_id: 1},
  {user_id: 2, team_id: 2},
  {user_id: 2, team_id: 3},
  {user_id: 3, team_id: 3},
  {user_id: 3, team_id: 4},
  {user_id: 4, team_id: 2},
  {user_id: 4, team_id: 4}
])

interests = Interest.create([
  {user_id: 1, sport_id: 1},
  {user_id: 1, sport_id: 2},
  {user_id: 1, sport_id: 3},
  {user_id: 1, sport_id: 4},
  {user_id: 1, sport_id: 5},
  {user_id: 1, sport_id: 6},
  {user_id: 1, sport_id: 7},
  {user_id: 2, sport_id: 1},
  {user_id: 2, sport_id: 2},
  {user_id: 2, sport_id: 5},
  {user_id: 2, sport_id: 6},
  {user_id: 3, sport_id: 3},
  {user_id: 3, sport_id: 4},
  {user_id: 3, sport_id: 5},
  {user_id: 3, sport_id: 7},
  {user_id: 4, sport_id: 2},
  {user_id: 4, sport_id: 3},
  {user_id: 4, sport_id: 4},
  {user_id: 4, sport_id: 6},
  {user_id: 4, sport_id: 7}
])
