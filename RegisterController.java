public class RegisterController
{
    private BCryptPasswordEncoder bcryptPasswordEncoder;
    private UserService userSerivce;
    private EmailService emailService;

    @AutoWired
    public RegisterController(BCryptPasswordEncoder bcryptPasswordEncoder, UserService userSerivce, EmailService emailService)
    {
        this.bcryptPasswordEncoder=bcryptPasswordEncoder;
        this.userSerivce=userSerivce;
        this.emailService=emailService;
    }
    @RequestMapping(value="/register", method=RequestMethod.GET)
    public ModelandView showRegistrationPage(ModelandView modelandview, User user)
    {
        modelandview.addObject("user", user);
        modelandview.setViewName("register");
        return modelandview;
    }
    @RequestMapping(value="/register",method=RequestMethod.POST)
    public ModelandView processRegistrationForm(ModelandView modelandview, @Valid User user, BindingResult bindingResult, @RequestParam Map requestParams, RedirectAttributes redir)
    {
        modelandview.setViewName("confirm");
        Zxcvbn passwordcheck=new Zxcvbn();
        Strength strength=passwordcheck.measure(requestParams.get("password"));

        if(strength.getScore()<3)
        {
            bindingResult.reject("password");
            redir.addFlashAttribute("errorMessage", "your password is weak. choose a stronger one");
            return modelandview;
        }
        User user=userSerivce.setPassword(bcryptPasswordEncoder.encode(requestParams.get("password")));
        modelandview.addObject("successmessage", "your password has been set");
        return modelandview;
    }
}