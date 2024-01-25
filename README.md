![Reel Image featuring all of the different fruits of the slot machine, which I created with ChatGPT and Photopea](https://github.com/l3wk3m/slotmachine/blob/main/assets/images/SlotReelsMeasure.jpg?raw=true)

![Original Reel Image taken from a prompt I gave to ChatGPT](https://github.com/l3wk3m/slotmachine/blob/main/assets/images/Original%20Reel%20Icons.png?raw=true)

![Editing Process of the reel using the online image editor Photopea](https://github.com/l3wk3m/slotmachine/blob/main/assets/images/Editing%20in%20photopea.png?raw=true)

![My first flowchart created at the beginning of this project, outlining what I hoped the game loop would be]()

![My final flowchart created at the end of the project detailing the final project game loop]()

![My first wireframe of how I wanted the slot machine to appear on the screen](https://github.com/l3wk3m/slotmachine/blob/main/assets/images/InitialWireframe.png?raw=true)

Welcome to my JavaScript Slot Machine project.

The purpose of this project is to create a fun and immersive slot machine game using only JavaScript, HTML and CSS and deploy it on a cloud based platform. My aims are that the game be:

1. Intuitive - that the user can understand the stakes and the mechanics of the game with minor exploration
2. Responsive - that a similar game experience is felt whether playing on smartphone or laptop
3. Engaging - that the player enjoys the gaming experience

When I was young, my family used to holiday to Wexford over the summers. When we went to the amusements park in Courtown to go on the bumpers, we would always walk past the slot machines on the way in. I was always in awe of the simple game of chance at play there, though it would be years later before my parents would trust me enough to give money to play them.

The appeal of a slots game is that the desired outcome is immediately intuitive and when you match even two icons you'll watch your credit score increase.

The aim of the game is to keep going until you're completely out of credits. There is no ultimate win condition with a gambling game like this.

**Ideal User Experience**

**UI**

When the user opens the page for the first time, populating the top half of the page they will see three vertical boxes, each containing matching icons and then an empty smaller horizontal box below them, while on the bottom half of the page there is the word 'Credit:' with the number 100 beside it, the word 'Bet:' with the number 10 beside it. To the right of these there are 4 button icons: a double up-arrow for incrementing the 'bet' value by 10, a single up-arrow for incrementing the 'bet' value by 1, a down-arrow to decrement the 'bet' value by 1, a double down-arrow for decrementing the 'bet' value by 10. To the right of them again, at the far side of the screen will be 3 buttons: a 'Restart' button for the event of getting a 'Game Over' game condition, an 'All In!' button to bet the total number of credits you have remaining on your next bet and, finally, the 'Spin' button.

The above principal design will be the same whether on phone, tablet, laptop or desktop - a control panel down the bottom of the screen and the 3 reels and a display box up the top of the screen.

What distinguishes the phone and tablet experiences from laptop and desktop devices is that on a phone or a tablet I want the user to _feel_ like their phone or tablet has become a slot machine.

For laptop and desktop devices, the bottom half of the page will still contain all of the controls, however the top half will feature a rectangular container box containing the three reels and the display terminal.

Because the image used for the reels has a very specific pixel value which is used for the CSS transition animation, the size of the reels in pixels is unalterable. To this end, the game will only appear with its intended layout on devices with a width of 330px and greater. This covers all devices listed in dev tools and every device this was tested on but it still bears mentioning.


**Accessibility**

For accessibility purposes, each of the buttons on the right hand side of the screen can be tabbed over, pressing spacebar to activate them. Each button has a "role" and an "aria-label" attribute for screen readers to call when tabbed onto.

The JavaScript also has an Event Listener on the up and down arrows that will increment and decrement the bet amounts.

**Testing**

Here I will touch briefly on the validator tests this

