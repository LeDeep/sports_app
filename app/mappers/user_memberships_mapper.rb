class UserMembershipsMapper
  def find_memberships_by_user_id(id)
    User.find_by_id(id).teams.to_a
  end
end
