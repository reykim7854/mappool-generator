# osu! Mappool Generator (Web Based)

A Mappool Generator for osu tournament livestreams  
[osu! Forum Post](https://osu.ppy.sh/community/forums/topics/937671)

---

## How to Use the Generator

1. Go to the [mappool-generator](https://mrayhanhakim.github.io/mappool-generator) page to start using the program.
2. You'll be greeted with the first form right away, fill in all of the boxes for each pool for how many maps that you want, The max input for each pool is currently 10 for now, Then click next.  
   ![Imgur](https://i.imgur.com/Ph2zqG1.png "First Form Example")
3. Fill in the next form boxes with the beatmap id that you want to use for each pool. For the API key, you need to request it from [The API request page](https://old.ppy.sh/p/api) or by clicking the title on the form. If you want to change for how many maps that you want to use for each pool, you can click the previous button. If not, you can click next.  
   ![Imgur](https://i.imgur.com/64inYyf.png "Second Form Example")
4. Then, You'll be greeted with the preview of the result! If you want to change your previous inputs, you can scroll down and click the previous button.
   ![Imgur](https://i.imgur.com/QOHv4Ky.png "Result!")
5. You can save the result to your local device by right clicking the page and click save as (Google Chrome) or save page as (Mozilla Firefox) or press ctrl/command + s, and save it in a folder so that you won't have to input the same mappool if you want to use that result multiple times. (Optional, but **Recommended**)  
   ![Imgur](https://i.imgur.com/ao9w1Mz.png "Chrome Context Menu")
6. To use the result, left click on the blank left side of the map for banned map of blue team and right click for red team, left click the right side with the mod icon for selected map of blue team and right click for red team, and left click the middle area to unselect.  
   ![Imgur](https://i.imgur.com/nbNkkCS.gif "Result Demo")

## How to Use the Result with Broadcasting Software

In this how to, I'm using OBS (Open Broadcaster Software) as my broadcasting software. If you use another software, please refer to their manual while you go through this tutorial.

### Using Window Capture as Source

1. Open your Broadcasting Software and add "_Window Capture_" from the sources. You can rename the source to anything you want, once you're done, you can click the ok button.  
   ![Imgur](https://i.imgur.com/wSJAmJD.png "Select the Source")
   ![Imgur](https://i.imgur.com/MbACfqy.png "Create Source Window")
2. Change the window to the browser window (in this case, it's chrome) where you open the mappool generator website, then click ok.  
   ![Imgur](https://i.imgur.com/E4NvqVH.png "Properties for Window Capture")

3. If your broadcasting software aren't able to display chrome correctly (black screen), follow these steps (If not, you can skip these steps):

   1. On the top right corner of chrome, there's a three dot menu, click it and select settings.  
      ![Imgur](https://i.imgur.com/KqpjcBr.png "Chrome Menu")
   2. Search for "_Hardware Acceleration_", and disable it, then relaunch chrome.  
      ![Imgur](https://i.imgur.com/MbOpAPN.png "Chrome Settings")

4. Right click the source that you just added, and choose filters.
   ![Imgur](https://i.imgur.com/YMn5AoH.png "Source Context Menu")
5. On the filters window, add the crop/pad filter to the effect filters, you can rename the filter if you want to. In this tutorial, I only want to crop the top bar of the window, so I only fill in the top input to 90.  
   ![Imgur](https://i.imgur.com/oagCaRM.png "Filters Menu")
   ![Imgur](https://i.imgur.com/IqHFUM2.png "Crop Properties")
6. Then add another filter called Chroma key to the Effect Filters, you can rename the filter if you want to. If you notice the TB icon, it also disappears because of the chrome key, you need to change similarity from 400 to 350.  
   ![Imgur](https://i.imgur.com/blYnLes.png "Filters Menu")
   ![Imgur](https://i.imgur.com/IZPT5ck.png "Chroma Key Properties")
7. Then you can close the filters window and you're done! It will look more or less something like this.
   ![Imgur](https://i.imgur.com/BtCDBfH.png "Final Result!")

---

### Using Browser as Source

1. Open you Broadcasting Software and add "_Browser_" from the sources. You can rename the source to anything you want, once you're done, you can click the ok button.  
   ![Imgur](https://puu.sh/E00v3/a4c999b084.png "Add Browser Source")
   ![Imgur](https://i.imgur.com/m6LBJNV.png "Create Source Window")
2. Then, You'll be greeted by the Browser Source Properties Window. Follow one of these steps:
   - If you follow _Step 5_ from ["How to Use the Generator"](https://github.com/mrayhanhakim/mappool-generator#How-to-Use-the-Generator) section, you can check the local file and browse the html file that you just saved.
     ![Imgur](https://puu.sh/E00v8/c5bbe57129.png "Check local file and Browse File")
   - Or, You can directly enter the generator website URL into the Browser source properties by unchecking the local file. Here's the URL: `https://mrayhanhakim.github.io/mappool-generator`
     ![Imgur](https://i.imgur.com/vjkS4EK.png "Uncheck local file and input the URL")
3. Change the width and height of the source, I'm using 1920 for width and 1080 for height.
4. To remove the green background from the result, Add this to the Custom CSS box:

   ```css
   #resultWrapper {
     background-color: rgba(0, 0, 0, 0);
   }
   ```

   You can change the background color instead if you want since it's using RGB Color (integer) and alpha level from 0 - 1 (decimal) for the color. If you're done customizing, click ok to close the properties window

5. Right click the source and choose interact to use the generator/result.  
   ![Imgur](https://i.imgur.com/GTpXoAb.png?1 "Source Context Menu")  
   If you follow step 1 using local file, you can directly follow _Step 6_ from ["How to Use the Generator"](https://github.com/mrayhanhakim/mappool-generator#How-to-Use-the-Generator) Section.  
   ![Imgur](https://i.imgur.com/UrNgYCZ.png)
   If not, follow the steps from ["How to Use the Generator"](https://github.com/mrayhanhakim/mappool-generator#How-to-Use-the-Generator) Section to use the generator.
   ![Imgur](https://i.imgur.com/XlJzjX2.png "Interact directly with the generator")

   (**Note**: Uncheck "_Shutdown source when not visible_" and "_Refresh browser when scene becomes active_" if it's checked in the browser properties).

---

If there's something wrong with the program, post the issue in this repository and feel free to leave any suggestion in the forum post!

---

This project is licensed under the terms of the MIT license.

![Imgur](https://img.shields.io/badge/License-MIT-yellow.svg "License: MIT")
