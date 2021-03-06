const jsonProducts = {
  "componentVisible": [
    {
      "blog":true,
      "products":false,
      "about":false
    }

  ],
  "blog":[
    {
      "title": "Let's code: Hamburger Menu",
      "date":"February 13th, 2019",
      "img": "/images/hamburgerdemo.gif",
      "previewText":"You can find the complete code for this project via <a href=\“https://codepen.io/itsseanl/pen/wNEBxB”>this<\/a> codepen link...",
      "text":"<p>You can find the complete code for this project via <a href=\“https://codepen.io/itsseanl/pen/wNEBxB”>this<\/a> codepen link.<\/p><p>I was scrolling through codepen last night for some ideas I could clone and build on my own for practice when I stumbled upon a hamburger menu. You know, the three stack icon that expands when clicked into a full-screen navigation list? If you spend any time browsing the web on mobile, I’m sure you’ve seen one. <\/p><p>It’s not one of my favorite trends in web design. In terms of practicality, it leaves much to be desired:  It’s less than intuitive for less web-savvy people. It’s slow, often involving flashy animations that delay the user’s access to the links. <\/p><p>That being said, they work well on mobile,  and they’re fun to build. So let’s get started!<\/p><p>We’ll need to start with a button to activate and activate it. I used icons from fontawesome and appended an onclick attribute to it.<\/p><code>&lt;i id=\"menu_open\"onclick=\"javascript:menu()\" class=\"fas fa-bars menu_open\"&gt;&lt;/i&gt;</br>&lt;i id=\"menu_close\" onClick=\"javascript:menu()\" class=\"fas fa-times menu_open\"&gt;&lt;/i&gt;<\/code><p>Then I built a standard list with ul and li elements, designated a nav class and IDs for the unique colors. I set the width and font size to 0 to hide them.<\/p><p>I then wrote an ‘active’ class that extends the width at variable transition speeds in order to get the staggered effect. I rounded up my li elements with document.getElementsByClassName, and then ran  a for loop to append the active class. This was all wrapped in an if/else statement that would run the code in reverse when clicking the close icon.<\/p><code>if (active == false)</br>{for(var i = 0; i < liElems.length; i++){</br>liElems[i].className+=(' active');</br>liElems[i].style.transition = x +\"s all\";</br>x += 0.2;active = true;</br>}</br>}></br>else{</br>x=0.3;</br>active = false;</br>for(var i = 0; i < liElems.length; i++){</br>console.log(liElems[i]);</br>liElems[i].className=('nav');</br>liElems[i].style.transition = x +\"s all\";</br>x += 0.2;</br>}</br>}<\/code><p>Depending on how you’d like to handle switching the icon from open to close, you’ll need some additional css/js to handle that. Viola! That's really all there is to it. Just a bit of pure html, css, and JS to get the job done.<\/p> <p>This is the finished result:<\/p><img  style=display:flex;margin:auto; src=/images/hamburgerdemo.gif height=50% width=50%>"

    },
    {
      "title": "LifeStack! My First Foray into React!",
      "date":"February 8th, 2019",
      "img": "/images/react.png",
      "previewText":"Almost exactly a year ago, I wrote a post on /r/webdev titled <a href=\“https://www.reddit.com/r/webdev/comments/7n7myl/react_is_killing_me/\“>’React is Killing Me.’</\a>...",
      "text":"<p>Almost exactly a year ago, I wrote a post on /r/webdev titled <a href=\“https://www.reddit.com/r/webdev/comments/7n7myl/react_is_killing_me/\“>’React is Killing Me.’<\/a> It received over 300 comments, but the first one gave me all the advice I needed.  <span style=\“font-style=‘bold’;\”>Practice your vanilla JS skill<\/span>.<\/p><p>At the time, I was frustrated because what I was seeing looked like magic. I didn’t even know what an arrow function was. I had no idea Javascript had introduced classes. I could make an educated guess of what a const was, but what in the heck is a let?? I was bringing a rubber chicken to knife fight. I had no idea what was going on.<\/p><p>To be honest, I still don’t know what’s going on. But I’ve stuck with it for the past year, building projects whenever I had a good idea and the chance to sit down and do it after work and on the weekends. And with the help of Andrew Mead’s <a href=\“https://www.udemy.com/react-2nd-edition/\“>’The complete React Web Developer Course (with Redux)<\/a>, a year later I’ve completed my first site with React!<\/p><p>I’m only about halfway through the course, and I’m under no illusion that I’m officially an official &quot;React Developer&quot; but I’m excited to learn more and explore the full potential of the framework!<\/p><p>I’m really enjoying the workflow thus far. I’ve found that splitting each section of your website into its own component provides you the opportunity to keep code extremely organized. I’ve chosen to write separate stylesheets for each component, which has done wonders for me debugging the CSS. Instead of searching through a mountainous, never-ending stylesheet, I have concise, manageable code, all packaged into their own folders, specific to each section of the website. If I wanted to take a piece with me onto the next project, it would be extremely easy to just copy and paste the folder, make a couple of tweaks, and wham, bam, I’ve got a major feature pre-written and ready to go. Love it.<\/p><p>The ability to write javascript directly into your html via JSX also allows for some seriously elegantly written responsive design. For example, switching between pages was as simple as assigning  a state value of visible or hidden, and setting up buttons to change the states accordingly with a click. Then instead of writing a long javascript function to append the div classes, a single line of code with a ternary operator handles the whole shebang. Like I said before, it’s like magic. Except now I know just enough to wield some of it, instead of simply looking on in awe and confusion.<\/p><p>If you want to dig into my code and really see how it all works, go right ahead and <a href=\”https://github.com/itsseanl/lifeStack\”>check it out<\/a>. I’m sure I did more than a few things wrong, so be free to yell at me for it.<\/p><p>Anyway, if you’ve made it this far… thanks for sticking around!   I hope you enjoyed. This is post number one, so the writing skill can only go up from here.<\/p>"

    },
    {
      "title": "placeholder",
      "date":"February 6th, 2019",
      "img": "/images/desk.jpg",
      "previewText":"Aliquam vel metus faucibus, bibendum erat malesuada, condimentum...",
      "text":"Aliquam vel metus faucibus, bibendum erat malesuada, condimentum velit. Vivamus ex ligula, ultrices a pulvinar ac, venenatis ac ligula. Donec semper laoreet dui. Morbi faucibus sagittis pellentesque. Fusce id metus ac magna eleifend varius at quis lectus. Sed pellentesque ex at dolor hendrerit sollicitudin dictum et nulla. Aliquam rhoncus justo elit, non tincidunt nibh placerat id. Vestibulum vestibulum condimentum orci, quis tempus ipsum pharetra at. Proin tristique pretium mollis. Praesent metus sapien, facilisis in lectus ut, maximus varius erat."

    },
    {
      "title": "placeholder",
      "date":"February 6th, 2019",
      "img": "/images/desk.jpg",
      "previewText":"Aliquam vel metus faucibus, bibendum erat malesuada, condimentum...",
      "text":"Aliquam vel metus faucibus, bibendum erat malesuada, condimentum velit. Vivamus ex ligula, ultrices a pulvinar ac, venenatis ac ligula. Donec semper laoreet dui. Morbi faucibus sagittis pellentesque. Fusce id metus ac magna eleifend varius at quis lectus. Sed pellentesque ex at dolor hendrerit sollicitudin dictum et nulla. Aliquam rhoncus justo elit, non tincidunt nibh placerat id. Vestibulum vestibulum condimentum orci, quis tempus ipsum pharetra at. Proin tristique pretium mollis. Praesent metus sapien, facilisis in lectus ut, maximus varius erat."

    },
    {
      "title": "placeholder",
      "date":"February 6th, 2019",
      "img": "/images/desk.jpg",
      "previewText":"Aliquam vel metus faucibus, bibendum erat malesuada, condimentum...",
      "text":"Aliquam vel metus faucibus, bibendum erat malesuada, condimentum velit. Vivamus ex ligula, ultrices a pulvinar ac, venenatis ac ligula. Donec semper laoreet dui. Morbi faucibus sagittis pellentesque. Fusce id metus ac magna eleifend varius at quis lectus. Sed pellentesque ex at dolor hendrerit sollicitudin dictum et nulla. Aliquam rhoncus justo elit, non tincidunt nibh placerat id. Vestibulum vestibulum condimentum orci, quis tempus ipsum pharetra at. Proin tristique pretium mollis. Praesent metus sapien, facilisis in lectus ut, maximus varius erat."

    },
  ],
"products": [
    {
      "name": "Macbook Air",
      "price": "$999",
      "description": "<p>The MacBook Air is a classic. It’s gotten a bad wrap lately due to the fact that apple is STILL selling the previous gen, which is essentially a 8 year old laptop, for $1000.  But with admirable battery life, fast SSD storage that still holds up today, legacy ports, and that coveted chiclet style keyboard, the pre-retina MacBook Air should still be an option for anyone looking to enter the apple ecosystem on a budget. <\/p><p>Now, to be clear, I DON’T think spending $1000 for one new from the store is an idea even worth considering. But if you can live with a less than stellar sub-1080p display, and you’re only going to be browsing the web, writing the occasional email, and streaming music/video, an old MacBook Air is more than capable. <\/p><p>Keep your eyes peeled for a good deal. If you have a family member who’s upgraded to the latest Air or Pro, they may be willing to part ways with their ol’ reliable for well under the $1000 asking price. And if you don’t mind settling for the 11” version (which I always thought was extremely cool) you can likely find one even cheaper. A quick amazon search netted me <a href=“https://amzn.to/2E49UMv”>this find<\/a> which is definitely a tempting deal.<\/p><p>Whatever you do, definitely go for an 8gb RAM model. 4gb probably wasn’t enough when they came out, and it’s definitely not enough in 2019! Now if you’re looking at the latest and greatest MBA, it might be worth it to just go for the baseline Pro, but that’s for another post.<\/p>",
      "image": "images/mba.png"
    },
    {
      "name": "Custom Build",
      "price": "$780",
      "description": "Aliquam pretium mi non faucibus dapibus. Integer ac urna ante. Donec tortor tellus, pulvinar et nisi id, auctor elementum tellus. Cras sed metus non metus suscipit faucibus. Donec varius ex nec vehicula tincidunt. In tempor risus ut finibus aliquam. Vivamus ipsum enim, pulvinar vel urna non, gravida ultrices nisl. Suspendisse potenti. Pellentesque vel risus sed quam fermentum mattis in at nisi. Quisque odio dui, aliquet vitae nisl interdum, tincidunt lacinia arcu. Sed blandit ex placerat, luctus nibh in, convallis est. Duis vel egestas diam, ornare ultricies erat",
      "image": "images/carbide400c.png"
    },
    {
      "name": "HP 25es IPS FHD",
      "price": "$150",
      "description": "Aliquam pretium mi non faucibus dapibus. Integer ac urna ante. Donec tortor tellus, pulvinar et nisi id, auctor elementum tellus. Cras sed metus non metus suscipit faucibus. Donec varius ex nec vehicula tincidunt. In tempor risus ut finibus aliquam. Vivamus ipsum enim, pulvinar vel urna non, gravida ultrices nisl. Suspendisse potenti. Pellentesque vel risus sed quam fermentum mattis in at nisi. Quisque odio dui, aliquet vitae nisl interdum, tincidunt lacinia arcu. Sed blandit ex placerat, luctus nibh in, convallis est. Duis vel egestas diam, ornare ultricies erat",
      "image": "images/hp25es.png"
    },
    {
      "name": "iPad 6th Gen",
      "price": "$329",
      "description": "Aliquam pretium mi non faucibus dapibus. Integer ac urna ante. Donec tortor tellus, pulvinar et nisi id, auctor elementum tellus. Cras sed metus non metus suscipit faucibus. Donec varius ex nec vehicula tincidunt. In tempor risus ut finibus aliquam. Vivamus ipsum enim, pulvinar vel urna non, gravida ultrices nisl. Suspendisse potenti. Pellentesque vel risus sed quam fermentum mattis in at nisi. Quisque odio dui, aliquet vitae nisl interdum, tincidunt lacinia arcu. Sed blandit ex placerat, luctus nibh in, convallis est. Duis vel egestas diam, ornare ultricies erat",
      "image": "images/ipad.png"
    },
    {
      "name": "Logitech K840 Mechanical Keyboard",
      "price": "$70",
      "description": "Aliquam pretium mi non faucibus dapibus. Integer ac urna ante. Donec tortor tellus, pulvinar et nisi id, auctor elementum tellus. Cras sed metus non metus suscipit faucibus. Donec varius ex nec vehicula tincidunt. In tempor risus ut finibus aliquam. Vivamus ipsum enim, pulvinar vel urna non, gravida ultrices nisl. Suspendisse potenti. Pellentesque vel risus sed quam fermentum mattis in at nisi. Quisque odio dui, aliquet vitae nisl interdum, tincidunt lacinia arcu. Sed blandit ex placerat, luctus nibh in, convallis est. Duis vel egestas diam, ornare ultricies erat",
      "image": "images/k840.png"
    },
    {
      "name": "Logitech M570 Trackball Mouse",
      "price": "$50",
      "description": "<p>I bet you thought they stopped making trackball mice in the 90s, huh? Well you definitely thought everyone stopped using them. Wrong on both counts!<\/p><p>Way back in the day, I found an OG Silver/Red Logitech Trackman mouse in a pile of junk at a garage sale. Being the big nerd I am, I asked my mom if she would buy it for me, and she did.<\/p><p>Well, it worked great! Being plagued with limited desk space my whole life, I quickly adapted to the trackman and loved that utility it provided in tight computing spaces. Obviously there is a bit of a learning curve, but after a week you’ll be trackballing all over the screen with ease.<\/p><p>Unfortunately, about a year ago the left click button stopped registering clicks consistently. Bummer, because an original trackman like that in good condition goes for a pretty penny these days! But fear not, because Logitech has brought it into the 21st century With the <a href=“https://amzn.to/2N7S4et”>M570 Trackball Mouse.<\/a><\/p><p>With a low-profile wireless USB receiver, replaceable AAA batteries that last forever, and a few extra buttons for added functionality, the M570 is my go-to daily clicker.<\p><p>Gaming is another story, and I’ve yet to decide if I’m trash at FPS games because of my mouse of my lack of coordination, but I will report back after a week of Apex Legends.<\/p>",
      "image": "images/m570.png"
    },
    {
      "name": "Pixel 2 XL",
      "price": "$850",
      "description": "Aliquam pretium mi non faucibus dapibus. Integer ac urna ante. Donec tortor tellus, pulvinar et nisi id, auctor elementum tellus. Cras sed metus non metus suscipit faucibus. Donec varius ex nec vehicula tincidunt. In tempor risus ut finibus aliquam. Vivamus ipsum enim, pulvinar vel urna non, gravida ultrices nisl. Suspendisse potenti. Pellentesque vel risus sed quam fermentum mattis in at nisi. Quisque odio dui, aliquet vitae nisl interdum, tincidunt lacinia arcu. Sed blandit ex placerat, luctus nibh in, convallis est. Duis vel egestas diam, ornare ultricies erat",
      "image": "images/pixel2xl.png"
    },
    {
      "name": "TCL 49' 4k HDR TV",
      "price": "$270",
      "description": "Aliquam pretium mi non faucibus dapibus. Integer ac urna ante. Donec tortor tellus, pulvinar et nisi id, auctor elementum tellus. Cras sed metus non metus suscipit faucibus. Donec varius ex nec vehicula tincidunt. In tempor risus ut finibus aliquam. Vivamus ipsum enim, pulvinar vel urna non, gravida ultrices nisl. Suspendisse potenti. Pellentesque vel risus sed quam fermentum mattis in at nisi. Quisque odio dui, aliquet vitae nisl interdum, tincidunt lacinia arcu. Sed blandit ex placerat, luctus nibh in, convallis est. Duis vel egestas diam, ornare ultricies erat",
      "image": "images/tcl49.png"
    },
    {
      "name": "Logitech z533 Desktop Speakers",
      "price": "$100",
      "description": "Aliquam pretium mi non faucibus dapibus. Integer ac urna ante. Donec tortor tellus, pulvinar et nisi id, auctor elementum tellus. Cras sed metus non metus suscipit faucibus. Donec varius ex nec vehicula tincidunt. In tempor risus ut finibus aliquam. Vivamus ipsum enim, pulvinar vel urna non, gravida ultrices nisl. Suspendisse potenti. Pellentesque vel risus sed quam fermentum mattis in at nisi. Quisque odio dui, aliquet vitae nisl interdum, tincidunt lacinia arcu. Sed blandit ex placerat, luctus nibh in, convallis est. Duis vel egestas diam, ornare ultricies erat",
      "image": "images/z533.png"
    }

]
};

export default jsonProducts;
