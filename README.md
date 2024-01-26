#**Welcome to my JavaScript Slot Machine Project**

![Display of various UIs side-by-side](https://github.com/l3wk3m/slotmachine/blob/main/assets/images/ScreensUI.jpg?raw=true)

The purpose of this project is to create a fun and immersive slot machine game using only JavaScript, HTML and CSS and deploy it on a cloud based platform. My key goals are that the game be:

1. Intuitive - That the user can understand the stakes and the mechanics of the game with minor exploration
2. Responsive - That a similar game experience is felt whether playing on smartphone or laptop
3. Engaging - The user experiences a sense of risk and reward when betting their credits

and then the final goal of the project at large is

4. The I develop and test a simple working JavaScript application that use DOM manipulation to give the user a satisfying in-browser gaming experience 

I will address each of these goals across sections listed below:

1. Ideal User Experience
2. UI
3. Features & Their Development
4. Accessibility
5. Testing

Thank you for taking the time to explore this project - I had a huge amount of fun building it!

##**Ideal User Experience**

At the very beginning of this project I outlined what I thought the core user experience would be with the following flowchart:

![My first flowchart created at the beginning of this project, outlining what I hoped the game loop would be](https://github.com/l3wk3m/slotmachine/blob/main/assets/images/Slot%20Machine%20Game%20Loop%20Flowchart.png?raw=true)

Although I believe I did capture the core gameplay loop here very succinctly, there is a lot of devil in the detail of the various ways someone can choose the amount they want to bet.

There are four buttons for increasing and decreasing the bet amounts (you can also use the arrow keys to this end) and then one button for going all in (betting the full amount of credits you currently have).

When the user has chosen their bet amount, they click spin and the slot animation starts. The user needs to wait until the spin finishes before they find out whether they've won or lost.

This was done intentionally to build suspense, and bezier curves were used for the transition timing to increase that sense of anticipation as the reel begins to slow down. At the end of the slow there is a slight overshoot, past the desired value to add some additional suspense.

The user should feel a sense of risk and a sense of thrill as the slot reels are turning, which should resolve to either a sense of satisfaction and reward for matching two icons, a greater sense of reward for matching all 3 icons or a sense of disappointment for matching no icons and losing their bet amount.

If the user gets to a game over and is frustrated but excited enough to restart from 100 credits and go again then I've achieved what I set out to achieve.

##**UI**

Pictured below is the wireframe I made with Balsamiq of how I first pictured the slot machine would look when completed:

![My first wireframe of how I wanted the slot machine to appear on the screen](https://github.com/l3wk3m/slotmachine/blob/main/assets/images/InitialWireframe.png?raw=true)

Here's how the UI looks on smartphones and tablets:

![Smartphone UI](https://github.com/l3wk3m/slotmachine/blob/main/assets/images/phoneUI.png?raw=true)

![Tablet UI](https://github.com/l3wk3m/slotmachine/blob/main/assets/images/tabletUI.png?raw=true)

And here's how it looks on laptop and desktop:

![Laptop UI](https://github.com/l3wk3m/slotmachine/blob/main/assets/images/laptopUI.png?raw=true)

![Desktop UI](https://github.com/l3wk3m/slotmachine/blob/main/assets/images/desktopUI.png?raw=true)

When the user opens the page for the first time, populating the top half of the page they will see three vertical boxes, each containing matching icons and then an empty smaller horizontal box below them, while on the bottom half of the page there is the word 'Credit:' with the number 100 beside it, the word 'Bet:' with the number 10 beside it. To the right of these there are 4 button icons: a double up-arrow for incrementing the 'bet' value by 10, a single up-arrow for incrementing the 'bet' value by 1, a down-arrow to decrement the 'bet' value by 1, a double down-arrow for decrementing the 'bet' value by 10. To the right of them again, at the far side of the screen will be 3 buttons: a 'Restart' button for the event of getting a 'Game Over' game condition, an 'All In!' button to bet the total number of credits you have remaining on your next bet and, finally, the 'Spin' button.

The above principal design will be the same whether on phone, tablet, laptop or desktop - a control panel down the bottom of the screen and the 3 reels and a display box up the top of the screen.

What distinguishes the phone and tablet experiences from laptop and desktop devices is that on a phone or a tablet I want the user to _feel_ like their phone or tablet has become a slot machine.

For laptop and desktop devices, the bottom half of the page will still contain all of the controls, however the top half will feature a rectangular container box containing the three reels and the display terminal.

Because the image used for the reels has a very specific pixel value which is used for the CSS transition animation, the size of the reels in pixels is unalterable. To this end, the game will only appear with its intended layout on devices with a width of 330px and greater. This covers all devices listed in dev tools and every device this was tested on but it still bears mentioning.

##**Features & Their Development**

Each of the three reels on the slot machine contains 9 icons each spaced out from one another by exactly 103 pixels. I generated the icons using openAI's Dall-E GPT, which returned the following image from my prompt:

![Original Reel Image taken from a prompt I gave to ChatGPT](https://github.com/l3wk3m/slotmachine/blob/main/assets/images/Original%20Reel%20Icons.png?raw=true)

I then brought this into photopea (a free browser-based Photoshop clone) to arrange the icons into their 'reels':

![Editing Process of the reel using the online image editor Photopea](https://github.com/l3wk3m/slotmachine/blob/main/assets/images/Editing%20in%20photopea.png?raw=true)

The top half of the screen also features the Result panel. This returns a message of whether you've won, won big or lost when the spin animation for the reels completes.

![Results screen](https://github.com/l3wk3m/slotmachine/blob/main/assets/images/Result%20Feature.jpg?raw=true)

The bottom half of the screen features the user-panel. The 'Credit' and 'Bet' amounts are handled using DOM navigation and manipulation from Event Listeners attached to the seven buttons on the user panel.

Clicking the up-arrow and the double up-arrow increase your bet amount by 1 and 10 respectively. Your bet value will also increase by using the up arrow on your keyboard.

Clicking the down-arrow and the double down-arrow will decrease your bet amount by 1 and 10 respectively. Your bet value will also decrease by using the down arrow on your keyboard.

![Feature image of the arrows on the screen](https://github.com/l3wk3m/slotmachine/blob/main/assets/images/Buttons%20Feature.jpg?raw=true)

The 'All-in!' button instantly sets your bet amount to equal the number of credits you have.

![Feature image of the all in button and the credit and bet values equalling each other](https://github.com/l3wk3m/slotmachine/blob/main/assets/images/All%20In%20Feature.jpg?raw=true)

The 'Restart' button gives you the chance to reset the game state back to the start.

![Feature image of the reset button](https://github.com/l3wk3m/slotmachine/blob/main/assets/images/Restart%20Feature.jpg?raw=true)

The 'Spin' button executes the main slot machine mechanic. It instantly subtracts your Bet value from your Credit value, returning the result of that sum to update your Credit value with DOM manipulation. It then starts the spin animation which, once resolved, will either return you a reward equal to (Bet * 3) for matching 2 icons across the 3 reels and (Bet * 10) for matching all three reels. A message then gets pushed to the Result window letting the user know if they've won and the user's credit amount is updated appropriately

![Feature image of the spin button](https://github.com/l3wk3m/slotmachine/blob/main/assets/images/Spin%20Feature.jpg?raw=true)

##**Accessibility**

For accessibility purposes, each of the buttons on the right hand side of the screen can be tabbed over, pressing spacebar to activate them. Each button has a "role" and an "aria-label" attribute for screen readers to call when tabbed onto.

The JavaScript also has an Event Listener on the up and down arrows that will increment and decrement the bet amounts.

##**Testing**

Here I will touch briefly on the validator tests this has passed, then I will break down my testing process, the bugs I uncovered in the process and what steps I took to fix them.

*Bugs*
I rolled out a githun page deployment of my project and shared it with friends, family, a work group chat and the Code Institue slack channel.

Before I go into the bugs this research uncovered, I will briefly explain how I expected the program to work and what checks I had put in place for anticipated problems before deployment:

1. Clicking spin deducts your bet amount from your credit amount and starts the reel spinning animation.

2. Each reel lands on a value generated with the Math.random() method.

3. You can click the up or down arrows to increase or decrease your bet amount.

4. Your bet value can not be increased above your credit value or decreased below 1 - betting negative values is not permitted, betting more than you have is not permitted.

This was everything I had accounted for and the version I deployed worked to these principals. The bugs discovered when I rolled the deployment for testing and their solutions were as follows:

1. You can spin multiple times before the first spin resolves and bet as much as you like before your credits are effected by the result of the first spin

*Solution*: Write a function that disables the 'Spin' button until the animation ends and the result is returned. Include a method to re-enable the button that will be called, so long as you have not met the game's lose conditions.

2. Bet amounts exceding credit amounts - Although the arrow keys are set up so that you can't go above your credit amount or below 1, if you bet more than half your pot and lose your bet amount, you bet will then be at a value

*Solution*: Write a function called resetBigBet which sets your bet amount = to your credit amount for after your spin resolves. If you bet everything and the resetBigBet sets your bet amount == 0, meaning your credit amount == 0, then it returns a game over state.

3. Clicking 'All In' while the reels are spinning, after you've just bet everything, sets the 'Bet' and 'Credit' values both to zero before the spin finishes, returning a Game Over state when the spin is done (even if you won the spin)

*Solution*: Write a function that disables the 'All In' button while the reels are in motion, that gets re-enabled when the spin is done and you have your result.

It became very clear very quickly that there was no substitution for lots of testing when it came to bug discovery and fixing. Using a large number of people to test this project is definitely going to be something I heavily incorporate into my workflow on future projects.

##**External Code Credit**

I leaned on a couple of tutorials for bits of code in this project.

For inspiration for the UI and for the bit of code that I used in the spinAnimation function that uses template literals to govern where the spin for each reel ends up by updating the transition and backgroundPositionY. The tutorial from CodeJos's youtube channel and can be found here: [How to make a slot machine - CodeJos](https://www.youtube.com/watch?v=boI2B4Gpp34)

The video I learned about the setTimeOut() method from is HowToCodeSchool's youtube tutorial: [How to delay javascript function call - HowToCodeSchool](https://www.youtube.com/watch?v=Gd3qyr9llwU)

The video I learned how to properly call a keyboard key with an Event Listener for increasing and decreasing the bet amount with the up and down keys was: [How to Interact With the Keyboard - dcode](https://youtu.be/Q3ktcptd2yI?si=qJsY55Xoz-6vomFQ)

##**Conclusion**

I'm extremely pleased with how this project has turned out.

It's very simple in its scope and I feel I bit off just the right amount to get my teeth stuck into applying my recently acquired JavaScript skills and putting my love of problem-solving to good use.

Thank you for taking the time to look through my JavaScript Slot Machine Project.

I hope you had fun.