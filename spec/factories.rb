FactoryBot.define do
  factory :user do
    id { 1 }
    first_name { "Mitch" }
    last_name  { "Trubisky" }
    email  { "mitch@trubisky.com" }
    height_feet { 6 }
    height_inches { 2 }
    weight { 220 }
  end

  factory :invalid_user do
    id { 2 }
    first_name { "mitch" }
    last_name  { "TruBiskY" }
    email  { "MITCH@trubisky.com" }
    height_feet { 6 }
    height_inches { 2 }
    weight { 220 }
  end

  factory :team do
    id { 1 }
    name { "Chicago Bears" }
  end

  factory :sport do
    id { 1 }
    name { "Football" }
  end

  factory :membership do
    user_id { 1 }
    team_id { 1 }
  end

  factory :interest do
    user_id { 1 }
    sport_id { 1 }
  end
end
