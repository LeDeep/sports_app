class UserInterestsMapper
  def find_interests_by_user_id(id)
    User.find_by_id(id).sports.to_a
  end
end
