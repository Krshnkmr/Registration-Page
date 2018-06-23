public class SecurityConfiguration extends WebSecurityconfigurerAdapter
{
    @Override
    protected void configure(HttpSecurity http) throws Exception
    {
        http.authorizeRequests()
        .antMatchers("/register").permitAll();
        .antMatchers("/confirm").permitAll();
    }
}