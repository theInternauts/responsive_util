# Responsive Design Helper
====
*A Developer/Designer Tool*

This is a quick and dirty jQuery plugin to place a small HTML DOM box in on a working page that will be a visual indicator of the preset @media query CSS context.

**this needs A TON of work to be useful to anyone but me at the moment.**
### The current road map includes:
*(in no particular order)*
+ proper documentation
+ allow for adding fewer OR extra media query contexts in the configuration object (I don't know about this)
+ proper usage examples
+ console functions for realtime threshold changes (I don't know about this)
+ feature to click the indicator to cycle through the media query widths
+ consider a templating engine (probably overkill)
+ create options to change position of the context indicator -- maybe on a right+click?
+ real-time auto-detection of CSS media queries to avoid and outmode the afore mentioned console methods
+ need function to destroy/reset DOM nodes, CSS entries, the appended script tag, and JS objects ---a  FULL DESTROY command
+ maybe set an option to look for a flag in the session cookie to be visibly only when a specific variable is present. This will allow for integration with certain CMSs (Drupal, WordPress, Concrete 5, etc.) in admin modes
+ ~~maybe have that destroy be set on a timer for testing and then it executes. This should be setable in the OPTIONS object~~
+ ~~create console functions for enabling and disabling the plugin on the fly (need not lose settings)~~
+ ~~handle defaults better~~
+ ~~accepting an options object for easy configuration upon instantiation~~
    

Your ideas are welcome.  [Email Cricket] (mailto:cricketw@WeAreTheInternauts.com)
