
Vue.component('navbar',{
    template: ` 
    <nav class="navbar navbar-default navbar-fixed-top navbar-custom  animated slideInDown">
        <div class="container">
            <div class="navbar-header page-scroll">
                <a href="#page-top" class="navbar-brand"><i class="fa fa-home" aria-hidden="true"></i> Home</a>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li class="page-scroll">
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#contactinfo">Contact Info</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `,
data(){

}  
})

Vue.component('profile',{
    template:`
    <header>
            <div class="container" id="Profile">
                <div class="row">
                    <div class="col-lg-12 animated fadeIn">
                        <img src="src/images/bluepic2.png" width ="300" height="auto" id="profPic" class="img-responsive img-thumbnail">
                    </div>
                </div>
    
            <!--NameTag-->
            <div class="container" id="nameTag">
                <p class="animated slideInLeft">John Rader</p>
                <hr class="starlight">
                <p class="small animated slideInLeft">Programmer / Web Developer</p>
                <p class="small animated slideInLeft text-white">May 2018 Graduate BS Computer Science</p>
            </div>
    
            <!--SocialTags-->
            <div class="container" id="socialTags">
                <div class="row row-small">
                    <div class="col-lg-4 animated fadeIn">
                        <a href="mailto:jcrader238@gmail.com" class="btn-social btn-outline"><i class="fa fa-envelope-o" aria-hidden="true"></i></a>
                    </div>
                    <div class="col-lg-4 animated fadeIn">
                        <a href="https://www.linkedin.com/in/john-rader" class="btn-social btn-outline"><i class="fa fa-align-center fa-fw fa-linkedin" aria-hidden="true"></i></a>
                    </div>
                    <div class="col-lg-4 animated fadeIn">
                        <a href="https://github.com/JohnRader" class="btn-social btn-outline"><i class="fa fa-align-center fa-github" aria-hidden="true"></i></a>
                    </div>
                </div>        
            </div>  
        </header>
        `,
    data(){

    }
})

Vue.component('portfolio',{
    template: `
            <section id="portfolio">

                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <h2>Portfolio</h2>
                            <hr class="star-primary">
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-4 portfolio-item">
                            <a href="#portfolioModal1" class="portfolio-link" data-toggle="modal">
                                <img src="src/images/pentest.png" class="img-responsive img-thumbnail" alt="">
                            </a>
                        </div>
                        <div class="col-sm-4 portfolio-item">
                            <a href="#portfolioModal2" class="portfolio-link" data-toggle="modal">
                                <div class="caption">
                                    <div class="caption-content">
                                        
                                    </div>
                                </div>
                                <img src="src/images/oop.png" class="img-responsive img-thumbnail" alt="">
                            </a>
                        </div>
                        <div class="col-sm-4 portfolio-item">
                            <a href="#portfolioModal3" class="portfolio-link" data-toggle="modal">
                                <img src="src/images/proglang.png" class="img-responsive img-thumbnail" alt="">
                            </a>
                        </div>
                        <div class="col-sm-4 portfolio-item">
                            <a href="#portfolioModal4" class="portfolio-link" data-toggle="modal">
                                <img src="src/images/vue.png" class="img-responsive img-thumbnail" alt="">
                            </a>
                        </div>
    
                        <div class="col-sm-4 portfolio-item">
                            <a href="./docs/JohnRader_Resume.pdf">
                                <img src="src/images/resume-icon.png" class="img-responsive img-thumbnail" alt="">
                            </a>
                        </div>
    
                        <div class="col-sm-4 portfolio-item">
                            <a href="#portfolioModal6" class="portfolio-link" data-toggle="modal">
                                <img src="src/images/github-mark.png" class="img-responsive img-thumbnail" alt="">
                            </a>
                        </div>
                        
                    </div>
                </div>
            </section>
            `,
        data: {
          

        },
        methods: {
            showModal: function(){
                seen = true
            }
        }
})

Vue.component('modaltab1',{
    template: `
    <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-lg-offset-2">
                            <div class="modal-body">
                                <h2>Object-Oriented Programming</h2>
                                <hr class="star-primary">
                                <p class="profiletabs">One of the most interesting courses I've taken during my time at university, this class focuses on the many ways Web Applications and hardware can be vulnerable to attacks. Using Python, BASH, PowerShell, and PHP, we created scripts and applications to carry out a variety of different attacks that could be used in real world situations. The full library of projects can be found in my Programming_PenetrationTesing repo on Github located<a href="https://github.com/JohnRader/Programming_PenetrationTesting"> here.</a> <br>
                                    <br>
                                    Two of my favorite projects we were assigned included our own implimentation of a brute force attack using our own Python script and a buffer overflow expliot using shell code we wrote ourselves in Python as well. You can find the documentation and the source code for the brute force attack <a href="https://github.com/JohnRader/Programming_PenetrationTesting/tree/master/Project2"> here.</a> As for the buffer overflow exploit, those files can be found<a href="https://github.com/JohnRader/Programming_PenetrationTesting/tree/master/Project6"> here.</a>
                                    </p>  
                                <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
        `,

    data: {

    },
    methods: {
        modalClose: function(){
            this.$emit('close');
        }
    }
})

