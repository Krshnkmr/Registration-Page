public class UserService
{   
    private UserRepository userRepository;

    @AutoWired
    public UserService(UserRepository userRepository)
    {
        this.userRepository=userRepository;
    }
    public User findByEmail(String email)
    {
        return userRepository.findByEmail(email);
    }
}