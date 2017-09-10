# /r/Steam Subreddit Stylesheet

#### Important Note
This project uses Sass, that means that editing the CSS directly is a bad idea as any changes get lost on the next export. Sass also heavily compresses the CSS so it won't be pretty, this is because Reddit has a 100KB limit on CSS and we want to use as much of that as possible.

So in short, don't edit the CSS directly. Only edit the Sass and do a pull request or send me (/u/dirtdiglett) a message with proposed changes and I'll do it.

## Flairs

Flairs are grouped into the "type" of flair they are, with the CSS classes combining to form the flair.

The first class tells the type of flair:

`small` - Small icon flairs based on popular games.
`year` - Years of Service on Steam. These are not applied manually but via the bot.
`game` - Games Owned on Steam.
`special` - Larger flairs manually granted to users for various reasons.

The second determines the flair amongst the type, for example if we wanted the "8 years of service" flair, we'd apply the classes:
`year` `8`

or if we want to give a user the VALVe flair:
`special` `valve`



<3 ~/u/Dirt Diglett

## Tips
1. Reddit has limits. CSS Cannot exceed ~100KB so avoid unecessary CSS wherever possible.
1. Keep comments out of the stylesheet where possible. We avoid this on this project by using Sass comments (// instead of /* */) as these aren't included in the compressed export copy.
2. Always indent using tabs, not spaces.
3. Use shorthand as much as possible.
4. Don't use prefixes such as -webkit, -ms, -o, etc. CSS3 is common enough on all the modern browsers to not need it.
5. Stick to the subreddit color scheme. Use the variables for consistency.

## Contibuting:
Feel free to create pull requests for changes and I will consider them and discuss them, or apply them where appropriate :)