Vue.component('modaltab2',{
    template: `
    <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-lg-offset-2">
                            <div class="modal-body">
                                <h2>Object-Oriented Programming</h2>
                                <hr class="star-primary">
                                <p class="profiletabs">Along with Penetration Testing, Object-Oriented Programming was another exciting and fascinating class. We covered topics such as encapsulation, inheritance, polymorphism, abstraction, and patterns.
                                        I was able to learn how to use and libraries and SDKs to develop
                                        applications that provide data processing and visualization services. I was also able to create applications that
                                        managed threads and networking connections in our software. We used Java for the entirety of the course, most of the applications that I created in the class are posted to my Github repo located<a href="https://github.com/JohnRader/OOP_Projects"> here.</a></p>
                                       
                                <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `,
    data: {

    },
    methods:{

    }
})

Vue.component('modaltab3',{
    template: `
    <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">

                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-lg-offset-2">
                            <div class="modal-body">
                                <h2>Programming Languages</h2>
                                <hr class="star-primary">
                                <p class="profiletabs">Of the many differnt languages I have learned and worked with, Python JavaScript and Java are the three in which I would consider myself proficient in. I have spent four years now working with these languages, constantly expanding my knowledge and abilities. I have most recently been working with JavaScript and the many frameworks built for it. My current career aspiration is to become a software engineer, in particular a web developer. I have been spending many hours working on personal projects including this site, and will soon have more to post. </p>
                                 
                                <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `,
    data: {

    },
    methods:{

    }
})

Vue.component('modaltab4',{
    template: `
    <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-lg-offset-2">
                        <div class="modal-body">
                            <h2>Reactivity Frameworks/Web Development</h2>
                            <hr class="star-primary">
                            <p class="profiletabs">I have been spending a lot of time recently trying out differnt JS frameworks to help improve workflow. Of the many I have tried, Vue and React are the two I am going to spend the most time learning and working with. Vue has been my favorite of the two as its been very easy to pick up and intergrate into existing projects. I have integrated this site with Vue as well and I hope to learn a lot more as I continue to use the framework. <br> <br> As expected with Web Development, my HTML and CSS knowledge is extensive and I have worked with many differnt libraries and framework such as Bootstrap, Picnic, and Animate. My current Web Development Github repo is located<a href="https://github.com/JohnRader/Vue-Projects"> Here.</a>It is a little thin as of now but I will be adding more projects in the near future.</p>
                        
                            <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    data: {

    },
    methods:{

    }
})

Vue.component('modaltab6',{
    template: `
    <div class="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-lg-offset-2">
                        <div class="modal-body">
                            <h2>Github</h2>
                            <hr class="star-primary">
                            <p class="profiletabs">All of my work can be found in my<a href="https://github.com/JohnRader"> GitHub.</a></p>
                            <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    data: {

    },
    methods:{

    }
})


Vue.component('contactinfo',{
    template:  `
    <!-- Footer -->
    <footer class="text-center grey-background" id="contactinfo">
            <div class="footer-above">
                <div class="container">
                    <div class="row">
                        <div class="footer-col col-md-4">
                            <h3>Location</h3>
                            <hr class="bottom">
                            <p class="contactinfo">Minooka, Illinois, 60447
                                <br>Chicago, Illinois, 60634</p>
                        </div>

                        <div class="footer-col col-md-4">
                                <h3>Social Media</h3>
                                <hr class="bottom">
                                <p class="contactinfo">
                                    <a href="https://www.facebook.com/john.rader1"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>Facebook<br>
                                    <a href="https://www.instagram.com/johnrader_/"><i class="fa fa-instagram" aria-hidden="true"></i></a></i>Instagram</p>
                        </div>

                        <div class="footer-col col-md-4">
                            <h3>Contact Info</h3>
                            <hr class="bottom">
                            <p class="contactinfo">815-641-2846<br>
                                jcrader238@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-below dark-grey-background">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 footer-text">
                            Copyright &copy; John Rader 2018
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        `,

    data: {

    }
})

var app = new Vue({
    el: '#app',
    data: {
        showModal: false

    },
    methods: {
       

    }
})
