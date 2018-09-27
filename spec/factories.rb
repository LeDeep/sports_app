FactoryBot.define do
  factory :user do
    id { rand(999999) }
    first_name { "Mitch" }
    last_name  { "Trubisky" }
    email  { "mitch@trubisky.com" }
    height_feet { 6 }
    height_inches { 2 }
    weight { 220 }
  end

  factory :invalid_user do
    id { rand(999999) }
    first_name { "mitch" }
    last_name  { "TruBiskY" }
    email  { "MITCH@trubisky.com" }
    height_feet { 6 }
    height_inches { 2 }
    weight { 220 }
  end

  factory :team do
    id { rand(999999) }
    name { "Chicago Bears" }
  end

  factory :sport do
    id { rand(999999) }
    name { "Football" }
  end

  factory :membership do
    user_id { user.id }
    team_id { team.id }
  end

  factory :interest do
    user_id { user.id }
    sport_id { sport.id }
  end
end
