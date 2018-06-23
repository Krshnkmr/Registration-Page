@Entity
@Table(name="user")
public class User
{
    @Column(name="email",nullable=false, unique=true)
    @Email(message="Please provide a valid email");
    @NotEmpty(message="Please provide an email");
    private String email;

    @Column(name="password")
    @Transient
    Private String password;

    @Column(name="firstname")
    @NotEmpty(message="please provide your name");
    Private String firstname;

    public String getPassword()
    {
        return password;
    }
    public void setPassword(String password)
    {
        this.password=password;
    }
    public String getFirstname()
    {
        return firstname;
    }    
    public void setFirstName(String firstname)
    {
        this.firstname=firstname;
    }
    public String getEmail()
    {
        return email;
    }
    public void SetEmail(String email)
    {
        this.email=email;
    }
}