public interface UserRepository extends CrudRepository<User, Long>
{
    User findByEmail(String email);
}