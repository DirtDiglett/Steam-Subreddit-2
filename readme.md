# /r/Steam v3 Subreddit Stylesheet

#### Important Note
This project uses Sass, that means that editing the CSS directly is a bad idea as any changes get lost on the next export. Sass also heavily compresses the CSS so it won't be pretty, this is because Reddit has a 100KB limit on CSS and we want to use as much of that as possible.

So in short, don't edit the CSS directly. Only edit the Sass or send me (/u/dirtdiglett) a message with proposed changes and I'll do it.

## Flairs

NOTE: This theme will likely use different styled flairs. This list will likely change.

Here is a list of the flair classes:
#### Colored Text
* `redflair` - Small Steam Logo on a Red Background, designed for custom text.
* `purpleflair` - Small Steam Logo on a Purple Background, designed for custom text.
* `greenflair` - Small Steam Logo on a Green Background, designed for custom text.
* `orangeflair` - Small Steam Logo on a Orange Background, designed for custom text.
* `blueflair` - Small Steam Logo on a Blue Background, designed for custom text.
* `greyflair` - Small Steam Logo on a Grey Background, designed for custom text.

#### Number of Games owned
* `gamebadge1`
* `gamebadge5`
* `gamebadge10`
* `gamebadge25`
* `gamebadge50`
* `gamebadge100`
* `gamebadge250`
* `gamebadge500`
* `gamebadge1000`
* `gamebadge2000`
* `gamebadge3000`
* `gamebadge4000`
* `gamebadge5000`

#### Years on Steam Account
* `1year`
* `2year`
* `3year`
* `4year`
* `5year`
* `6year`
* `7year`
* `8year`
* `9year`
* `10year`
* `11year`
* `12year`

#### Main Flairs, games and such. These are the wide flairs.
* `steamlogo` - Steam logo on grey background.
* `csgo` - Counter-Strike: Global Offensive logo
* `tf2` - Team Fortress 2 Logo full.
* `dota` - DOTA 2 Logo
* `left4dead` - Left 4 Dead logo (Left 4 Dead 1 style)
* `garrysmod` - Garry's Mod
* `portal` - Portal 1 Logo
* `sfm` - Source Filmmaker
* `redteamflair` - RED logo from Team Fortress 2
* `bluteamflair` - BLU logo from Team Fortress 2

#### Small flairs. These are small square icon flairs.
* `isaac` - Isaac's head from Binding of Isaac: Rebirth
* `portal2mini` - Portal 2 "Person running through a Portal" icon
* `halflife` - Half Life 2 Logo
* `tf2mini` - Team Fortress 2 Logo
* `portalmini` - Aperture Science logo
* `borderlands` - Borderlands' Vault Symbol
* `csgomini` - Small Counter-Strike Counter Terrorist Icon
* `heart` - Little blue lego-esque heart.
* `blackops` - Icon from Black Ops 2
* `blueflag`- Blue Flag from the Steam Summer Event
* `greenflag`- Green Flag from the Steam Summer Event
* `pinkflag`- Pink Flag from the Steam Summer Event
* `purpleflag`- Purple Flag from the Steam Summer Event
* `redflag` - Red Flag from the Steam Summer Event
* `lambda` - Half-Life Lambda in a circle.

#### Special Flairs, for users that contribute to the community or other unique circumstances
* `official` - For VALVE Employees.
* `es` - For /u/jshackles, developer of Enhanced Steam.
* `oreos` - For /u/xPaw and other SteamDB devs.
* `pressure` - For /u/dirtdiglett, developer of Pressure for Steam.
* `gauge` - For /u/lakinwecker (To confirm if this is the correct dev), developer of Gaugepowered.com
 
> If there's any flair that you need added, send me a message on Reddit and let me know.
<3 ~/u/Dirt Diglett

## Tips
1. Reddit has limits. CSS Cannot exceed ~100KB so avoid unecessary CSS where possible.
1. Keep comments out of the stylesheet where possible. We avoid this on this project by using Sass comments (// instead of /* */) as these aren't included in the compressed export copy.
2. Always indent using tabs, not spaces.
3. Use shorthand as much as possible.
4. Don't use prefixes such as -webkit, -ms, -o, etc. CSS3 is common enough on all the modern browsers to not need it, and autoprefixer is included in this that solves any problems with this automagically.
5. Stick to the subreddit color scheme. Use the variables for consistency

## Contibuting:
In order to properly contribute to this project there's a few requirements:

1. [Sass (Command Line)](http://sass-lang.com/install) - This is a super helpful CSS Preprocessor that permits us to use proper nesting, variables, includes, etc. When outputting it shrinks, formats and makes the file as small as possible. If running Windows you'll need [Ruby Installer](http://rubyinstaller.org/) first.
2. [Node.js](https://nodejs.org/en/) - This is needed to use Grunt. That's all.
3. Grunt - This is an insanely amazing task runner that automates a lot of other tools. To install this open Node.js command prompt and navigate to the repo and run `npm install -g grunt-cli` With Grunt don't worry about the gruntfile.js or package.js - these are already in the repo.

Once you have all of these tools installed you'll need to install the grunt tasks. Run these commands in the node.js command prompt:

```
npm install -g grunt
npm install -g grunt-cli
npm install grunt-contrib-sass --save-dev
```

Now you should be able to navigate to the repo location on your PC in the node.js command prompt and run the command `grunt` and it should perform the rest for you.

#### Using Sass
Sass is an amazing way of working with CSS and opens up an array of useful tools. If you know CSS then Sass is a breeze. The primary features we'll be using in this project will be variables, nesting, and color controls such as lighten() and darken(). Most of the others won't be needed.

[Learn more about Sass](http://sass-lang.com/guide)