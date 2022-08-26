# Shepaug School Auto Schedule Tool

This is a tool I made because the new schedule is way too complicated for anyone to remember. This tool takes a list of all of you classes and formats them into a schedule for the current day. It even takes into account the differences between the middle school and high school schedules. The tool currently supports regular days, advisory days, early release days, and extended Spartan Period days.

## How to use

The Shepaug School Auto Schedule Tool is designed to be a lightweight replacement for the old Google Calendar and Powerschool schedules. The first time you visit the site, the schedule will be prefilled with placeholder class names and set to middle school mode. If you want to change the class names, or high school status, click on the day header located at the top of the page in large bold letters. This opens the preferences menu. In-depth information on what all the feilds do is located below. If you are in middle school, uncheck the box next to "HS?". Pressing the "Apply Settings" button will reload the tool with the preferences that you chose. If you bookmark the page, you will not lose you preferences when you open the bookmark since all the data is stored in the URL.

### Sidebar Guide

| Field | Function |
|---|---|
| Period 1-7 Text Input | This changes the display name for each of the seven classes. You can also store additional information like room numbers and teacher names if you would like. |
| Period 1-7 Color Input | Changes the color that that period's display name will appear in. Useful for organization and aesthetics. |
| HS? | Changes the schedule from middle school mode to high school mode. Middle schoolers leave it blank. High schoolers should have it checked off. This is due to differences in the Period 3 / Lunch schedules between middle school and high school. |
| Colored Header | If checked, the day header will appear in the color if whichever day it is. Purely aesthetic. |
| Apply Settings | Applies the above settings to your URL and reloads the page. |
| Reset | Resets all above settings to their default values and reloads the page. Functionally identical to opening the page without loaded settings. |
| Generate QR Code | Generates a QR code for the current page including all settings. Useful for installing the iOS app (more info below). |
| Footer Links | Various helpful clickable links. |

## iOS App Setup

For checking your schedule on the move, theres the iOS app. Setup is fairly straightforward
1. Setup your schedule in the standard browser version. Make sure to apply your settings.
2. Press "Generate QR Code" and wait for the QR code to appear.
3. On your iOS device, scan the QR code with the camera app and press the notification that appears. You should now be on the Auto Schedule site with all your settings retained in Safari.
4. Press the Share button (bottom center on iPhone). Scroll down to "Add to Home Screen". Press it.
5. Change the app title to whatever you want and hit "Add".
6. The Auto Schedule app is now on your homescreen.

The Auto Schedule iOS app works just like the browser version, but as an easy to manage app on your phone. Keep in mind that whenever you open the app, it will open with the settings that you did the setup with. If you want to change your settings you will have to delete the app and reinstall with the new settings. For smaller devices, the sidebar menu may be wider than the width of the screen. Rotating you phone into landscape mode should let you use it to it's fullest capacity is this happens.

NOTE: It is possible to install the iOS app with only your iOS device. Setup the Auto Schedule in Safari and omit steps 2-3.

## Inline HTML

The settings menu allows you to write in custom text for class names, but you can also use HTML as class names. Some examples of this would be using a `<span>` element to add multiple colors to your class name or using an `<a>` element to add a hyperlink. The possibilities are endless. Since the text box size is relatively small, it is reccomended that you write your HTML inside of an external text editor and paste it in. [Heres an in-browser text editor](https://calebri.github.io/shepaug-schedule/text-editor/), courtesy of [Mike Francis](https://twitter.com/_mikefrancis/status/469788991668383744?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E469788991668383744%7Ctwgr%5E7b02d413e2d1e6043bac2a5c7cf0ad46e3d6bd22%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.pcworld.com%2Farticle%2F439696%2Fturn-any-browser-tab-into-a-basic-text-editor.html).

## TLDR;

1. Click on the big bold header for the settings menu
2. Fill out the forms and click apply
3. Bookmark the page to save your data

## Bug Reports
If you notice that something is not quite lining up with the real schedule, feel free to submit an issue. I will try to get it fixed ASAP. On the contrary, I will also review any feature requests that are submitted as an issue.
