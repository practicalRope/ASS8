
#font
VCR_OSD_MONO_1.001.ttf was changed to Retron2000.ttf.
It flows better, but it also is more readable. It does on the other hand not break with the theme, which is a must.

#intro (who is cluster buster?)
Iframes (embeded music players), changed from a musicplayer to image only music player style embed.
This should help it flow with the text, while also feeling more relevant.

#image margins and style
removed inline styles on images and instead put these styles in the stylesheet.
Modified the margins on the image elements to improve text flow.

#added "smooth scroll"
This makes navigation more understandable, as it implicitly tells the user where you are "traveling", instead of simply "teleporting".
It does sadly not have full support coverage.

#added "page progress bar"
This bar is located at the top, it should help the user know where on the page he/she is and how much is "left" of the page.
#noticed white or light theme issue.
Had to revisit the "bar" feature, as i noticed that the theme in chrome browser was making the tiny pink line very hard to notice.
I solved this by adding a thin black line at the top and increasing thickness.

#"Back Up" Button
Changed the link from '#top' to '#' as this will go to the TOP of the page and not to the top text. It feels more consistent.

