# CMD Sponge Bob Mocking
Alright, I admit, this is something just kind of dumb, but due to my rather _bratty_ attitude,
I was in need of a quick way to create sponge bob like mocking without killing my shift key at random.

And well, I was lazy...

# Install

`npm install cmd-spongebob-mocking`, throw in a `-g` flag for some global lunacy and mocking.

# Use

I mean, you use the command with `mock <input>`, bellow is just specific ways to copy the output to your clipboard.

## macOS

`mock <input> | pbcopy`

## Windows

`mock <input> | clip`  <- That shit works in git bash too (Granted that clip.exe from System32 is in your path, but it should be)

## Unix

Fuck me if I'm going to go about listing every way to use this on unix. A short google search tells me Xclip is the way to go,
how to install that on your particular flavour of unix is on you. Other than that

`mock <input> | xclip`

# Tests

A HA HA HA HA HA. This was a 2 min project, can't be arsed to do unit testing for something as dumb as this, and honestly,
I spent more time on the README than anything else...

# LICENSE

MIT, for reasons I suppose, full details if you don't know it by heart, can be retrieved in LICENSE.md